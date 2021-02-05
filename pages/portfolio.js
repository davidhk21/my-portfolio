import React from 'react';

import PortfolioIntro from '../components/portfolio_components/portfolio_intro';
import Skills from '../components/portfolio_components/skills';
import Projects from '../components/portfolio_components/projects';

export default function Portfolio() {
  return (
    <div>
      <PortfolioIntro />
      <Skills />
      <Projects />
    </div>
  );
}
