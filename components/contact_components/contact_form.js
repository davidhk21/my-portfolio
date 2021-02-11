import React, { useState } from 'react';
import sendContactMail from '../../utils/mail_api';
import validator from 'validator';
import styles from '../../styles/Contact.module.css';

export default function ContactForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [formContent, setFormContent] = useState('');
  const [fieldsError, setFieldsError] = useState(false);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFormContentChange = (e) => {
    setFormContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName && validator.isEmail(email) && formContent) {
      setFieldsError(false);
      sendContactMail(firstName, lastName, email, formContent);
      setFirstName('');
      setLastName('');
      setEmail('');
      setFormContent('');
    } else {
      setFieldsError(true);
    }
  };

  return (
    <div className={styles.contactFormContainer}>
      <div className={styles.questionsContainer}>
        <div className={styles.questionContainer}>
          <p>Interested in becoming a Software Engineer from a non-technical background?</p>
        </div>
        <div className={styles.questionContainer}>
          <p>Interested in becoming a Software Engineer from a non-technical background?</p>
        </div>
        <div className={styles.questionContainer}>
          <p>Interested in becoming a Software Engineer from a non-technical background?</p>
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit} className={styles.formContainer}>
          {fieldsError ? <div>All fields need to be filled, or if all fields are filled, make sure email is valid</div> : null}
          <label htmlFor="first-name">
            First Name:
            <input type="text" value={firstName} onChange={handleFirstNameChange} />
          </label>
          <label htmlFor="last-name">
            Last Name:
            <input type="text" value={lastName} onChange={handleLastNameChange} />
          </label>
          <label htmlFor="email">
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
          <label htmlFor="form-content">
            Form Content:
            <input type="text" value={formContent} onChange={handleFormContentChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
