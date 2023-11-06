import React from 'react';
import Image from 'next/image';
import Fade from 'react-reveal/Fade';
import styles from '../../styles/Home.module.css';
import photo from '../../assets/IMG_3066.JPG';

export default function Passion() {
  return (
    <div className={styles.passionContainer1}>
      <Fade distance="100px" delay={500} left>
        <div className={styles.selfPortraitContainer}>
          <Image
            src={photo}
            alt="Picture of the author"
            className={styles.selfPortrait}
          />
        </div>
      </Fade>
      <Fade distance="100px" delay={500} right>
        <div className={styles.passionInfoContainer}>
          <h1 className={styles.passionTitle}>My passion and focus is people and self-development</h1>
          <p className={styles.passionDesc}>I push myself out of my comfort zone by doing things like living in Shanghai, China and organizing a TEDx event, and I have cultivated a strong growth mindset. These traits have propelled me as a software engineer because I&apos;m driven towards continuous improvement when it comes to design, functionality, and growth. With an emphasis on user experience and modern design, I thrive on building applications that have a positive impact on the end user.</p>
        </div>
      </Fade>
    </div>
  );
}
