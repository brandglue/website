import React, { FC } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FluidObject } from 'gatsby-image';

import { Image } from '@components/core';
import { PageHeroImageQuery } from '@generated/graphql';

export const Hero: FC = () => {
  const { file } = useStaticQuery<PageHeroImageQuery>(graphql`
    query PageHeroImage {
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
    <Image alt="page-hero" fluid={file.childImageSharp.fluid as FluidObject} />
  ) : null;
};
