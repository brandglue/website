import { Facebook, Linkedin, Twitter } from '@styled-icons/boxicons-logos';
import React, { FC } from 'react';

import { Box, H4 } from '@components/core';
import { BrandGlueLogoIconOnly } from '@images/svg';
import { css, minMediaQuery, scale, rhythm, styled } from '@styles/index';

export const Footer: FC = () => (
  <>
    <Wrapper>
      <Container variant="section">
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
    <Copyright style={{ ...scale(-0.25) }}>
      &copy; {new Date().getFullYear()} BrandGlue. All Rights Reserved.
    </Copyright>
  </>
);

const Wrapper = styled(Box)`
  ${({ theme }) => css`
    background: ${theme.colors.gray06};
  `};
`;

const Container = styled(Box)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: ${theme.colors.gray03};

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
    color: ${theme.colors.gold};
    text-transform: uppercase;
  `}
`;

const Info = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    color: ${theme.colors.gray03};

    &:last-of-type {
      margin-bottom: 15px;
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
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }
`;

const FacebookIcon = styled(Facebook)`
  color: ${({ theme }) => theme.colors.white};
`;

const TwitterIcon = styled(Twitter)`
  color: ${({ theme }) => theme.colors.white};
`;

const LinkedInIcon = styled(Linkedin)`
  color: ${({ theme }) => theme.colors.white};
`;

const StyledBrandGlueLogoIconOnly = styled(BrandGlueLogoIconOnly)`
  width: 80px;
  margin-top: 15px;
`;

const Copyright = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.black};
    color: ${theme.colors.gray03};
    text-align: center;
    padding: 15px;
  `}
`;
