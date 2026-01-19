import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    },
});

export const sendOtpEmail = async (to, otp) => {
    await transporter.sendMail({
        from: "nhonga.net",
        to,
        subject: "Código de verificação",
        text: `O seu código é: ${otp} (expira em 10 minutos)`,
    });
};
