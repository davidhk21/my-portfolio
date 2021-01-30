import React from 'react';
import Head from 'next/head';
import { Image } from 'react-bootstrap';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <Image
            src="/prof_pic.JPG"
            alt="Picture of the author"
            className={styles.backgroundImage}
          />
          <div>
            Hello Home Page!
          </div>
        </div>

      </main>

    </div>
  );
}
