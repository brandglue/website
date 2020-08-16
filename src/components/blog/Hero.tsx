import { useStaticQuery, graphql } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import React, { FC } from 'react';

import { Image } from '@components/core';
import { BlogHeroImageQuery } from '@generated/graphql';

export const Hero: FC = () => {
  const { file } = useStaticQuery<BlogHeroImageQuery>(graphql`
    query BlogHeroImage {
      file(
        sourceInstanceName: { eq: "media" }
        relativePath: { eq: "images/hero-blog.jpg" }
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
