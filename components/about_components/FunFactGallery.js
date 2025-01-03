import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../../styles/About.module.css';
import imageLoader from '../../utils/imageLoader';

const FunFactGallery = ({ images, title, description, backgroundColor = 'white' }) => {
  const [imageIdx, setImageIdx] = useState(0);

  const handleImageChange = (idx) => {
    setImageIdx(idx);
  };

  return (
    <div className={styles.funFactsSubContainer}>
      <div className={styles.moreFunFactsImageContainer}>
        {images.map((image, idx) => (
          <Image
            key={`${image.src}-${image.idx}`}
            src={images[imageIdx].src}
            loader={imageLoader}
            alt={title}
            layout="fill"
            objectFit="contain"
            className={styles.moreFunFactsImage}
            hidden={imageIdx !== idx}
            priority
          />
        ))}
      </div>
      <div className={styles.descriptionContainer} style={{ backgroundColor }}>
        <h1 className={styles.descriptionTitle}>{title}</h1>
        <p>{description}</p>
        <div className={styles.imageNavigationContainer}>
          <Image
            src="left-arrow.png"
            loader={imageLoader}
            alt="left-arrow"
            width="35px"
            height="25px"
            onClick={() => handleImageChange((imageIdx + images.length - 1) % images.length)}
            style={{
              cursor: 'pointer',
            }}
          />
          <div className={styles.dotContainer}>
            {
              images.map((image, idx) => (
                // eslint-disable-next-line jsx-a11y/no-static-element-interactions
                <div
                  key={`${image.src}-${image.id}-dot`}
                  className={`${styles.dot} ${idx === imageIdx ? styles.solidDot : ''}`}
                  onClick={() => handleImageChange(idx)}
                />
              ))
              }
          </div>
          <Image
            src="right-arrow.png"
            loader={imageLoader}
            alt="right-arrow"
            width="35px"
            height="25px"
            onClick={() => handleImageChange((imageIdx + images.length + 1) % images.length)}
            style={{
              cursor: 'pointer',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FunFactGallery;
