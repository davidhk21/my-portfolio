import React from 'react';
import Image from 'next/image';
import styles from '../../styles/About.module.css';
import imageLoader from '../../utils/imageLoader';

export default function AboutIntro() {
  return (
    <div className={styles.imageContainer}>
      <Image
        src="greatwall.jpeg"
        loader={imageLoader}
        alt="Picture of the author"
        className={styles.introImage}
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className={styles.imageTextContainer}>
        <h1 className={styles.imageTitle}>My Interests & Hobbies</h1>
      </div>
    </div>
  );
}
