import React, { FC } from 'react';

import { Box, Divider, H1, P } from '@components/core';
import { Contact, Hero, ServicesGrid } from '@components/common';

export const Services: FC = () => {
  return (
    <>
      <Hero />
      <Box variant="section">
        <H1>There&apos;s a lot of ways we can help your brand get noticed</H1>
        <P>
          And when you are putting your brand on the line, you&apos;ll want the
          experts to handle it. Here&apos;s how we can help.
        </P>
        <ServicesGrid />
      </Box>
      <Divider />
      <Contact />
    </>
  );
};

export default Services;
