import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req, res) => {
  const { firstName, lastName, email, content } = req.body;
  const { data, error } = await resend.emails.send({
    from: `${firstName} ${lastName} <onboarding@resend.dev>`,
    to: 'davidhk21@gmail.com',
    subject: 'Email from Portfolio Website',
    html: `<div>${content}</div>`,
    replyTo: email,
  });

  if (error) {
    return res.status(400).json({ error });
  }

  return res.status(200).json({ data });
};
