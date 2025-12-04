const nodemailer = require("nodemailer");

exports.handler = async (event, context) => {
    try {
        const { fullName, email, phone, company, message } = JSON.parse(event.body);

        if (!fullName || !email || !message) {
            return { statusCode: 400, body: JSON.stringify({ ok: false, message: "Missing fields" }) };
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `New message from ${fullName}`,
            text:
                `Name: ${fullName}\n` +
                `Email: ${email}\n` +
                `Phone: ${phone || "-"}\n` +
                `Company: ${company || "-"}\n\n` +
                `Message:\n${message}`
        });

        return { statusCode: 200, body: JSON.stringify({ ok: true }) };
    } catch (err) {
        console.error(err);
        return { statusCode: 500, body: JSON.stringify({ ok: false, message: err.message }) };
    }
};
