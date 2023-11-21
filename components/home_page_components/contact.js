import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import { imageUrl } from '../../pages/_app';

export default function Contact() {
  return (
    <div className={styles.contactContainer}>
      <Image
        src={`${imageUrl}/computer-background.jpg`}
        alt="Picture of someone working on a computer"
        className={styles.contactBackgroundImage}
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className={styles.contactTextContainer}>
        <h3 className={styles.contactTitle}>Web Developer</h3>
        <h1 className={styles.contactQuestion}>Need a Front-End/Full Stack Software Engineer or have any questions?</h1>
        <Link href="/contact_me">
          <a className={styles.buttonHelp}>
            I&apos;M HERE TO HELP YOU
          </a>
        </Link>
      </div>
    </div>
  );
}
