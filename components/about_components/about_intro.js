import React from 'react';
import { Image } from 'react-bootstrap';
import styles from '../../styles/About.module.css';

export default function AboutIntro() {
  return (
    <div className={styles.imageContainer}>
      <Image
        src="/about2-background.JPG"
        alt="Picture of the author"
        className={styles.introImage}
        fluid
      />
      <div className={styles.imageTextContainer}>
        <h1 className={styles.imageTitle}>My Passions & Personality</h1>
      </div>
    </div>
  );
}
