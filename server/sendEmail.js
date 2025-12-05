// Minimal Express server to accept contact form data and send email via Nodemailer
// Usage (PowerShell):
// $env:EMAIL_USER='your_email@example.com'; $env:EMAIL_PASS='YOUR_APP_PASSWORD'; npm run server

const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const crypto = require('crypto');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Configure transporter using environment variables. This avoids committing credentials.
const EMAIL_USER = process.env.EMAIL_USER; // e.g. 'your_email@example.com'
const EMAIL_PASS = process.env.EMAIL_PASS; // e.g. app password


console.log('EMAIL_USER:', EMAIL_USER);
const EMAIL_PASS_HASH = EMAIL_PASS ? crypto.createHash('sha256').update(EMAIL_PASS).digest('hex') : null;
console.log('EMAIL_PASS:', EMAIL_PASS ? '[set]' : '[not set]');
console.log('EMAIL_PASS_SHA256:', EMAIL_PASS_HASH || '[not set]');
if (!EMAIL_USER || !EMAIL_PASS) {
    console.warn('Warning: EMAIL_USER or EMAIL_PASS not set. Set env vars before running server to send mail.');
}

const transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    secure: false, // TLS is used but not implicit
    auth: {
        user: EMAIL_USER || '9d66f6001@smtp-brevo.com',
        pass: EMAIL_PASS
    }
});

// Log the transporter config we configured (don't print the raw password)
const transporterConfigDebug = {
    host: 'smtp-relay.brevo.com',
    port: 587,
    secure: false,
    authUser: EMAIL_USER || '9d66f6001@smtp-brevo.com',
    emailPassSet: !!EMAIL_PASS,
    emailPassSha256: EMAIL_PASS_HASH
};
console.log('transporter config:', transporterConfigDebug);

app.post('/send-email', async (req, res) => {
    try {
        const { fullName, email, phone, company, message } = req.body || {};

        if (!fullName || !email || !message) {
            return res.status(400).json({ ok: false, message: 'Missing required fields' });
        }

        const mailOptions = {
            from: EMAIL_USER || 'no-reply@example.com',
            to: EMAIL_USER || 'no-reply@example.com',
            subject: `Contact form submission from ${fullName}`,
            text: [`Full name: ${fullName}`, `E-mail: ${email}`, `Phone: ${phone || '-'}`, `Company: ${company || '-'}`, '', 'Message:', message].join('\n')
        };


    if (!EMAIL_USER || !EMAIL_PASS) {
            // If no credentials provided, don't attempt to send — return success=false with guidance
            return res.status(500).json({
                ok: false,
                message: 'Mail credentials not configured on server. Set EMAIL_USER and EMAIL_PASS environment variables.',
                debug: {
                    EMAIL_USER,
                    EMAIL_PASS: EMAIL_PASS ? '[set]' : '[not set]'
                }
            });
        }

        // Log mail options for debugging (no secrets)
        console.log('mailOptions:', { from: mailOptions.from, to: mailOptions.to, subject: mailOptions.subject });

        const info = await transporter.sendMail(mailOptions);
        return res.json({ ok: true, message: 'Email sent', info, debug: { EMAIL_USER, EMAIL_PASS: EMAIL_PASS ? '[set]' : '[not set]', EMAIL_PASS_SHA256: EMAIL_PASS_HASH, transporter: transporterConfigDebug } });
    } catch (err) {
        console.error('Error sending email:', err);
        console.error('EMAIL_USER:', EMAIL_USER);
        console.error('EMAIL_PASS:', EMAIL_PASS ? '[set]' : '[not set]');
        console.error('EMAIL_PASS_SHA256:', EMAIL_PASS_HASH);
        console.error('transporter config:', transporterConfigDebug);
        return res.status(500).json({
            ok: false,
            message: 'Failed to send email',
            error: err.message,
            debug: {
                EMAIL_USER,
                EMAIL_PASS: EMAIL_PASS ? '[set]' : '[not set]',
                EMAIL_PASS_SHA256: EMAIL_PASS_HASH,
                transporter: transporterConfigDebug
            }
        });
    }
});

// Temporary debug route to inspect mailer configuration without exposing raw secrets
app.get('/_mail-debug', (req, res) => {
    try {
        return res.json({
            ok: true,
            debug: {
                EMAIL_USER,
                EMAIL_PASS_SET: !!EMAIL_PASS,
                EMAIL_PASS_SHA256: EMAIL_PASS_HASH,
                transporter: transporterConfigDebug
            }
        });
    } catch (err) {
        return res.status(500).json({ ok: false, error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Email server listening on http://localhost:${PORT}`);
});
