import React from 'react';
import Image from 'next/image';
import styles from '../../styles/About.module.css';
import { imageUrl } from '../../pages/_app';

export default function Pictures() {
  return (
    <div className={styles.picturesContainer}>
      <div className={`${styles.picture1Container} ${styles.pictureContainer}`}>
        <Image
          src={`${imageUrl}/1.JPG`}
          alt="Picture of the author"
          className={styles.picture}
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className={`${styles.picture2Container} ${styles.pictureContainer}`}>
        <Image
          src={`${imageUrl}/2.JPG`}
          alt="Picture of the author"
          className={styles.picture}
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className={`${styles.picture3Container} ${styles.pictureContainer}`}>
        <Image
          src={`${imageUrl}/3.JPG`}
          alt="Picture of the author"
          className={styles.picture}
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className={`${styles.picture4Container} ${styles.pictureContainer}`}>
        <Image
          src={`${imageUrl}/4.JPG`}
          alt="Picture of the author"
          className={styles.picture}
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className={`${styles.picture5Container} ${styles.pictureContainer}`}>
        <Image
          src={`${imageUrl}/5.JPG`}
          alt="Picture of the author"
          className={styles.picture}
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className={`${styles.picture6Container} ${styles.pictureContainer}`}>
        <Image
          src={`${imageUrl}/6.jpg`}
          alt="Picture of the author"
          className={styles.picture}
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
    </div>
  );
}
