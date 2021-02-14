import React, { useState } from 'react';
import validator from 'validator';
import sendContactMail from '../../utils/mail_api';
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
          Looking to hire a Frontend/Full-Stack Software Engineer?
        </div>
        <div className={styles.questionContainer}>
          Interested in becoming a Software Engineer from a non-technical background?
        </div>
        <div className={styles.questionContainer}>
          Need help with anything or have any questions?
        </div>
      </div>
      {fieldsError ? <div className={styles.formError}>Your form has encountered a problem. Please make sure all the fields are filled and that the email entered is valid.</div> : null}
      <div>
        <form onSubmit={handleSubmit} className={styles.formContainer}>
          <div className={styles.formMiniContainer}>
            <div className={styles.firstLastFields}>
              <label htmlFor="first-name" className={styles.nameInputsContainer}>
                First Name *
                <input type="text" value={firstName} onChange={handleFirstNameChange} className={styles.nameInputs} />
              </label>
              <label htmlFor="last-name" className={styles.nameInputsContainer}>
                Last Name *
                <input type="text" value={lastName} onChange={handleLastNameChange} className={styles.nameInputs} />
              </label>
            </div>
            <label htmlFor="email">
              Email *
              <input type="email" value={email} onChange={handleEmailChange} className={styles.emailInput} />
            </label>
            <label htmlFor="form-content">
              Your Message *
              <textarea type="text" value={formContent} onChange={handleFormContentChange} className={styles.contentInput} />
            </label>
            <input type="submit" value="SEND MESSAGE" className={styles.submitContact} />
          </div>
        </form>
      </div>
    </div>
  );
}
