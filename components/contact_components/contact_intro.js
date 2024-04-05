import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Contact.module.css';
import imageLoader from '../../utils/imageLoader';

export default function ContactIntro() {
  return (
    <div className={styles.imageContainer}>
      <Image
        src="sf_coverphoto.jpeg"
        loader={imageLoader}
        alt="Picture of the author"
        className={styles.introImage}
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className={styles.imageTextContainer}>
        <h1 className={styles.imageTitle}>Let&apos;s Connect</h1>
      </div>
    </div>
  );
}
