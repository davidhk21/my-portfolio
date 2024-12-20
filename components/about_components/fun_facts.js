import React from 'react';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';
import styles from '../../styles/About.module.css';
import imageLoader from '../../utils/imageLoader';

export default function FunFacts() {
  return (
    <div className={styles.funFactsContainer1}>
      <Fade delay direction="left" triggerOnce>
        <div className={styles.selfPortraitContainer}>
          <Image
            src="art_selfportrait_with_shadow.png"
            loader={imageLoader}
            alt="Picture of the author"
            className={styles.selfPortrait}
            width={450}
            height={600}
          />
        </div>
      </Fade>
      <Fade delay direction="right" triggerOnce>
        <div className={styles.funFactsInfoContainer}>
          <h1 className={styles.funFactsTitle}>A few fun facts about myself</h1>
          <p>
            I grew up in the Bay Area but currently live in New York.
            I&apos;m currently training for the LA Marathon in March 2025.
            I can solve a 2x2, 3x3, and a 4x4 rubik&apos;s cube.
            For fun, I memorized the first 50 digits of pi one day during elementary school and somehow still remember them to this day.
            Within the same year, I passed all 4 sections of the CPA Exam and became a software engineer.
          </p>
        </div>
      </Fade>
    </div>
  );
}
