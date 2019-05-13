import React, { FC, useContext } from 'react';

import Anchor from '@components/Anchor';
import BrandGlueLogo from '@icons/BrandGlueLogo';
import { Routes } from '@constants/routes';
import { AppState } from '@src/AppState';
import styled, { css } from '@theme/styled';
import { fluidFontSize, minMediaQuery } from '@theme/utils';

export const Header: FC = () => {
  const appState = useContext(AppState);

  const mobileMenu = (
    <header>
      <Logo to={`/`}>
        <BrandGlueLogo />
      </Logo>
      <MobileMenu>
        <MobileLink to={`/${Routes.About}`}>About</MobileLink>
        <MobileLink to={`/${Routes.Services}`}>Services</MobileLink>
        <MobileLink to={`/${Routes.CaseStudies}`}>Case Studies</MobileLink>
        <MobileLink to={`/${Routes.Blog}`}>Blog</MobileLink>
      </MobileMenu>
    </header>
  );

  const desktopMenu = (
    <DesktopWrapper>
      <Logo to={`/`}>
        <BrandGlueLogo />
      </Logo>
      <DesktopMenu>
        <DesktopLink to={`/${Routes.About}`}>About</DesktopLink>
        <DesktopLink to={`/${Routes.Services}`}>Services</DesktopLink>
        <DesktopLink to={`/${Routes.CaseStudies}`}>Case Studies</DesktopLink>
        <DesktopLink to={`/${Routes.Blog}`}>Blog</DesktopLink>
        <DesktopLink to={`/${Routes.Contact}`}>Contact</DesktopLink>
      </DesktopMenu>
    </DesktopWrapper>
  );

  return appState.isDesktop ? desktopMenu : mobileMenu;
};

const Logo = styled(Anchor)`
  display: block;
  width: 50%;
  margin: ${({ theme }) => theme.Spacings.StaticSpace01} auto;

  ${minMediaQuery.Medium(css`
    flex: 0 0 220px;
  `)}
`;

const MobileMenu = styled.nav`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
`;

const MobileLink = styled(Anchor)`
  flex: 1 1 auto;
  display: inline-flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.Colors.Black};
  padding: ${({ theme }) => theme.Spacings.FontSpace02};
  border-right: 1px solid ${({ theme }) => theme.Colors.Gray00};
  ${fluidFontSize.StepDown1()};

  &:last-child {
    border: none;
  }
`;

const DesktopWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.Spacings.Page};
  margin: ${({ theme }) => theme.Spacings.StaticSpace04} 0;
`;

const DesktopMenu = styled.nav`
  flex: 1 1 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const DesktopLink = styled(Anchor)`
  text-transform: uppercase;
  color: ${({ theme }) => theme.Colors.Black};
  margin-right: ${({ theme }) => theme.Spacings.FontSpace09};
  text-decoration: none;
  border-bottom: 2px solid transparent;
  ${fluidFontSize.StepDown1()};

  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.Colors.Gold};
  }
`;

export default Header;
