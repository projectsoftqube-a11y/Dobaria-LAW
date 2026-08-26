/**
 * SMTP connection test.
 *
 * Verifies the credentials in .env.local independently of the website, so a
 * mail problem can be diagnosed without going through a form submission.
 *
 *   node scripts/test-smtp.js              # verify the connection only
 *   node scripts/test-smtp.js --send       # also send a real test email
 *
 * Run from the project root.
 */
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');

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

const {
  SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, MAIL_FROM, MAIL_TO,
} = env;

const missing = ['SMTP_HOST', 'SMTP_USER', 'SMTP_PASS', 'MAIL_TO'].filter((k) => !env[k]);
if (missing.length) {
  console.error('Missing in .env.local: ' + missing.join(', '));
  console.error('Copy .env.example to .env.local and fill it in.');
  process.exit(1);
}

const port = Number(SMTP_PORT) || 587;

console.log('Host   : ' + SMTP_HOST);
console.log('Port   : ' + port);
console.log('User   : ' + SMTP_USER);
console.log('Pass   : ' + '*'.repeat(Math.min(String(SMTP_PASS).length, 16)));
console.log('To     : ' + MAIL_TO);
console.log('');

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port,
  secure: SMTP_SECURE === 'true' || port === 465,
  requireTLS: port === 587,
  auth: { user: SMTP_USER, pass: SMTP_PASS },
  tls: { minVersion: 'TLSv1.2' },
  connectionTimeout: 15000,
  greetingTimeout: 15000,
  socketTimeout: 20000,
});

(async () => {
  try {
    await transporter.verify();
    console.log('CONNECTION OK — the server accepted these credentials.');
  } catch (err) {
    const e = err;
    console.error('CONNECTION FAILED');
    console.error('  code    : ' + (e.code || '-'));
    console.error('  response: ' + (e.responseCode || '-'));
    console.error('  message : ' + (e.message || String(err)));
    console.error('');

    if (e.code === 'EAUTH' || e.responseCode === 535) {
      console.error('Authentication was rejected. For Microsoft 365 this usually means:');
      console.error('  1. SMTP AUTH is disabled for this mailbox.');
      console.error('     Admin centre -> Users -> Active users -> the user ->');
      console.error('     Mail -> Manage email apps -> tick "Authenticated SMTP".');
      console.error('  2. SMTP_PASS is the account password rather than an app password.');
      console.error('     With MFA enabled, generate an app password and use that.');
      console.error('  3. The tenant blocks basic auth entirely, in which case SMTP will');
      console.error('     not work and Microsoft Graph or a relay is needed instead.');
    } else if (e.code === 'ETIMEDOUT' || e.code === 'ESOCKET' || e.code === 'ECONNECTION') {
      console.error('Could not reach the server. Check the host and port, and whether');
      console.error('outbound port ' + port + ' is blocked by a firewall or the host.');
    }
    process.exit(1);
  }

  if (!process.argv.includes('--send')) {
    console.log('');
    console.log('Re-run with --send to deliver a real test email to ' + MAIL_TO + '.');
    return;
  }

  try {
    const info = await transporter.sendMail({
      from: MAIL_FROM || SMTP_USER,
      to: MAIL_TO,
      subject: 'Dobaria Law PC — SMTP test',
      text:
        'This is a test message from the website contact form configuration.\n' +
        'If you are reading this, SMTP is working correctly.',
    });
    console.log('SENT — message id ' + info.messageId);
    console.log('Check the ' + MAIL_TO + ' inbox (and the junk folder).');
  } catch (err) {
    console.error('SEND FAILED: ' + (err.message || String(err)));
    if (err.responseCode === 550) {
      console.error('550 usually means MAIL_FROM is not an address this mailbox may send as.');
    }
    process.exit(1);
  }
})();
