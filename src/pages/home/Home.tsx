import React, { FC } from 'react';

import Hero from './hero/Hero';
import Team from './team/Team';
import Clients from './clients/Clients';
import CaseStudy from './case-study/CaseStudy';
import Services from './services/Services';
import Contact from './contact/Contact';

export const Homepage: FC = () => (
  <div style={{ fontSize: 0 }}>
    <Hero />
    <Team />
    <Clients />
    <CaseStudy />
    <Services />
    <Contact />
  </div>
);

export default Homepage;
