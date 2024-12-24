import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../styles/Home.module.css';

export default function AboutMe() {
  return (
    <div className={styles.aboutMeContainer}>
      <h1 className={styles.aboutMeTitle}>A little bit about myself...</h1>
      <div className={styles.aboutMeInfoContainer}>
        <div className={styles.aboutMeDescContainer}>
          <FontAwesomeIcon icon={['fas', 'child']} className={styles.iconBody} />
          <p className={styles.aboutMeDescText}>&quot;As the body moves, the mind grooves&quot;. I love being active and you can most likely find me at a volleyball open gym.</p>
        </div>
        <div className={styles.aboutMeDescContainer}>
          <FontAwesomeIcon icon={['fas', 'heart']} className={styles.iconBody} />
          <p className={styles.aboutMeDescText}>I believe that a person&apos;s opinion of the world is also a confession of character.</p>
        </div>
        <div className={styles.aboutMeDescContainer}>
          <FontAwesomeIcon icon={['fas', 'brain']} className={styles.iconBody} />
          <p className={styles.aboutMeDescText}>Though I&apos;m confident in my skills, and abilities, there&apos;s always more to learn.</p>
        </div>
      </div>
      <Link href="/about">
        <a className={styles.buttonLearnMore}>
          LEARN MORE
        </a>
      </Link>
    </div>
  );
}
