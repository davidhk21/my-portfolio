import React from 'react';

import AboutIntro from '../components/about_components/about_intro';
import FunFacts from '../components/about_components/fun_facts';
import MoreFacts from '../components/about_components/more_facts';

export default function About() {
  return (
    <div>
      <AboutIntro />
      <FunFacts />
      <MoreFacts />
    </div>
  );
}
