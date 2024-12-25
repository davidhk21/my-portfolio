const sendContactMail = async (firstName, lastName, email, content) => {
  const emailData = {
    firstName,
    lastName,
    email,
    content,
  };

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    });
    if (response.ok) {
      console.log('email was successfully sent!');
    } else {
      console.log('email was not successfully sent');
    }
  } catch (e) {
    console.log('there was an error in post call to email');
    console.error(e);
  }
};

export default sendContactMail;
