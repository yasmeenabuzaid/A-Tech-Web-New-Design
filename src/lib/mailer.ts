import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: process.env.SYS_EMAIL_HOST,
//   port → البورت (465 مع SSL أو 587 مع TLS).
// secure → إذا استخدمنا SSL (true مع 465).
  port: Number(process.env.SYS_EMAIL_PORT),
  secure: true, // true only for 465
  auth: {
    user: process.env.SYS_EMAIL_USER,
    pass: process.env.SYS_EMAIL_PASS,
  },
});

export async function sendMail({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) {
  return await transporter.sendMail({
    from: `"${process.env.MAIL_FROM_NAME}" <${process.env.SYS_EMAIL}>`,
    to,
    subject,
    html,
  });
}
