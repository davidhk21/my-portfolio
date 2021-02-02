import React from 'react';
import styles from '../../styles/Home.module.css';

export default function AboutMe() {
  return (
    <div className={styles.aboutMeContainer}>
      <h1>A little bit about myself...</h1>
      <div className={styles.aboutMeInfoContainer}>
        <div className={styles.aboutMeDescContainer}>
          <h3 className={styles.aboutMeCategories}>Hands</h3>
          <p>&quot;As the body moves, the mind grooves&quot;. I love being active and you can most likely catch me at a volleyball open gym.</p>
        </div>
        <div className={styles.aboutMeDescContainer}>
          <h3 className={styles.aboutMeCategories}>Heart</h3>
          <p>I believe that a person&apos;s opinion of the world is also a confession of character.</p>
        </div>
        <div className={styles.aboutMeDescContainer}>
          <h3 className={styles.aboutMeCategories}>Head</h3>
          <p>Though I&apos;m confident in my knowledge, skills, and abilities, I recognize that I will always be a work in progress.</p>
        </div>
      </div>
    </div>
  );
}
