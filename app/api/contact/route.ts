// app/api/contact/route.ts
// Handles contact / consultation form submissions and emails the firm via SMTP (nodemailer).

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

interface ContactPayload {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  practice?: string;
  message?: string;
  company?: string; // honeypot — always empty for a real person
  source?: string; // which form it came from
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ---- Rate limiting ----
// A small in-memory sliding window. It lives per serverless instance rather
// than in shared storage, so it is not an airtight quota — it is there to stop
// one script hammering the firm's inbox, which it does well enough without
// adding a database.
const RATE_LIMIT_MAX = 5; // submissions ...
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // ... per 10 minutes, per IP.
const hits = new Map<string, number[]>();

function clientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return req.headers.get("x-real-ip") || "unknown";
}

/** True when this IP has already used up its allowance. */
function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (recent.length >= RATE_LIMIT_MAX) {
    hits.set(ip, recent);
    return true;
  }

  recent.push(now);
  hits.set(ip, recent);

  // Keep the map from growing without bound on a long-lived instance.
  if (hits.size > 500) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= RATE_LIMIT_WINDOW_MS)) hits.delete(key);
    }
  }

  return false;
}

/**
 * Push the inquiry to Clio Grow as an Inbox Lead so a client profile is
 * created without anyone re-keying it.
 *
 * Configured with CLIO_GROW_INBOX_TOKEN (from Clio Grow →
 * Settings → Inbox → Web Form). When the token is absent this is a no-op, so
 * the form keeps working before the integration is switched on.
 *
 * Never throws: a Clio outage must not cost the firm the lead, which still
 * arrives by email regardless.
 */
async function sendToClioGrow(lead: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  source: string;
}): Promise<void> {
  const token = process.env.CLIO_GROW_INBOX_TOKEN;
  if (!token) return;

  const endpoint =
    process.env.CLIO_GROW_INBOX_URL ||
    "https://grow.clio.com/inbox_leads";

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        inbox_lead: {
          from_first: lead.firstName,
          from_last: lead.lastName,
          from_email: lead.email,
          from_phone: lead.phone,
          from_message: lead.message,
          referring_url: lead.source,
          from_source: "Website — dobarialaw.com",
        },
        inbox_lead_token: token,
      }),
      signal: AbortSignal.timeout(8000),
    });

    if (!res.ok) {
      console.error(
        "Clio Grow: lead push failed.",
        res.status,
        await res.text().catch(() => "")
      );
    }
  } catch (err) {
    console.error("Clio Grow: lead push errored.", err);
  }
}

/**
 * Pull the bare address out of a "Name <a@b.com>" header value. Graph wants
 * the mailbox on its own, whereas SMTP is happy with the display form.
 */
function bareAddress(value: string): string {
  const match = value.match(/<([^>]+)>/);
  return (match ? match[1] : value).trim();
}

// Client-credentials tokens are valid for roughly an hour. Caching one saves a
// round trip to Entra on every submission, and survives as long as the
// serverless instance does.
let cachedToken: { value: string; expiresAt: number } | null = null;

/** Fetch (or reuse) an app-only Graph token for this tenant. */
async function graphToken(): Promise<string> {
  if (cachedToken && Date.now() < cachedToken.expiresAt) return cachedToken.value;

  const res = await fetch(
    `https://login.microsoftonline.com/${process.env.MS_TENANT_ID}/oauth2/v2.0/token`,
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: process.env.MS_CLIENT_ID || "",
        client_secret: process.env.MS_CLIENT_SECRET || "",
        scope: "https://graph.microsoft.com/.default",
        grant_type: "client_credentials",
      }),
      signal: AbortSignal.timeout(10000),
    }
  );

  const data = (await res.json().catch(() => ({}))) as {
    access_token?: string;
    expires_in?: number;
    error_description?: string;
  };

  if (!res.ok || !data.access_token) {
    throw new Error(`Graph token request failed: ${data.error_description || res.status}`);
  }

  // Expire the cache a minute early so a token is never used on its last legs.
  cachedToken = {
    value: data.access_token,
    expiresAt: Date.now() + ((data.expires_in || 3600) - 60) * 1000,
  };
  return cachedToken.value;
}

/**
 * Send through Microsoft Graph rather than SMTP.
 *
 * Used when MS_TENANT_ID / MS_CLIENT_ID / MS_CLIENT_SECRET are set. This path
 * needs no mailbox password and no Exchange licence on the sending address,
 * so it works for a shared mailbox that cannot sign in — and it is unaffected
 * by Microsoft retiring SMTP basic authentication.
 */
async function sendViaGraph(mail: {
  sender: string;
  to: string;
  replyTo: string;
  subject: string;
  html: string;
}): Promise<void> {
  const token = await graphToken();

  const recipients = mail.to
    .split(",")
    .map((a) => a.trim())
    .filter(Boolean)
    .map((address) => ({ emailAddress: { address } }));

  const res = await fetch(
    `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(mail.sender)}/sendMail`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: {
          subject: mail.subject,
          body: { contentType: "HTML", content: mail.html },
          toRecipients: recipients,
          // So replying in the inbox goes to the enquirer, not to ourselves.
          replyTo: [{ emailAddress: { address: mail.replyTo } }],
        },
        saveToSentItems: true,
      }),
      signal: AbortSignal.timeout(15000),
    }
  );

  if (!res.ok) {
    throw new Error(`Graph sendMail failed: ${res.status} ${await res.text().catch(() => "")}`);
  }
}

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: Request) {
  let body: ContactPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // ---- Honeypot ----
  // The field is hidden from real users, so a value here means a bot filled the
  // form in. Answer with the same success shape a person gets: telling a
  // scraper it was detected only invites another attempt with the field left
  // blank. Nothing is emailed.
  if ((body.company || "").trim()) {
    return NextResponse.json({ ok: true });
  }

  // ---- Rate limiting ----
  if (isRateLimited(clientIp(req))) {
    return NextResponse.json(
      { error: "Too many submissions. Please wait a few minutes or call the office." },
      { status: 429 }
    );
  }

  const firstName = (body.firstName || "").trim();
  const lastName = (body.lastName || "").trim();
  const email = (body.email || "").trim();
  const phone = (body.phone || "").trim();
  const practice = (body.practice || "").trim();
  const message = (body.message || "").trim();
  const source = (body.source || "Website form").trim();

  // ---- Server-side validation ----
  const errors: Record<string, string> = {};
  if (!firstName) errors.firstName = "First name is required.";
  if (!lastName) errors.lastName = "Last name is required.";
  if (!email) errors.email = "Email is required.";
  else if (!EMAIL_RE.test(email)) errors.email = "Please enter a valid email.";
  if (!practice) errors.practice = "Please select a matter type.";
  if (!message) errors.message = "Please describe your matter.";
  else if (message.length < 10) errors.message = "Please add a little more detail.";

  // Phone is optional, but reject a partial number so the firm never gets an
  // un-callable lead.
  if (phone) {
    const digits = phone.replace(/[^0-9]/g, "").replace(/^1/, "");
    if (digits.length !== 10) errors.phone = "Please enter a complete 10-digit phone number.";
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  // ---- Transport selection ----
  // Graph wins when it is configured, because it needs no mailbox password and
  // no licence on the sending address. SMTP stays as the fallback so an
  // existing deployment keeps working untouched.
  const {
    SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS,
    MS_TENANT_ID, MS_CLIENT_ID, MS_CLIENT_SECRET,
    MAIL_FROM, MAIL_TO,
  } = process.env;

  const useGraph = Boolean(MS_TENANT_ID && MS_CLIENT_ID && MS_CLIENT_SECRET);
  const smtpReady = Boolean(SMTP_HOST && SMTP_USER && SMTP_PASS);

  if (!MAIL_TO || (!useGraph && !smtpReady)) {
    console.error("Contact form: no mail transport is configured (missing env vars).");
    return NextResponse.json(
      { error: "Email service is not configured yet. Please call the office or try again later." },
      { status: 503 }
    );
  }

  const prettyPhone = phone || "Not provided";

  const subject = `New inquiry from ${firstName} ${lastName}${practice ? ` — ${practice}` : ""}`;

  const text = [
    `New inquiry via ${source}`,
    ``,
    `Name:     ${firstName} ${lastName}`,
    `Email:    ${email}`,
    `Phone:    ${prettyPhone}`,
    `Practice: ${practice || "Not specified"}`,
    ``,
    `Message:`,
    message,
  ].join("\n");

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#14163A;line-height:1.6">
      <h2 style="color:#1B1E49;margin:0 0 4px">New inquiry via ${esc(source)}</h2>
      <hr style="border:none;border-top:2px solid #C29A3E;width:48px;margin:8px 0 16px" />
      <p><strong>Name:</strong> ${esc(firstName)} ${esc(lastName)}</p>
      <p><strong>Email:</strong> <a href="mailto:${esc(email)}">${esc(email)}</a></p>
      <p><strong>Phone:</strong> ${esc(prettyPhone)}</p>
      <p><strong>Practice Area:</strong> ${esc(practice || "Not specified")}</p>
      <p style="margin-top:16px"><strong>Message:</strong></p>
      <p style="white-space:pre-wrap;background:#F8F6F2;border-left:3px solid #C29A3E;padding:12px 16px">${esc(
        message
      )}</p>
    </div>`;

  try {
    if (useGraph) {
      // Graph sends *as* this mailbox, so it must be the shared mailbox the
      // firm actually reads — not whichever identity happens to authenticate.
      await sendViaGraph({
        sender: bareAddress(MAIL_FROM || MAIL_TO),
        to: MAIL_TO,
        replyTo: email,
        subject,
        html,
      });
    } else {
      const port = Number(SMTP_PORT) || 587;

      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port,
        // Port 465 uses implicit TLS; 587 connects in the clear and upgrades
        // via STARTTLS, which is what Microsoft 365 requires.
        secure: SMTP_SECURE === "true" || port === 465,
        requireTLS: port === 587,
        auth: { user: SMTP_USER, pass: SMTP_PASS },
        tls: { minVersion: "TLSv1.2" },
        connectionTimeout: 15000,
        greetingTimeout: 15000,
        socketTimeout: 20000,
      });

      await transporter.sendMail({
        from: MAIL_FROM || SMTP_USER,
        to: MAIL_TO,
        replyTo: email,
        subject,
        text,
        html,
      });
    }

    // Mirror the lead into Clio Grow. Awaited so it completes before the
    // serverless function is frozen, but its failure never fails the request.
    await sendToClioGrow({
      firstName,
      lastName,
      email,
      phone: prettyPhone === "Not provided" ? "" : prettyPhone,
      message,
      source,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    const e = err as { code?: string; responseCode?: number; message?: string };

    // 535 / EAUTH from Microsoft 365 nearly always means SMTP AUTH is disabled
    // for the mailbox, or a normal password was used instead of an app
    // password. Log it distinctly so it is not mistaken for a network blip.
    if (e.code === "EAUTH" || e.responseCode === 535) {
      console.error(
        "Contact form: SMTP authentication rejected. For Microsoft 365, confirm " +
          "SMTP AUTH is enabled for this mailbox and that SMTP_PASS is an app " +
          "password, not the account password.",
        e.message
      );
    } else {
      console.error("Contact form: failed to send email.", err);
    }

    return NextResponse.json(
      { error: "We couldn't send your message. Please call the office or try again later." },
      { status: 502 }
    );
  }
}
