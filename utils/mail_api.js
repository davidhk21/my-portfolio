import axios from 'axios';

const sendContactMail = (firstName, lastName, email, content) => {
  const data = {
    firstName,
    lastName,
    email,
    content,
  };

  axios.post('/api/contact', data)
    .then((res) => {
      console.log('posted!', res);
    })
    .catch((err) => {
      console.error(err);
    });
};

export default sendContactMail;
