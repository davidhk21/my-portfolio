import React from 'react';
import { Image } from 'react-bootstrap';
import styles from '../../styles/About.module.css';

export default function Pictures() {
  return (
    <div className={styles.picturesContainer}>
      <div className={styles.picture1Container}>
        <Image
          src="/1.jpg"
          alt="Picture of the author"
          className={styles.picture}
        />
      </div>
      <div className={styles.picture2Container}>
        <Image
          src="/2.jpg"
          alt="Picture of the author"
          className={styles.picture}
        />
      </div>
      <div className={styles.picture3Container}>
        <Image
          src="/3.jpg"
          alt="Picture of the author"
          className={styles.picture}
        />
      </div>
      <div className={styles.picture4Container}>
        <Image
          src="/4.jpg"
          alt="Picture of the author"
          className={styles.picture}
        />
      </div>
      <div className={styles.picture5Container}>
        <Image
          src="/5.jpg"
          alt="Picture of the author"
          className={styles.picture}
        />
      </div>
      <div className={styles.picture6Container}>
        <Image
          src="/6.jpg"
          alt="Picture of the author"
          className={styles.picture}
        />
      </div>
    </div>
  );
}
