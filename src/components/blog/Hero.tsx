import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FluidObject } from 'gatsby-image';

import { Image } from '@components/core';
import { BlogHeroImageQuery } from '@generated/graphql';

export const Hero = () => {
  const { file } = useStaticQuery<NonNullable<BlogHeroImageQuery>>(graphql`
    query BlogHeroImage {
      file(
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

  return file?.childImageSharp?.fluid ? (
    <Image alt="blog-hero" fluid={file.childImageSharp.fluid as FluidObject} />
  ) : null;
};
