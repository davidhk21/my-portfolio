import React from 'react';
import { Image } from 'react-bootstrap';
import styles from '../../styles/About.module.css';

export default function MoreFacts() {
  return (
    <div className={styles.funFactsContainer}>
      <div className={styles.funFactsMiniContainer}>

        <div className={styles.funFactContainer}>
          <div className={styles.description}>
            <h4>Sports</h4>
            <p>Words to describe the thing that I want to talk about myself. For example, I like to play Volleyball and Basketball on my free time and I really enjoy those sports. This description should be relatively long so I can really describe who I am.</p>
          </div>
          <div className={styles.circleImageContainer}>
            <Image
              src="/1.jpg"
              alt="Picture of the author"
              className={styles.circleImage}
            />
          </div>
        </div>

        <div className={styles.funFactContainer}>
          <div className={styles.description}>
            <h4>Sports</h4>
            <p>Words to describe the thing that I want to talk about myself. For example, I like to play Volleyball and Basketball on my free time and I really enjoy those sports. This description should be relatively long so I can really describe who I am.</p>
          </div>
          <div className={styles.circleImageContainer}>
            <Image
              src="/1.jpg"
              alt="Picture of the author"
              className={styles.circleImage}
            />
          </div>
        </div>

        <div className={styles.funFactContainer}>
          <div className={styles.description}>
            <h4>Sports</h4>
            <p>Words to describe the thing that I want to talk about myself. For example, I like to play Volleyball and Basketball on my free time and I really enjoy those sports. This description should be relatively long so I can really describe who I am.</p>
          </div>
          <div className={styles.circleImageContainer}>
            <Image
              src="/1.jpg"
              alt="Picture of the author"
              className={styles.circleImage}
            />
          </div>
        </div>

        <div className={styles.funFactContainer}>
          <div className={styles.description}>
            <h4>Sports</h4>
            <p>Words to describe the thing that I want to talk about myself. For example, I like to play Volleyball and Basketball on my free time and I really enjoy those sports. This description should be relatively long so I can really describe who I am.</p>
          </div>
          <div className={styles.circleImageContainer}>
            <Image
              src="/1.jpg"
              alt="Picture of the author"
              className={styles.circleImage}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
