// Minimal Express server to accept contact form data and send email via Nodemailer
// Usage (PowerShell):
// $env:EMAIL_USER='your_email@example.com'; $env:EMAIL_PASS='YOUR_APP_PASSWORD'; npm run server

const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Configure transporter using environment variables. This avoids committing credentials.
const EMAIL_USER = process.env.EMAIL_USER; // e.g. 'your_email@example.com'
const EMAIL_PASS = process.env.EMAIL_PASS; // e.g. app password

if (!EMAIL_USER || !EMAIL_PASS) {
    console.warn('Warning: EMAIL_USER or EMAIL_PASS not set. Set env vars before running server to send mail.');
}

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS
    }
});

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
            return res.status(500).json({ ok: false, message: 'Mail credentials not configured on server. Set EMAIL_USER and EMAIL_PASS environment variables.' });
        }

        const info = await transporter.sendMail(mailOptions);
        return res.json({ ok: true, message: 'Email sent', info });
    } catch (err) {
        console.error('Error sending email:', err);
        return res.status(500).json({ ok: false, message: 'Failed to send email', error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Email server listening on http://localhost:${PORT}`);
});
