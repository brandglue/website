import React, { FC } from 'react';
import Image from 'gatsby-image';

import { Box } from '@components/containers/Box';
import { Column } from '@components/containers/Column';
import { SectionTitle } from '@components/sections/SectionTitle';
import { P } from '@components/text/Text';
import { H3 } from '@components/text/Heading';
import { useBlogHeroImage } from '@hooks/queries/useBlogHeroImage';
import { Excerpts } from '@page-partials/blog/Excerpts';

export const Blog: FC = () => {
  const blogHeroImage = useBlogHeroImage();

  return (
    <>
      <Image alt="blog-hero" fluid={blogHeroImage?.fluid} />
      <Box>
        <Column py={6}>
          <SectionTitle>
            There&apos;s a lot going on out there in the social sphere.
          </SectionTitle>
          <P>Here&apos;s what we&apos;ve got to say about it.</P>
        </Column>
      </Box>
      <H3>Latest Posts</H3>
      <Excerpts />
    </>
  );
};

export default Blog;
