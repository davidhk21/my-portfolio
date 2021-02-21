import React from 'react';
import { Image } from 'react-bootstrap';
import styles from '../../styles/Home.module.css';
import { imageUrl } from '../../pages/_app';

export default function Introduction() {
  return (
    <div className={styles.imageContainer}>
      <Image
        src={`${imageUrl}/prof-pic.JPG`}
        alt="Picture of the author"
        className={styles.introImage}
      />
      <div className={styles.imageTextContainer}>
        <h1 className={styles.imageTitle}>Hi! I&apos;m David Kim,</h1>
        <h3 className={styles.imageText}>a Software Engineer</h3>
      </div>
    </div>
  );
}
