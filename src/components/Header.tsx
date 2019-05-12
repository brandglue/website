import React, { FC, useContext } from 'react';
import { Link } from '@reach/router';

import BrandGlueLogo from '@icons/BrandGlueLogo';
import BrandGlueLogoIconOnly from '@icons/BrandglueLogoIconOnly';
import { Routes } from '@constants/routes';
import { AppState } from '@src/AppState';
import styled from '@theme/styled';
import { fluidFontSize } from '@theme/utils';

export const Header: FC = () => {
  const appState = useContext(AppState);

  const mobileMenu = (
    <header>
      <MobileMenu>
        <MobileLink to={`/`}>
          <BrandGlueLogoIconOnly width={20} />
          <Label>Home</Label>
        </MobileLink>
        <MobileLink to={`/${Routes.About}`}>
          <BrandGlueLogoIconOnly width={20} />
          <Label>About</Label>
        </MobileLink>
        <MobileLink to={`/${Routes.Services}`}>
          <BrandGlueLogoIconOnly width={20} />
          <Label>Services</Label>
        </MobileLink>
        <MobileLink to={`/${Routes.CaseStudies}`}>
          <BrandGlueLogoIconOnly width={20} />
          <Label>Case Studies</Label>
        </MobileLink>
        <MobileLink to={`/${Routes.Blog}`}>
          <BrandGlueLogoIconOnly width={20} />
          <Label>Blog</Label>
        </MobileLink>
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

const MobileMenu = styled.nav`
  display: flex;
`;

const MobileLink = styled(Link)`
  flex: 1 1 auto;
  display: inline-flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.Colors.Black};
  padding: ${({ theme }) => theme.Spacings.FontSpace02};
  border-right: 1px solid ${({ theme }) => theme.Colors.Gray00};

  &:last-child {
    border: none;
  }
`;

const Label = styled.div`
  margin-top: ${({ theme }) => theme.Spacings.StaticSpace00};
  ${fluidFontSize.StepDown1()};
`;

const DesktopWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.Spacings.Page};
  margin: ${({ theme }) => theme.Spacings.StaticSpace02} 0;
`;

const DesktopMenu = styled.nav`
  flex: 1 1 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Logo = styled(Link)`
  flex: 0 0 220px;
`;

const DesktopLink = styled(Link)`
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
