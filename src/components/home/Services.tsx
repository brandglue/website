import React, { FC } from 'react';

import { Box, H2, P } from '@components/core';
import { ServicesGrid } from '@components/common';

export const Services: FC = () => {
  return (
    <Box variant="section">
      <H2>What we do for you</H2>
      <P mb={6}>
        <strong>The world of Social Media is getting bigger daily.</strong> And
        with this, so are all the ways you can connect with your audience, teach
        them about your brand, and build loyalty. The obvious issue here:{' '}
        {"Who's"} got time to manage it all? {"That's"} where we come in. With
        our combined expertise, and a good chunk of time spent getting to know
        you, we will help you accomplish your mission in the social sphere.{' '}
        <strong>Here are the ways we do it:</strong>
      </P>
      <ServicesGrid />
    </Box>
  );
};
