import React, { FC } from 'react';

import { Hero } from '@page-partials/home/Hero';
import { Team } from '@page-partials/home/Team';
import { Clients } from '@page-partials/home/Clients';
import { CaseStudy } from '@page-partials/home/CaseStudy';
import { Services } from '@page-partials/home/Services';
import { Contact } from '@page-partials/common/Contact';

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
