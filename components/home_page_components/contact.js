import React from 'react';
import { Image } from 'react-bootstrap';
import styles from '../../styles/Home.module.css';

export default function Contact() {
  return (
    <div className={styles.contactContainer}>
      <Image
        src="/computer_background.JPG"
        alt="Picture of someone working on a computer"
        className={styles.contactBackgroundImage}
      />
      <div>
        Hello!
      </div>
    </div>
  );
}
