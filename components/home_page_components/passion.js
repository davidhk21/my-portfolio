import React from 'react';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';
import styles from '../../styles/Home.module.css';
import imageLoader from '../../utils/imageLoader';

export default function Passion() {
  return (
    <div className={styles.passionContainer1}>
      <Fade delay direction="left" triggerOnce fraction={0.75}>
        <div className={styles.selfPortraitContainer}>
          <Image
            loader={imageLoader}
            src="art_selfportrait.png"
            alt="Picture of the author"
            className={styles.selfPortrait}
            width={300}
            height={600}
          />
        </div>
      </Fade>
      <Fade delay direction="right" triggerOnce fraction={0.75}>
        <div className={styles.passionInfoContainer}>
          <h1 className={styles.passionTitle}>My passion and focus is people and self-development</h1>
          <p className={styles.passionDesc}>I enjoy pushing myself out of my comfort zone, whether its by doing things like living in Shanghai, China for a year or organizing a TEDx event, and as a result I have cultivated a strong growth mindset. These traits have propelled me as a software engineer because I&apos;m driven towards continuous improvement when it comes to design, functionality, and growth. With an emphasis on user experience and modern design, I thrive on building applications that have a positive impact on the end user.</p>
        </div>
      </Fade>
    </div>
  );
}
