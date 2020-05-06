import React, { FC } from 'react';

import Hero from '@partials/home/hero/Hero';
import Team from '@partials/home/team/Team';
import Clients from '@partials/home/clients/Clients';
import CaseStudy from '@partials/home/case-study/CaseStudy';
import Services from '@partials/home/services/Services';
import Contact from '@partials/home/contact/Contact';

export const Home: FC = () => (
  <div style={{ fontSize: 0 }}>
    <Hero />
    <Team />
    <Clients />
    <CaseStudy />
    <Services />
    <Contact />
  </div>
);

export default Home;
