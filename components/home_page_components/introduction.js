import React from 'react';
import { Image, Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

export default function Introduction() {
  return (
    <div className={styles.imageContainer}>
      <Image
        src="/prof_pic.JPG"
        alt="Picture of the author"
        fluid
      />
      <div className={styles.imageTextContainer}>
        <h1 className={styles.imageTitle}>Hi! I&apos;m David Kim,</h1>
        <h3 className={styles.imageText}>a Software Engineer</h3>
      </div>
    </div>
  );
}
