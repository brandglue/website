import React, { FC } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { FluidObject } from 'gatsby-image';

import { ClientLogosQuery } from '@generated/graphql';
import { Box, Image } from '@components/core';

export const Clients: FC = () => {
  const images = useStaticQuery<ClientLogosQuery>(graphql`
    query ClientLogos {
      quickbooks: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "logo-quickbooks.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kayak: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "logo-kayak.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      microsoft: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "logo-microsoft.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mint: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "logo-mint.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dsg: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "logo-dicks-sporting-goods.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      youtube: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "logo-youtube.jpg" }
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
    <Box py={6} variant="section">
      <Box
        alignItems="center"
        gridGap={6}
        gridTemplateColumns={['repeat(2, minmax(0, 1fr))', 'repeat(6, 1fr)']}
        variant="grid"
      >
        {images?.microsoft?.childImageSharp?.fluid && (
          <Image
            alt="microsoft"
            fluid={images?.microsoft?.childImageSharp?.fluid as FluidObject}
          />
        )}
        {images?.quickbooks?.childImageSharp?.fluid && (
          <Image
            alt="quickbooks"
            fluid={images?.quickbooks?.childImageSharp?.fluid as FluidObject}
          />
        )}
        {images?.mint?.childImageSharp?.fluid && (
          <Image
            alt="mint"
            fluid={images?.mint?.childImageSharp?.fluid as FluidObject}
          />
        )}
        {images?.kayak?.childImageSharp?.fluid && (
          <Image
            alt="kayak"
            fluid={images?.kayak?.childImageSharp?.fluid as FluidObject}
          />
        )}
        {images?.dsg?.childImageSharp?.fluid && (
          <Image
            alt="dicks-sporting-goods"
            fluid={images?.dsg?.childImageSharp?.fluid as FluidObject}
          />
        )}
        {images?.youtube?.childImageSharp?.fluid && (
          <Image
            alt="youtube"
            fluid={images?.youtube?.childImageSharp?.fluid as FluidObject}
          />
        )}
      </Box>
    </Box>
  );
};
