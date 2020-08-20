import { useStaticQuery, graphql } from 'gatsby';
import React, { FC } from 'react';

import { Box, H1 } from '@components/core';
import heroVideo from '@media/videos/hero-homepage.mp4';
import { css, minMediaQuery, scale, styled } from '@styles/index';

export const Hero: FC = () => {
  const { file } = useStaticQuery<GatsbyTypes.HomepageHeroPosterQuery>(graphql`
    query HomepageHeroPoster {
      file(
        sourceInstanceName: { eq: "media" }
        relativePath: { eq: "images/homepage-hero-poster.jpg" }
      ) {
        childImageSharp {
          fixed {
            src
          }
        }
      }
    }
  `);

  return (
    <Container>
      <HeroVideo autoPlay loop muted poster={file?.childImageSharp?.fixed?.src}>
        <source src={heroVideo} type="video/mp4" />
      </HeroVideo>
      <Header>
        <Box flexGrow={0} variant="flexItem">
          <Tagline>
            We are a social media agency
            <span>Reaching your audience in the places they hang out most</span>
          </Tagline>
        </Box>
      </Header>
    </Container>
  );
};

const Container = styled(Box)`
  position: relative;
  font-size: 0;
`;

const HeroVideo = styled.video`
  max-height: 400px;
  width: 100%;
  object-fit: cover;
  filter: brightness(0.8);
`;

const Header = styled(Box)`
  ${({ theme }) => css`
    display: flex;
    max-width: ${theme.spacings.maxContentColWidth};
    margin: auto;
    color: ${theme.colors.white};

    ${minMediaQuery.Medium(css`
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      flex-flow: column;
      justify-content: center;
      text-align: center;
    `)};
  `};
`;

const Tagline = styled(H1)`
  ${({ theme }) => css`
    color: ${theme.colors.white};

    span {
      display: inline-block;
      font-size: ${scale(0.4).fontSize};
      text-transform: none;
    }
  `}
`;
