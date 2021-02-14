import React from 'react';
import { Image } from 'react-bootstrap';
import styles from '../../styles/Portfolio.module.css';

export default function PortfolioIntro() {
  return (
    <div className={styles.imageContainer}>
      <Image
        src="/portfolio-background.jpg"
        alt="Picture of the author"
        className={styles.introImage}
        fluid
      />
      <div className={styles.imageTextContainer}>
        <h1 className={styles.imageTitle}>What I&apos;ve Accomplished</h1>
        <a href="/resume.pdf" download="David Kim Resume" className={styles.resumeDownload}>DOWNLOAD RESUME</a>
      </div>
    </div>
  );
}
