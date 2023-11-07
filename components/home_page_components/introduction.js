import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import selfPortrait from '../../assets/self-portrait.jpeg';

export default function Introduction() {
  return (
    <div className={styles.imageContainer}>
      <Image
        src={selfPortrait}
        alt="Picture of the David Kim"
        className={styles.introImage}
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className={styles.imageTextContainer}>
        <h1 className={styles.imageTitle}>Hi! I&apos;m David Kim.</h1>
        <h3 className={styles.imageText}>(pretty unique, right?)</h3>
      </div>
    </div>
  );
}
