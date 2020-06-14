import React, { FC } from 'react';

import { Box } from '@components/boxes/Box';
import { H4 } from '@components/text/Text';
import BrandGlueLogoIconOnly from '@icons/BrandGlueLogoIconOnly';
import FacebookIcon from '@icons/Facebook';
import LinkedInIcon from '@icons/LinkedIn';
import TwitterIcon from '@icons/Twitter';
import { css, styled } from '@theme/styled';
import { minMediaQuery } from '@theme/utils';

export const Footer: FC = () => (
  <>
    <Wrapper>
      <Container variant="centered">
        <Contact>
          <Title>Contact Us</Title>
          <Info href="tel:+1-360-207-4583">+1 (360) 207-4583</Info>
          <Info href="mailto:hello@brandglue.com">hello@brandglue.com</Info>
          <Social>
            <SocialIcon>
              <a href="https://www.facebook.com/BrandGlue">
                <FacebookIcon />
              </a>
            </SocialIcon>
            <SocialIcon>
              <a href="https://twitter.com/glue">
                <TwitterIcon />
              </a>
            </SocialIcon>
            <SocialIcon>
              <a href="https://www.linkedin.com/company/brandglue-com">
                <LinkedInIcon />
              </a>
            </SocialIcon>
          </Social>
        </Contact>
        <StyledBrandGlueLogoIconOnly />
      </Container>
    </Wrapper>
    <Copyright>
      &copy; {new Date().getFullYear()} BrandGlue. All Rights Reserved.
    </Copyright>
  </>
);

const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.Colors.Gray04};
    padding: ${theme.Spacings.DynamicSpace02} ${theme.Spacings.DynamicSpace02}
      ${theme.Spacings.StaticSpace03};
  `};
`;

const Container = styled(Box)`
  ${({ theme }) => css`
    text-align: center;
    color: ${theme.Colors.Gray01};
    margin-bottom: ${theme.Spacings.StaticSpace08};

    ${minMediaQuery.Medium(css`
      flex-flow: row;
      justify-content: space-between;
      text-align: initial;
    `)}
  `}
`;

const Contact = styled.address`
  display: flex;
  flex-flow: column;
`;

const Title = styled(H4)`
  ${({ theme }) => css`
    color: ${theme.Colors.Gold};
    text-transform: uppercase;
    margin-bottom: ${theme.Spacings.StaticSpace03};
  `}
`;

const Info = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    color: ${theme.Colors.Gray01};

    &:last-of-type {
      margin-bottom: ${theme.Spacings.StaticSpace03};
    }
  `}
`;

const Social = styled.div`
  display: flex;
  justify-content: center;

  ${minMediaQuery.Medium(css`
    justify-content: flex-start;
  `)}
`;

const SocialIcon = styled.div`
  width: 30px;
  margin-right: ${({ theme }) => theme.Spacings.StaticSpace02};

  &:last-child {
    margin-right: 0;
  }
`;

const StyledBrandGlueLogoIconOnly = styled(BrandGlueLogoIconOnly)`
  width: 80px;
  margin-top: ${({ theme }) => theme.Spacings.StaticSpace03};
`;

const Copyright = styled.div`
  ${({ theme }) => css`
    background: ${theme.Colors.Black};
    color: ${theme.Colors.Gray01};
    text-align: center;
    padding: ${theme.space[5]}px;
  `}
`;
