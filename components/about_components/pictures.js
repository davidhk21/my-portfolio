import React from 'react';
import Image from 'next/image';
import styles from '../../styles/About.module.css';
import photo from '../../assets/self-portrait.jpeg';

export default function Pictures() {
  return (
    <div className={styles.picturesContainer}>
      <div className={`${styles.picture1Container} ${styles.pictureContainer}`}>
        <Image
          src={photo}
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className={`${styles.picture2Container} ${styles.pictureContainer}`}>
        <Image
          src={photo}
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className={`${styles.picture3Container} ${styles.pictureContainer}`}>
        <Image
          src={photo}
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className={`${styles.picture4Container} ${styles.pictureContainer}`}>
        <Image
          src={photo}
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className={`${styles.picture5Container} ${styles.pictureContainer}`}>
        <Image
          src={photo}
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className={`${styles.picture6Container} ${styles.pictureContainer}`}>
        <Image
          src={photo}
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
    </div>
  );
}
