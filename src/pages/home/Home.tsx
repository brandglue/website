import React, { FC } from 'react';

import Hero from './hero/Hero';
import Clients from './clients/Clients';
import Team from './team/Team';

export const Homepage: FC = () => (
  <>
    <Hero />
    <Clients />
    <Team />
  </>
);

export default Homepage;
