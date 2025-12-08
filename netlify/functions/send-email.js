const nodemailer = require("nodemailer");

exports.handler = async (event, context) => {
    try {
        const { fullName, email, phone, company, message } = JSON.parse(event.body);

        if (!fullName || !email || !message) {
            return { statusCode: 400, body: JSON.stringify({ ok: false, message: "Missing fields" }) };
        }

        // Prefer explicit SMTP relay config (Brevo) instead of service:gmail
        const EMAIL_USER = process.env.EMAIL_USER;
        const EMAIL_PASS = process.env.EMAIL_PASS;

        // compute a short SHA256 of the password for easier debugging without printing raw secret
        const crypto = require('crypto');
        const EMAIL_PASS_HASH = EMAIL_PASS ? crypto.createHash('sha256').update(EMAIL_PASS).digest('hex') : null;

        const transporter = nodemailer.createTransport({
            host: 'smtp-relay.brevo.com',
            port: 587,
            secure: false,
            auth: {
                user: EMAIL_USER || '9d66f6001@smtp-brevo.com',
                pass: EMAIL_PASS
            }
        });

        // log minimal debug info
        console.log('netlify transporter debug', { host: 'smtp-relay.brevo.com', authUser: EMAIL_USER, emailPassSet: !!EMAIL_PASS, emailPassSha256: EMAIL_PASS_HASH });

        const mailInfo = await transporter.sendMail({
            from: EMAIL_USER || 'no-reply@example.com',
            to: "gecezeeshan@gmail.com",
            replyTo: email, // user's email for reply
            subject: `New message from ${fullName}`,
            text:
                `Name: ${fullName}\n` +
                `Email: ${email}\n` +
                `Phone: ${phone || "-"}\n` +
                `Company: ${company || "-"}\n\n` +
                `Message:\n${message}`
        });

        return { statusCode: 200, body: JSON.stringify({ ok: true, info: mailInfo, debug: { EMAIL_USER, EMAIL_PASS_SET: !!EMAIL_PASS, EMAIL_PASS_SHA256: EMAIL_PASS_HASH } }) };
    } catch (err) {
        console.error(err);
        return { statusCode: 500, body: JSON.stringify({ ok: false, message: err.message }) };
    }
};
