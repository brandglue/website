import React, { FC } from 'react';

import { Breadcrumbs, Contact, Hero, ServicesGrid } from '@components/common';
import { Box, Divider, H1, P } from '@components/core';

interface IProps {
  pageContext: any;
}

export const Services: FC<IProps> = ({ pageContext }) => {
  return (
    <>
      <Hero />
      <Box variant="section">
        <Breadcrumbs breadcrumb={pageContext.breadcrumb} />
        <H1>There&apos;s a lot of ways we can help your brand get noticed.</H1>
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
