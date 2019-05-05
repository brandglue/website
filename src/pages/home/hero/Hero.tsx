import React, { FC } from 'react';

import Image from '@components/Image';
import hero from '@images/homepage-hero.jpg';
import styled, { css } from '@theme/styled';
import { fluidFontSize } from '@theme/utils';

const Hero: FC = () => (
  <Wrapper>
    <Image alt="homepage-hero" img={hero} />
    <Tagline>
      <div>
        <PrimaryTagline>
          We are a<Break />
          social media agency
        </PrimaryTagline>
      </div>
      <div>
        <SecondaryTagline>
          reaching your audience in the places
          <Break /> they hang out most.
        </SecondaryTagline>
      </div>
    </Tagline>
  </Wrapper>
);

const Wrapper = styled.div`
  position: relative;
`;

const Tagline = styled.div`
  position: absolute;
  left: ${({ theme }) => theme.Spacings.Page};
  bottom: ${({ theme }) => theme.Spacings.StaticSpace6};
`;

// https://css-tricks.com/multi-line-padded-text/
const multlinePaddedText = css`
  ${({ theme }) => css`
    display: inline;
    background: ${theme.Colors.DarkBlue};
    color: ${theme.Colors.White};
    padding: ${theme.Spacings.StaticSpace1};
    box-decoration-break: clone;
  `};
`;

const PrimaryTagline = styled.h1`
  ${multlinePaddedText}
  ${fluidFontSize.StepUp4()}
  font-weight: 700;
  line-height: 1.3;
`;

const SecondaryTagline = styled.h2`
  ${multlinePaddedText}
  ${fluidFontSize.StepUp1()}
  font-weight: 700;
  line-height: 1.7;
`;

const Break = styled.br`
  line-height: 0.1;
`;

export default Hero;
