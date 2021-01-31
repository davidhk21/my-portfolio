import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

import Introduction from '../components/home_page_components/introduction';
import AboutMe from '../components/home_page_components/about_me';
import Skills from '../components/home_page_components/skills';

export default function Home() {
  return (
    <div>
      <Head>
        <title>David Kim</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Introduction />
        <AboutMe />
        <Skills />

      </main>

    </div>
  );
}
