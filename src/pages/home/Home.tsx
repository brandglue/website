import React, { FC } from 'react';

import Hero from './hero/Hero';
import Clients from './clients/Clients';
import HireDivider from './hire-divider/HireDivider';
import Team from './team/Team';
import CaseStudy from './case-study/CaseStudy';
import Services from './services/Services';
import Contact from './contact/Contact';

export const Homepage: FC = () => (
  <>
    <Hero />
    <Clients />
    <HireDivider />
    <Team />
    <CaseStudy />
    <Services />
    <Contact />
  </>
);

export default Homepage;
