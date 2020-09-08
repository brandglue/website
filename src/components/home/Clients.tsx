import { graphql, useStaticQuery } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import React, { FC } from 'react';

import { Box, Image } from '@components/core';
import { css, minMediaQuery, styled } from '@styles/index';

export const Clients: FC = () => {
  const images = useStaticQuery<GatsbyTypes.ClientLogosQuery>(graphql`
    query ClientLogos {
      quickbooks: file(
        sourceInstanceName: { eq: "media" }
        relativePath: { eq: "images/logo-quickbooks.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1100) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      kayak: file(
        sourceInstanceName: { eq: "media" }
        relativePath: { eq: "images/logo-kayak.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1100) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      microsoft: file(
        sourceInstanceName: { eq: "media" }
        relativePath: { eq: "images/logo-microsoft.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1100) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      intel: file(
        sourceInstanceName: { eq: "media" }
        relativePath: { eq: "images/logo-intel.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1100) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      youtube: file(
        sourceInstanceName: { eq: "media" }
        relativePath: { eq: "images/logo-youtube.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1100) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `);

  return (
    <Box variant="section">
      <ClientGrid>
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
        {images?.intel?.childImageSharp?.fluid && (
          <Image
            alt="intel"
            fluid={images?.intel?.childImageSharp?.fluid as FluidObject}
          />
        )}
        {images?.kayak?.childImageSharp?.fluid && (
          <Image
            alt="kayak"
            fluid={images?.kayak?.childImageSharp?.fluid as FluidObject}
          />
        )}
        {images?.youtube?.childImageSharp?.fluid && (
          <Image
            alt="youtube"
            fluid={images?.youtube?.childImageSharp?.fluid as FluidObject}
          />
        )}
      </ClientGrid>
    </Box>
  );
};

const ClientGrid = styled(Box)`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 50px;
`;
