import React from 'react';

import Introduction from '../components/home_page_components/introduction';
import Passion from '../components/home_page_components/passion';
import AboutMe from '../components/home_page_components/about_me';
import Projects from '../components/home_page_components/projects';
import Contact from '../components/home_page_components/contact';

export default function Home() {
  return (
    <div>

      <main>
        <Introduction />
        <Passion />
        <AboutMe />
        <Projects />
        <Contact />
      </main>

    </div>
  );
}
