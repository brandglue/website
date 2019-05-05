import React, { FC } from 'react';

import Hero from './hero/Hero';
import Clients from './clients/Clients';
import Team from './team/Team';
import CaseStudy from './case-study/CaseStudy';

export const Homepage: FC = () => (
  <>
    <Hero />
    <Clients />
    <Team />
    <CaseStudy />
  </>
);

export default Homepage;
