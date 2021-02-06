import React from 'react';
import { Image } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import styles from '../../styles/About.module.css';

export default function FunFacts() {
  return (
    <div className={styles.funFactsContainer1}>
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
        <div className={styles.funFactsInfoContainer}>
          <h1 className={styles.funFactsTitle}>A few fun facts about myself</h1>
          <p>By pushing myself to have experiences such as studying abroad for a full year in Shanghai, China and organizing my University&apos;s very first TEDx event with the theme &quot;Take The Leap&quot;, I was able to develop a growth mindset that ultimately led me to fall in love with Software Engineering.</p>
        </div>
      </Fade>
    </div>
  );
}
