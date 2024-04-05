import React from 'react';
import Image from 'next/image';
import styles from '../../styles/About.module.css';
import imageLoader from '../../utils/imageLoader';

export default function Pictures() {
  return (
    <div className={styles.picturesContainer}>
      <Image
        src="personal_website_sprite.jpg"
        loader={imageLoader}
        alt="Picture of the author"
        layout="fill"
        className={styles.sprite_image}
      />
    </div>
  );
}
