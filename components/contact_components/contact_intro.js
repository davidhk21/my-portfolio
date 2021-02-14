import React from 'react';
import { Image } from 'react-bootstrap';
import styles from '../../styles/Contact.module.css';

export default function ContactIntro() {
  return (
    <div className={styles.imageContainer}>
      <Image
        src="/contact-background.jpg"
        alt="Picture of the author"
        className={styles.introImage}
        fluid
      />
      <div className={styles.imageTextContainer}>
        <h1 className={styles.imageTitle}>Let&apos;s Connect</h1>
      </div>
    </div>
  );
}
