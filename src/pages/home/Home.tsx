import React, { FC } from 'react';

import Hero from './hero/Hero';
import Clients from './clients/Clients';
import Team from './team/Team';
import CaseStudy from './case-study/CaseStudy';
import Services from './services/Services';

export const Homepage: FC = () => (
  <>
    <Hero />
    <Clients />
    <Team />
    <CaseStudy />
    <Services />
  </>
);

export default Homepage;
