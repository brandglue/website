import React, { FC } from 'react';

import { Hero } from '@components/home/Hero';
import { Team } from '@components/home/Team';
import { Clients } from '@components/home/Clients';
import { CaseStudy } from '@components/home/CaseStudy';
import { Services } from '@components/home/Services';
import { Contact } from '@components/common/Contact';

export const Home: FC = () => (
  <div>
    <Hero />
    <Team />
    <Clients />
    <CaseStudy />
    <Services />
    <Contact />
  </div>
);

export default Home;
