import React, { FC } from 'react';

import homepageHero from '@images/homepage-hero.webp';
import styled, { css } from '@theme/styled';
import { fluidFontSize, hexToRgb } from '@theme/utils';

export const Homepage: FC = () => (
  <Hero>
    <Tagline>
      <TaglineSection>
        <PrimaryTagline>
          We are a <br /> social media agency
        </PrimaryTagline>
      </TaglineSection>
      <TaglineSection>
        <SecondaryTagline>
          reaching your audience in the places <br /> they hang out most.
        </SecondaryTagline>
      </TaglineSection>
    </Tagline>
  </Hero>
);

// TODO: Add WebP fallback handling: https://css-tricks.com/using-webp-images/
const Hero = styled.div`
  position: relative;
  overflow: hidden;
  height: 0;
  border: 0;
  padding-bottom: 56.25%;
  background-image: url(${homepageHero});
  background-size: cover;
`;

const Tagline = styled.div`
  position: absolute;
  left: 10%;
  bottom: 20px;
`;

const TaglineSection = styled.div`
  margin-bottom: 0;
`;

// https://css-tricks.com/multi-line-padded-text/
const multlinePaddedText = css`
  ${({ theme }) => css`
    display: inline;
    background: rgba(${hexToRgb(theme.colors.darkBlue)}, 0.75);
    font-weight: normal;
    color: ${theme.colors.white};
    padding: 10px 0;
    line-height: 1.54;
    box-shadow: 10px 0 0 rgba(${hexToRgb(theme.colors.darkBlue)}, 0.75),
      -10px 0 0 rgba(${hexToRgb(theme.colors.darkBlue)}, 0.75);
  `};
`;

const PrimaryTagline = styled.h1`
  ${({ theme }) => css`
    ${multlinePaddedText}
    ${fluidFontSize.h1()}
  `};
`;

const SecondaryTagline = styled.h2`
  ${({ theme }) => css`
    ${fluidFontSize.h2()}
    ${multlinePaddedText}
  `};
`;

export default Homepage;
