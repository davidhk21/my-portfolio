import React from 'react';
import { Image } from 'react-bootstrap';
import styles from '../../styles/Home.module.css';

export default function AboutMe() {
  return (
    <div className={styles.aboutMeContainer}>
      <div className={styles.selfPortraitContainer}>
        <Image
          src="/self_portrait.JPG"
          alt="Picture of the author"
          className={styles.selfPortrait}
        />
      </div>
      <div>
        <h1>About Me</h1>
        <p>This is the About Me Section where I write about myself and talk about who I am as a person.</p>
      </div>
    </div>
  );
}
