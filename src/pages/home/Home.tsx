import React, { FC } from 'react';

import Hero from './hero/Hero';
import Clients from './clients/Clients';

export const Homepage: FC = () => (
  <>
    <Hero />
    <Clients />
  </>
);

export default Homepage;
