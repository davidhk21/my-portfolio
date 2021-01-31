import React from 'react';
import Head from 'next/head';
import { Image } from 'react-bootstrap';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>David Kim</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
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

      </main>

    </div>
  );
}
