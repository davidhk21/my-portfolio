import React from 'react';
import Image from 'next/image';
import Fade from 'react-reveal/Fade';
import styles from '../../styles/About.module.css';
import { imageUrl } from '../../pages/_app';

export default function FunFacts() {
  return (
    <div className={styles.funFactsContainer1}>
      <Fade distance="100px" delay={500} left>
        <div className={styles.selfPortraitContainer}>
          <Image
            src={`${imageUrl}/me.png`}
            alt="Picture of the author"
            className={styles.selfPortrait}
          />
        </div>
      </Fade>
      <Fade distance="100px" delay={500} right>
        <div className={styles.funFactsInfoContainer}>
          <h1 className={styles.funFactsTitle}>A few fun facts about myself</h1>
          <p>I have a mini poodle named Shadow. I can solve a 2x2, 3x3, and a 4x4 rubik&apos;s cube. For fun, I memorized the first 50 digits of pi one day during elementary school and somehow I still remember them to this day. Within the same year, I passed all 4 sections of the CPA Exam and became a software engineer.</p>
        </div>
      </Fade>
    </div>
  );
}
