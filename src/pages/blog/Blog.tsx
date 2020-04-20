import React, { FC } from 'react';

import Box from '@components/containers/Box';
import Column from '@components/containers/Column';
import Image from '@components/images/Image';
import SectionTitle from '@components/sections/SectionTitle';
import { P } from '@components/text/Text';
import hero from '@images/blog-hero.jpg';

export const Blog: FC = () => {
  return (
    <>
      <Image alt="blog-hero" img={hero} />
      <Box>
        <Column py={6}>
          <SectionTitle>
            There&apos;s a lot going on out there in the social sphere.
          </SectionTitle>
          <P>Here&apos;s what we&apos;ve got to say about it.</P>
        </Column>
      </Box>
    </>
  );
};

export default Blog;
