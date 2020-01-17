import React, { FC } from 'react';

import Image from '@components/images/Image';
import hero from '@images/homepage-hero.jpg';
import styled, { css } from '@theme/styled';
import { hexToRgb, minMediaQuery } from '@theme/utils';

const Hero: FC = () => {
  const primaryTagline = `We are a \nsocial media agency`;
  const secondaryTagline = `reaching your audience in the places \nthey hang out most`;

  return (
    <Wrapper>
      <Image alt="homepage-hero" img={hero} />
      <Tagline>
        <PrimaryTagline>{primaryTagline}</PrimaryTagline>
        <SecondaryTagline>{secondaryTagline}</SecondaryTagline>
      </Tagline>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const Tagline = styled.div`
  background: rgba(${({ theme }) => hexToRgb(theme.Colors.DarkBlue)}, 0.8);
  color: ${({ theme }) => theme.Colors.White};
  display: inline;
  padding: 7px;

  ${minMediaQuery.Small(css`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin: 0 ${({ theme }) => theme.Spacings.StaticSpace01};
  `)};

  ${minMediaQuery.Medium(css`
    top: initial;
    left: ${({ theme }) => theme.Spacings.Page};
    bottom: ${({ theme }) => theme.Spacings.StaticSpace06};
    transform: initial;
  `)};

  ${minMediaQuery.Large(css`
    padding: 12px;
  `)}
`;

const PrimaryTagline = styled.h1`
  font-weight: 700;
  font-size: 20px;
  line-height: 1.7;

  ${minMediaQuery.Medium(css`
    font-size: 40px;
    line-height: 1.5;
    white-space: pre-wrap;
  `)}

  ${minMediaQuery.Large(css`
    font-size: 60px;
    line-height: 1.4;
  `)}
`;

const SecondaryTagline = styled.h2`
  font-size: 16px;
  font-weight: 700;
  line-height: 1.7;

  ${minMediaQuery.Medium(css`
    font-size: 24px;
    line-height: 1.5;
    white-space: pre-wrap;
  `)}

  ${minMediaQuery.Large(css`
    font-size: 32px;
  `)}
`;

export default Hero;
