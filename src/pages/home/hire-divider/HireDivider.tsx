import React, { FC } from 'react';

import Box from '@components/containers/Box';
import Column from '@components/containers/Column';
import { H5 } from '@components/text/Heading';

export const HireDivider: FC = () => (
  <Box bg="DarkBlue" color="White" p={5}>
    <Column>
      <H5 color="Gold" m="initial">
        Social experts. Loyal partners. Data-driven results.
      </H5>
      <H5>{"That's what you get when you hire BrandGlue."}</H5>
    </Column>
  </Box>
);

export default HireDivider;
