/**
 * Microsoft Graph mail test.
 *
 * Verifies the app registration in .env.local independently of the website, so
 * a mail problem can be diagnosed without going through a form submission.
 *
 *   node scripts/test-graph.js              # request a token only
 *   node scripts/test-graph.js --send       # also send a real test email
 *
 * Run from the project root.
 */
const fs = require('fs');
const path = require('path');

// Minimal .env.local reader — avoids adding a dependency just for this script.
function loadEnv(file) {
  if (!fs.existsSync(file)) return {};
  const out = {};
  for (const raw of fs.readFileSync(file, 'utf8').split(/\r?\n/)) {
    const line = raw.trim();
    if (!line || line.startsWith('#')) continue;
    const eq = line.indexOf('=');
    if (eq < 0) continue;
    const key = line.slice(0, eq).trim();
    let val = line.slice(eq + 1).trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    out[key] = val;
  }
  return out;
}

const env = { ...loadEnv(path.join(process.cwd(), '.env.local')), ...process.env };
const { MS_TENANT_ID, MS_CLIENT_ID, MS_CLIENT_SECRET, MAIL_FROM, MAIL_TO } = env;

const missing = ['MS_TENANT_ID', 'MS_CLIENT_ID', 'MS_CLIENT_SECRET', 'MAIL_TO']
  .filter((k) => !env[k]);
if (missing.length) {
  console.error('Missing in .env.local: ' + missing.join(', '));
  process.exit(1);
}

function bareAddress(value) {
  const m = String(value || '').match(/<([^>]+)>/);
  return (m ? m[1] : value).trim();
}

const sender = bareAddress(MAIL_FROM || MAIL_TO);

console.log('Tenant : ' + MS_TENANT_ID);
console.log('Client : ' + MS_CLIENT_ID);
console.log('Secret : ' + '*'.repeat(Math.min(String(MS_CLIENT_SECRET).length, 16)));
console.log('Send as: ' + sender);
console.log('To     : ' + MAIL_TO);
console.log('');

(async () => {
  // ---- Step 1: token ----
  let token;
  try {
    const res = await fetch(
      'https://login.microsoftonline.com/' + MS_TENANT_ID + '/oauth2/v2.0/token',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          client_id: MS_CLIENT_ID,
          client_secret: MS_CLIENT_SECRET,
          scope: 'https://graph.microsoft.com/.default',
          grant_type: 'client_credentials',
        }),
      }
    );
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.access_token) {
      console.error('TOKEN REQUEST FAILED');
      console.error('  status : ' + res.status);
      console.error('  error  : ' + (data.error || '-'));
      console.error('  detail : ' + (data.error_description || '-'));
      console.error('');
      if (String(data.error_description || '').includes('AADSTS7000215')) {
        console.error('AADSTS7000215 = wrong client secret. Make sure you copied the');
        console.error('secret VALUE, not the Secret ID, and that it has not expired.');
      } else if (String(data.error_description || '').includes('AADSTS700016')) {
        console.error('AADSTS700016 = the client ID was not found in this tenant.');
      }
      process.exit(1);
    }
    token = data.access_token;
    console.log('TOKEN OK — the app registration authenticated.');
  } catch (err) {
    console.error('TOKEN REQUEST ERRORED: ' + (err.message || String(err)));
    process.exit(1);
  }

  if (!process.argv.includes('--send')) {
    console.log('');
    console.log('Re-run with --send to deliver a real test email to ' + MAIL_TO + '.');
    return;
  }

  // ---- Step 2: send ----
  const res = await fetch(
    'https://graph.microsoft.com/v1.0/users/' + encodeURIComponent(sender) + '/sendMail',
    {
      method: 'POST',
      headers: { Authorization: 'Bearer ' + token, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: {
          subject: 'Dobaria Law PC — Microsoft Graph test',
          body: {
            contentType: 'HTML',
            content:
              '<p>This is a test message from the website contact form configuration.</p>' +
              '<p>If you are reading this, Microsoft Graph mail is working correctly.</p>',
          },
          toRecipients: String(MAIL_TO)
            .split(',')
            .map((a) => a.trim())
            .filter(Boolean)
            .map((address) => ({ emailAddress: { address } })),
        },
        saveToSentItems: true,
      }),
    }
  );

  if (res.ok) {
    console.log('SENT — Graph accepted the message.');
    console.log('Check the ' + MAIL_TO + ' inbox (and the junk folder).');
    return;
  }

  const body = await res.text().catch(() => '');
  console.error('SEND FAILED');
  console.error('  status : ' + res.status);
  console.error('  body   : ' + body);
  console.error('');
  if (res.status === 403) {
    console.error('403 means the app lacks permission to send as ' + sender + '.');
    console.error('  1. Confirm Mail.Send is added as an APPLICATION permission');
    console.error('     (not delegated), and that admin consent has been granted.');
    console.error('  2. If an application access policy is in place, confirm it');
    console.error('     allows this app to access that mailbox.');
  } else if (res.status === 404) {
    console.error('404 means the mailbox ' + sender + ' was not found in the tenant.');
  }
  process.exit(1);
})();
