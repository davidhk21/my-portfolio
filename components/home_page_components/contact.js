import React from 'react';
import { Image } from 'react-bootstrap';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

export default function Contact() {
  return (
    <div className={styles.contactContainer}>
      <Image
        src="/computer_background.jpg"
        alt="Picture of someone working on a computer"
        className={styles.contactBackgroundImage}
      />
      <div className={styles.contactTextContainer}>
        <h3 className={styles.contactTitle}>Web Developer</h3>
        <h1 className={styles.contactQuestion}>Need a Front-End/Full Stack Software Engineer or have any questions?</h1>
        <Link href="/contact_me">
          <a className={styles.buttonHelp}>I&apos;M HERE TO HELP YOU</a>
        </Link>
      </div>
    </div>
  );
}
