import React from 'react';
import Head from 'next/head';

import Introduction from '../components/home_page_components/introduction';
import Passion from '../components/home_page_components/passion';
import AboutMe from '../components/home_page_components/about_me';
import Projects from '../components/home_page_components/projects';

export default function Home() {
  return (
    <div>
      <Head>
        <title>David Kim</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Introduction />
        <Passion />
        <AboutMe />
        <Projects />
      </main>

    </div>
  );
}
