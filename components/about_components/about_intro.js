import React from 'react';
import Image from 'next/image';
import styles from '../../styles/About.module.css';
import { imageUrl } from '../../pages/_app';

export default function AboutIntro() {
  return (
    <div className={styles.imageContainer}>
      <Image
        src={`${imageUrl}/about-background.jpg`}
        alt="Picture of the author"
        className={styles.introImage}
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className={styles.imageTextContainer}>
        <h1 className={styles.imageTitle}>My Passions & Personality</h1>
      </div>
    </div>
  );
}
