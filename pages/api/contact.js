import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'davidhk21@gmail.com',
    pass: process.env.EMAIL_PASS,
  },
});

export default async function handler(req, res) {
  const { firstName, lastName, email, content } = req.body;
  const from = `${firstName} ${lastName} <${email}>`;
  const message = {
    from: email,
    to: 'davidhk21@gmail.com',
    subject: `Portfolio Website Inquiry from ${from}`,
    text: content,
    replyTo: email,
  };
  transporter.sendMail(message, (err, data) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(200).send('Email sent successfully');
  });
}
