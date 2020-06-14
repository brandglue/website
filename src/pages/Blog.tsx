import React, { FC } from 'react';
import Image from 'gatsby-image';

import { Box } from '@components/boxes/Box';
import { P, H2, H3 } from '@components/text/Text';

import { useBlogHeroImage } from '@hooks/queries/useBlogHeroImage';
import { Excerpts } from '@page-partials/blog/Excerpts';

export const Blog: FC = () => {
  const blogHeroImage = useBlogHeroImage();

  return (
    <>
      <Image alt="blog-hero" fluid={blogHeroImage?.fluid} />
      <Box>
        <Box py={6} variant="column">
          <H2>There&apos;s a lot going on out there in the social sphere.</H2>
          <P>Here&apos;s what we&apos;ve got to say about it.</P>
        </Box>
      </Box>
      <H3>Latest Posts</H3>
      <Excerpts />
    </>
  );
};

export default Blog;
