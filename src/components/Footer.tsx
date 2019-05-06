import React, { FC } from 'react';

import BrandGlueLogoIconOnly from '@icons/BrandglueLogoIconOnly';
import Facebook from '@icons/Facebook';
import LinkedIn from '@icons/LinkedIn';
import Twitter from '@icons/Twitter';
import styled from '@theme/styled';
import { fluidFontSize } from '@theme/utils';

export const Footer: FC = () => (
  <Wrapper>
    <Container>
      <Contact>
        <Title>Contact</Title>
        <Info>(360)207-4583</Info>
        <Info>hello@brandglue.com</Info>
        <Social>
          <Facebook />
          <Twitter />
          <LinkedIn />
        </Social>
      </Contact>
      <BrandGlueLogoIconOnly />
    </Container>
    <Copyright>
      &copy; {new Date().getFullYear()} BrandGlue. All Rights Reserved.
    </Copyright>
  </Wrapper>
);

const Wrapper = styled.div`
  background: ${({ theme }) => theme.Colors.Gray04};
  padding: ${({ theme }) =>
    `${theme.Spacings.DynamicSpace02} ${theme.Spacings.DynamicSpace02} ${
      theme.Spacings.StaticSpace03
    }`};
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.Spacings.StaticSpace08};
`;

const Contact = styled.address`
  display: flex;
  flex-flow: column;
`;

const Title = styled.h4`
  color: ${({ theme }) => theme.Colors.Gold};
  text-transform: uppercase;
`;

const Info = styled.p`
  color: ${({ theme }) => theme.Colors.Gray01};

  &:last-of-type {
    margin-bottom: ${({ theme }) => theme.Spacings.StaticSpace03};
  }
`;

const Social = styled.div`
  display: flex;

  svg {
    margin-right: ${({ theme }) => theme.Spacings.StaticSpace02};
  }
`;

const Copyright = styled.div`
  color: ${({ theme }) => theme.Colors.Gray01};
  text-align: center;
  ${fluidFontSize.StepDown2()};
`;

export default Footer;
