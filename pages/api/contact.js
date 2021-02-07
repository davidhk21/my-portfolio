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

export default (req, res) => {
  const { firstName, lastName, email, content } = req.body;

  const from = `${firstName} ${lastName} <${email}>`;

  const message = {
    from,
    to: 'davidhk21@gmail.com',
    subject: `Portfolio Website Inquiry from ${from}`,
    text: content,
    replyTo: from,
  };

  transporter.sendMail(message, (err, info) => {
    if (err) {
      console.error(err);
      res.status(404).send(err);
    } else {
      res.status(200).send('Email sent: ', info);
    }
  });
};
