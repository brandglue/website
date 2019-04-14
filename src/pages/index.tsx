import React, { FunctionComponent } from 'react';

import styled, { css } from '@theme/styled';

export const Homepage: FunctionComponent = () => (
  <Banner>
    <TaglineWrapper>
      <PrimaryTagline1>We are a</PrimaryTagline1>
      <PrimaryTagline2>social media agency</PrimaryTagline2>
      <SubTagline1>reaching your audience in the places</SubTagline1>
      <SubTagline2>they hang out most</SubTagline2>
    </TaglineWrapper>
  </Banner>
);

const Banner = styled.div`
  position: relative;
  background: ${({theme}) => theme.colors.mediumGray};
  height: 300px;
`;

const TaglineWrapper = styled.div`
  position: absolute;
  left: 10%;
  bottom: 20px;
`;

const PrimaryTagline1 = styled.div`
  ${({ theme }) => css`
    background: theme.colors.darkBlue;
  `};

  /* background: ${({theme}) => theme.colors.darkBlue}; */
  font-size: ${({theme}) => theme.fontSize.h1}px;
  color: ${({theme}) => theme.colors.white};
`;

const PrimaryTagline2 = styled.div`
  background: ${({theme}) => theme.colors.darkBlue};
  font-size: ${({theme}) => theme.fontSize.h1}px;
  color: ${({theme}) => theme.colors.white};
`;

const SubTagline1 = styled.div`
  background: ${({theme}) => theme.colors.darkBlue};
  color: ${({theme}) => theme.colors.white};
`;

const SubTagline2 = styled.div`
  background: ${({theme}) => theme.colors.darkBlue};
  color: ${({theme}) => theme.colors.white};
`;

export default Homepage;