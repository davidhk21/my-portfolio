import React from 'react';
import { Image } from 'react-bootstrap';
import styles from '../../styles/Home.module.css';

export default function Passion() {
  return (
    <div className={styles.passionContainer1}>
      <div className={styles.selfPortraitContainer}>
        <Image
          src="/self_portrait.JPG"
          alt="Picture of the author"
          className={styles.selfPortrait}
        />
      </div>
      <div className={styles.passionInfoContainer}>
        <h1 className={styles.passionTitle}>My passion and focus is people and self-development</h1>
        <p className={styles.passionDesc}>By pushing myself to have experiences such as studying abroad for a full year in Shanghai, China and organizing my University&apos;s very first TEDx event with the theme &quot;Take The Leap&quot;, I was able to develop a growth mindset that ultimately led me to fall in love with Software Engineering.</p>
      </div>
    </div>
  );
}
