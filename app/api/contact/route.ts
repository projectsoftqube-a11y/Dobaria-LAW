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
  source?: string; // which form it came from
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
  if (!message) errors.message = "Message is required.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  // ---- SMTP config guard ----
  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, MAIL_FROM, MAIL_TO } =
    process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !MAIL_TO) {
    console.error("Contact form: SMTP is not configured (missing env vars).");
    return NextResponse.json(
      { error: "Email service is not configured yet. Please call the office or try again later." },
      { status: 503 }
    );
  }

  const prettyPhone = phone || "Not provided";

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: SMTP_SECURE === "true",
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

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
    await transporter.sendMail({
      from: MAIL_FROM || SMTP_USER,
      to: MAIL_TO,
      replyTo: email,
      subject,
      text,
      html,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form: failed to send email.", err);
    return NextResponse.json(
      { error: "We couldn't send your message. Please call the office or try again later." },
      { status: 502 }
    );
  }
}
