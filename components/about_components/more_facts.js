import React from 'react';
import { Image } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import styles from '../../styles/About.module.css';

export default function MoreFacts() {
  return (
    <div className={styles.funFactsContainer}>
      <Fade distance="200px" delay={500} left>
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
      </Fade>
      <Fade distance="200px" delay={500} right>
        <div className={styles.funFactContainer}>
          <div className={`${styles.description} ${styles.descriptionRight}`}>
            <h4>Sports</h4>
            <p>Words to describe the thing that I want to talk about myself. For example, I like to play Volleyball and Basketball on my free time and I really enjoy those sports. This description should be relatively long so I can really describe who I am.</p>
          </div>
          <div className={`${styles.circleImageContainer} ${styles.imageLeft}`}>
            <Image
              src="/1.jpg"
              alt="Picture of the author"
              className={styles.circleImage}
            />
          </div>
        </div>
      </Fade>
      <Fade distance="200px" delay={500} left>
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
      </Fade>
      <Fade distance="200px" delay={500} right>
        <div className={styles.funFactContainer}>
          <div className={`${styles.description} ${styles.descriptionRight}`}>
            <h4>Sports</h4>
            <p>Words to describe the thing that I want to talk about myself. For example, I like to play Volleyball and Basketball on my free time and I really enjoy those sports. This description should be relatively long so I can really describe who I am.</p>
          </div>
          <div className={`${styles.circleImageContainer} ${styles.imageLeft}`}>
            <Image
              src="/1.jpg"
              alt="Picture of the author"
              className={styles.circleImage}
            />
          </div>
        </div>
      </Fade>
    </div>
  );
}
