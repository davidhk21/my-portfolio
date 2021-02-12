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
          <p>I have a mini poodle named Shadow. I can solve a 2x2, 3x3, and a 4x4 rubik&apos;s cube. For fun, I memorized the first 50 digits of pi one day during elementary school and still remember to this day. I passed all 4 sections of the CPA Exam and became a software engineer both within the same year.</p>
        </div>
      </Fade>
    </div>
  );
}
