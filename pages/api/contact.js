const nodemailer = require('nodemailer');
const credentials = require('../../contact_config.js');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'davidhk21@gmail.com',
    pass: credentials.email_pass,
  },
});

const mailer = ({ firstName, lastName, email, content }) => {
  const from = `${firstName} ${lastName} <${email}>`;
  const message = {
    from,
    to: 'davidhk21@gmail.com',
    subject: `Portfolio Website Inquiry from ${from}`,
    text: content,
    replyTo: from,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (err, info) => {
      if (err) {
        reject(err);
      } else {
        resolve(info);
      }
    });
  });
};

export default async (req, res) => {
  const { firstName, lastName, email, content } = req.body;

  const mailerRes = await mailer({ firstName, lastName, email, content });

  res.send(mailerRes);
};
