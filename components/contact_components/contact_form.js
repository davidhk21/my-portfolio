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
          <div className={styles.formMiniContainer}>
            {fieldsError ? <div>All fields need to be filled, or if all fields are filled, make sure email is valid</div> : null}
            <div className={styles.firstLastFields}>
              <label htmlFor="first-name">
                {/* First Name: */}
                <input type="text" value={firstName} onChange={handleFirstNameChange} className={styles.nameInputs}/>
              </label>
              <label htmlFor="last-name">
                {/* Last Name: */}
                <input type="text" value={lastName} onChange={handleLastNameChange} className={styles.nameInputs} />
              </label>
            </div>
            <label htmlFor="email">
              {/* Email: */}
              <input type="email" value={email} onChange={handleEmailChange} className={styles.emailInput} />
            </label>
            <label htmlFor="form-content">
              {/* Form Content: */}
              <textarea type="text" value={formContent} onChange={handleFormContentChange} className={styles.contentInput} />
            </label>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
