import React, { FC } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

import { Box } from '@components/containers/Box';
import { Column } from '@components/containers/Column';
import { SectionTitle } from '@components/sections/SectionTitle';
import { P } from '@components/text/Text';

export const Blog: FC = () => {
  const images = useStaticQuery(graphql`
    query {
      hero: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "blog-hero.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <>
      <Image alt="blog-hero" fluid={images.hero.childImageSharp.fluid} />
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
