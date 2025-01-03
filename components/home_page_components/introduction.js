import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import imageLoader from '../../utils/imageLoader';

export default function Introduction() {
  return (
    <div className={styles.imageContainer}>
      <Image
        loader={imageLoader}
        src="pepperdine_selfportrait.jpeg"
        alt="Picture of the David Kim"
        className={styles.introImage}
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className={styles.imageTextContainer}>
        <h1 className={styles.imageTitle}>Hi! I&apos;m David Kim.</h1>
        <h1 className={styles.imageText}>(pretty unique, right?)</h1>
        <div className={styles.toolsContainer}>
          <h3 className={styles.toolsTitle}>Built with</h3>
          <h4 className={styles.tools}>React, Next.js, JavaScript, </h4>
          <h4 className={styles.tools}>HTML, CSS, AWS</h4>
        </div>
      </div>
    </div>
  );
}
