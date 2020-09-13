import { Facebook, Linkedin, Twitter } from '@styled-icons/boxicons-logos';
import React, { FC } from 'react';

import { Anchor, Box, H4, NavLink } from '@components/core';
import { BrandGlueLogoIconOnly } from '@media/svg';
import { css, minMediaQuery, scale, styled } from '@styles/index';
import { TopLevelPages, TopLevelPageLabels } from '@utils/routes';

export const Footer: FC = () => (
  <>
    <Wrapper>
      <Container variant="section">
        <Contact>
          <Title>Contact Us</Title>
          <Info hasArrow={false} href="tel:+1-360-207-4583" variant="invisible">
            +1 (360) 207-4583
          </Info>
          <Info
            hasArrow={false}
            href="mailto:hello@brandglue.com"
            variant="invisible"
          >
            hello@brandglue.com
          </Info>
          <Social>
            <SocialIcon>
              <Anchor
                hasArrow={false}
                href="https://www.facebook.com/BrandGlue"
                variant="invisible"
              >
                <Facebook />
              </Anchor>
            </SocialIcon>
            <SocialIcon>
              <Anchor
                hasArrow={false}
                href="https://twitter.com/glue"
                variant="invisible"
              >
                <Twitter />
              </Anchor>
            </SocialIcon>
            <SocialIcon>
              <Anchor
                hasArrow={false}
                href="https://www.linkedin.com/company/brandglue-com"
                variant="invisible"
              >
                <Linkedin />
              </Anchor>
            </SocialIcon>
          </Social>
        </Contact>
        <Links>
          <li>
            <FooterLink
              to={`/${TopLevelPages.About}/`}
              variant="textLinkCurrent"
            >
              {TopLevelPageLabels.About}
            </FooterLink>
          </li>
          <li>
            <FooterLink
              to={`/${TopLevelPages.Services}/`}
              variant="textLinkCurrent"
            >
              {TopLevelPageLabels.Services}
            </FooterLink>
          </li>
          <li>
            <FooterLink
              to={`/${TopLevelPages.CaseStudies}/`}
              variant="textLinkCurrent"
            >
              {TopLevelPageLabels.CaseStudies}
            </FooterLink>
          </li>
          <li>
            <FooterLink
              to={`/${TopLevelPages.Blog}/`}
              variant="textLinkCurrent"
            >
              {TopLevelPageLabels.Blog}
            </FooterLink>
          </li>
        </Links>
        <Links>
          <li>
            <FooterLink
              to={`/${TopLevelPages.CaseStudies}/eloqua/`}
              variant="textLinkCurrent"
            >
              Eloqua Case Study
            </FooterLink>
          </li>
          <li>
            <FooterLink
              to={`/${TopLevelPages.CaseStudies}/intuit-accountants/`}
              variant="textLinkCurrent"
            >
              Intuit Case Study
            </FooterLink>
          </li>
          <li>
            <FooterLink
              to={`/${TopLevelPages.CaseStudies}/whitehat-security/`}
              variant="textLinkCurrent"
            >
              WhiteHat Case Study
            </FooterLink>
          </li>
          <li>
            <FooterLink
              to={`/${TopLevelPages.CaseStudies}/pgi/`}
              variant="textLinkCurrent"
            >
              PGi Case Study
            </FooterLink>
          </li>
        </Links>
        <StyledBrandGlueLogoIconOnly />
      </Container>
    </Wrapper>
    <Copyright>
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

const Info = styled(Anchor)`
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
  color: ${({ theme }) => theme.colors.white};
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }

  svg {
    width: 30px;
    height: auto;
  }
`;

const Links = styled.ul`
  list-style-type: none;
  color: ${({ theme }) => theme.colors.gray00};
  margin-left: 0;

  li {
    margin: 0;
  }
`;

const FooterLink = styled(NavLink)`
  color: currentColor;
  border-bottom: 1px solid currentColor;

  &:hover {
    opacity: 0.8;
  }
`;

const StyledBrandGlueLogoIconOnly = styled(BrandGlueLogoIconOnly)`
  width: 80px;
  margin-top: 15px;
`;

const Copyright = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.gray05};
    font-size: ${scale(-0.25).fontSize};
    color: ${theme.colors.gray03};
    text-align: center;
    padding: 15px;
  `}
`;
