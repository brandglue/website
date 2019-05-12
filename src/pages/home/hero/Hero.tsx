import React, { FC } from 'react';

import Image from '@components/Image';
import hero from '@images/homepage-hero.jpg';
import styled, { css } from '@theme/styled';
import { minMediaQuery } from '@theme/utils';

const Hero: FC = () => {
  const primaryTagline = `We are a \nsocial media agency`;
  const secondaryTagline = `Reaching your audience in the places \nthey hang out most`;

  return (
    <Wrapper>
      <Image alt="homepage-hero" img={hero} />
      <Tagline>
        <div>
          <PrimaryTagline>{primaryTagline}</PrimaryTagline>
        </div>
        <div>
          <SecondaryTagline>{secondaryTagline}</SecondaryTagline>
        </div>
      </Tagline>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const Tagline = styled.div`
  ${minMediaQuery.Small(css`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin: 0 ${({ theme }) => theme.Spacings.StaticSpace01};
  `)};

  ${minMediaQuery.Medium(css`
    left: ${({ theme }) => theme.Spacings.Page};
    bottom: ${({ theme }) => theme.Spacings.StaticSpace06};
    transform: initial;
  `)};
`;

// https://css-tricks.com/multi-line-padded-text/
const multlinePaddedText = css`
  background: ${({ theme }) => theme.Colors.DarkBlue};
  color: ${({ theme }) => theme.Colors.White};
  display: inline;
  padding: 7px;
  box-decoration-break: clone;
`;

const PrimaryTagline = styled.h1`
  font-weight: 700;
  font-size: 20px;
  line-height: 1.7;
  ${multlinePaddedText}

  ${minMediaQuery.Medium(css`
    font-size: 60px;
    white-space: pre-wrap;
  `)}

  ${minMediaQuery.Giant(css`
    font-size: 80px;
  `)}
`;

const SecondaryTagline = styled.h2`
  font-size: 16px;
  font-weight: 700;
  line-height: 1.7;
  ${multlinePaddedText}

  ${minMediaQuery.Medium(css`
    font-size: 60px;
    white-space: pre-wrap;
  `)}

  ${minMediaQuery.Giant(css`
    font-size: 80px;
  `)}
`;

export default Hero;
