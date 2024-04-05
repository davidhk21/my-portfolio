import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Portfolio.module.css';
import imageLoader from '../../utils/imageLoader';
import { imageUrl } from '../../pages/_app';

export default function PortfolioIntro() {
  return (
    <div className={styles.imageContainer}>
      <Image
        src="horseshoebend.JPG"
        loader={imageLoader}
        alt="Picture of the author"
        className={styles.introImage}
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className={styles.imageTextContainer}>
        <h1 className={styles.imageTitle}>What I&apos;ve Accomplished</h1>
        <a href={`${imageUrl}/resume.pdf`} download="David Kim Resume" className={styles.resumeDownload}>DOWNLOAD RESUME</a>
      </div>
    </div>
  );
}
