import React, { FC } from 'react';

import Image from '@components/Image';
import hero from '@images/homepage-hero.jpg';
import styled, { css } from '@theme/styled';
import { fluidFontSize, hexToRgb } from '@theme/utils';

const Hero: FC = () => (
  <Wrapper>
    <Image img={hero} />
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
  </Wrapper>
);

const Wrapper = styled.div`
  position: relative;
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
    background: rgba(${hexToRgb(theme.Colors.DarkBlue)}, 0.75);
    font-weight: normal;
    color: ${theme.Colors.White};
    padding: 10px 0;
    line-height: 1.54;
    box-shadow: 10px 0 0 rgba(${hexToRgb(theme.Colors.DarkBlue)}, 0.75),
      -10px 0 0 rgba(${hexToRgb(theme.Colors.DarkBlue)}, 0.75);
  `};
`;

const PrimaryTagline = styled.h1`
  ${multlinePaddedText}
  ${fluidFontSize.StepUp6()}
`;

const SecondaryTagline = styled.h2`
  ${fluidFontSize.StepUp4()}
  ${multlinePaddedText}
`;

export default Hero;
