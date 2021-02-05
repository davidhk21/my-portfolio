import React from 'react';
import { Image } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import styles from '../../styles/Home.module.css';

export default function Passion() {
  return (
    <div className={styles.passionContainer1}>
      <Fade distance="100px" delay={500} left>
        <div className={styles.selfPortraitContainer}>
          <Image
            src="/Me.png"
            alt="Picture of the author"
            className={styles.selfPortrait}
          />
        </div>
      </Fade>
      <Fade distance="100px" delay={500} right>
        <div className={styles.passionInfoContainer}>
          <h1 className={styles.passionTitle}>My passion and focus is people and self-development</h1>
          <p className={styles.passionDesc}>By pushing myself to have experiences such as studying abroad for a full year in Shanghai, China and organizing my University&apos;s very first TEDx event with the theme &quot;Take The Leap&quot;, I was able to develop a growth mindset that ultimately led me to fall in love with Software Engineering.</p>
        </div>
      </Fade>
    </div>
  );
}
