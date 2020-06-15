import React, { FC } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

import { Box } from '@components/boxes/Box';
import { H1, H3, P } from '@components/text/Text';

import { css, styled } from '@theme/styled';
import { minMediaQuery } from '@theme/utils';

export const Hero: FC = () => {
  const hero = useStaticQuery<GatsbyTypes.HomepageHeroImageQuery>(graphql`
    query HomepageHeroImage {
      file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "homepage-hero.jpg" }
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
    <Container>
      <HeroImage
        alt="homepage-hero"
        fluid={hero?.file?.childImageSharp?.fluid}
      />
      <Tagline justifyContent="center" variant="column">
        <Box flexGrow={0} variant="flexItem">
          <H1 lineHeight={['41px', '51px', '64px']} m="auto">
            We are a social media agency
          </H1>
          <H3>Reaching your audience in the places they hang out most</H3>
          <P fontSize="108px" mt={7}>
            &darr;
          </P>
        </Box>
      </Tagline>
    </Container>
  );
};

const HeroImage = styled(Image)`
  filter: brightness(0.8);
`;

const Container = styled(Box)`
  position: relative;
  font-size: 0;
`;

const Tagline = styled(Box)`
  display: flex;
  color: ${({ theme }) => theme.colors.white};

  ${minMediaQuery.Medium(css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    flex-flow: column;
    text-align: center;
  `)};
`;
