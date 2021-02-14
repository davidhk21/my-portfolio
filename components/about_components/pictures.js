import React from 'react';
import { Image } from 'react-bootstrap';
import styles from '../../styles/About.module.css';

export default function Pictures() {
  return (
    <div className={styles.picturesContainer}>
      <div className={`${styles.picture1Container} ${styles.pictureContainer}`}>
        {/* <Image
          src="/1.jpg"
          alt="Picture of the author"
          className={styles.picture}
        /> */}
        <img
          src="/1.JPG"
          alt="author"
          className={styles.picture}
        />
      </div>
      <div className={`${styles.picture2Container} ${styles.pictureContainer}`}>
        <Image
          src="/2.JPG"
          alt="Picture of the author"
          className={styles.picture}
        />
      </div>
      <div className={`${styles.picture3Container} ${styles.pictureContainer}`}>
        <Image
          src="/3.JPG"
          alt="Picture of the author"
          className={styles.picture}
        />
      </div>
      <div className={`${styles.picture4Container} ${styles.pictureContainer}`}>
        <Image
          src="/4.JPG"
          alt="Picture of the author"
          className={styles.picture}
        />
      </div>
      <div className={`${styles.picture5Container} ${styles.pictureContainer}`}>
        <Image
          src="/5.JPG"
          alt="Picture of the author"
          className={styles.picture}
        />
      </div>
      <div className={`${styles.picture6Container} ${styles.pictureContainer}`}>
        <Image
          src="/6.jpg"
          alt="Picture of the author"
          className={styles.picture}
        />
      </div>
    </div>
  );
}
