const nodemailer = require('nodemailer');
const email = require('../../contact_config.js');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'davidhk21@gmail.com',
    pass: email.email_pass,
  },
});

const mailOptions = {
  from: 'davidhk21@gmail.com',
  to: 'davidhk21@gmail.com',
  subject: 'New Message From Website!',
  text: 'It works!!!',
};

transporter.sendMail(mailOptions, (err, res) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Email sent: ', res);
  }
});

export default (req, res) => {


  res.status(200).send('it works!');
};
