import React from 'react';
import styles from '../../styles/Home.module.css';

export default function AboutMe() {
  return (
    <div className={styles.aboutMeContainer}>
      <h1>A little bit about myself...</h1>
      <div>
        <h3 className={styles.aboutMeCategories}>Activities</h3>
        <ul>
          <li>Volleyball</li>
          <li>Basketball</li>
        </ul>
      </div>
      <div>
        <h3 className={styles.aboutMeCategories}>Favorite Foods and Drinks</h3>
        <ul>
          <li>KBBQ</li>
          <li>Classic Milk Tea</li>
        </ul>
      </div>
      <div>
        <h3 className={styles.aboutMeCategories}>Guilty Pleasures</h3>
        <ul>
          <li>&quot;The Office&quot;</li>
          <li>Sweet Potato Cake</li>
        </ul>
      </div>
    </div>
  );
}
