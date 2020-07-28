import React, { FC } from 'react';

import { Contact } from '@components/common';
import { Divider } from '@components/core';
import { CaseStudy, Clients, Hero, Services, Team } from '@components/home';

export const Home: FC = () => (
  <div>
    <Hero />
    <Team />
    <Clients />
    <CaseStudy />
    <Services />
    <Divider />
    <Contact />
  </div>
);

export default Home;
