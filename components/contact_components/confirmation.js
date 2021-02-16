import React from 'react';
import styles from '../../styles/Contact.module.css';

export default function Confirmation({ setModal }) {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modal}>
        <h1>Message Sent!</h1>
        <p className={styles.modalText}>Should a response be required, please wait 3 - 5 business days.</p>
        <p className={styles.modalText}>If for some reason I am unable to get back to you by then, feel free to send another message or send me a direct message on LinkedIn!</p>
        <button
          onClick={() => {
            setModal(false);
            document.body.classList.remove('modal-open');
          }}
          className={styles.closeButton}
        >
          CLOSE
        </button>
      </div>
    </div>
  );
}
