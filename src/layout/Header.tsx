import React, { FC, useContext } from 'react';

import NavLink from '@components/links/NavLink';
import { Routes } from '@constants/routes';
import BrandGlueLogo from '@icons/BrandGlueLogo';
import { AppState } from '@src/AppState';
import styled, { css } from '@theme/styled';
import { fluidFontSize, minMediaQuery } from '@theme/utils';

export const Header: FC = () => {
  const appState = useContext(AppState);

  const smallDeviceMenu = (
    <header>
      <Logo to={`/`}>
        <BrandGlueLogo />
      </Logo>
      <SmallDeviceMenu>
        <SmallDeviceLink to={`/${Routes.About}`}>About</SmallDeviceLink>
        <SmallDeviceLink to={`/${Routes.Services}`}>Services</SmallDeviceLink>
        <SmallDeviceLink to={`/${Routes.CaseStudies}`}>
          Case Studies
        </SmallDeviceLink>
        <SmallDeviceLink to={`/${Routes.Blog}`}>Blog</SmallDeviceLink>
      </SmallDeviceMenu>
    </header>
  );

  const largeDeviceMenu = (
    <LargeDeviceWrapper>
      <Logo to={`/`}>
        <BrandGlueLogo />
      </Logo>
      <LargeDeviceMenu>
        <LargeDeviceLink to={`/${Routes.About}`}>About</LargeDeviceLink>
        <LargeDeviceLink to={`/${Routes.Services}`}>Services</LargeDeviceLink>
        <LargeDeviceLink to={`/${Routes.CaseStudies}`}>
          Case Studies
        </LargeDeviceLink>
        <LargeDeviceLink to={`/${Routes.Blog}`}>Blog</LargeDeviceLink>
        <LargeDeviceLink to={`/${Routes.Contact}`}>Contact</LargeDeviceLink>
      </LargeDeviceMenu>
    </LargeDeviceWrapper>
  );

  return appState.isLargeDevice ? largeDeviceMenu : smallDeviceMenu;
};

const Logo = styled(NavLink)`
  display: block;
  width: 50%;
  max-width: 220px;
  margin: ${({ theme }) => theme.Spacings.StaticSpace01} auto;

  ${minMediaQuery.Medium(css`
    flex: 0 0 220px;
  `)}
`;

const SmallDeviceMenu = styled.nav`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
`;

const SmallDeviceLink = styled(NavLink)`
  flex: 1 1 auto;
  color: ${({ theme }) => theme.Colors.Black};
  text-transform: uppercase;
  padding: ${({ theme }) => theme.Spacings.FontSpace02};
  border-right: 1px solid ${({ theme }) => theme.Colors.Gray00};
  ${fluidFontSize.StepDown1()};

  &:last-child {
    border: none;
  }

  &.isActive {
    background: ${({ theme }) => theme.Colors.Gold};
    color: ${({ theme }) => theme.Colors.White};
  }
`;

const LargeDeviceWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.space[3]}px;
  margin: ${({ theme }) => theme.Spacings.StaticSpace04} 0;
  max-width: ${({ theme }) => theme.maxPageWidth}px;
`;

const LargeDeviceMenu = styled.nav`
  flex: 1 1 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const LargeDeviceLink = styled(NavLink)`
  color: ${({ theme }) => theme.Colors.Black};
  text-transform: uppercase;
  border-bottom: 2px solid transparent;
  padding: ${({ theme }) => theme.Spacings.FontSpace02};
  margin-right: ${({ theme }) => theme.Spacings.FontSpace09};
  ${fluidFontSize.StepDown1()};

  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.Colors.Gold};
  }

  &.isActive {
    background: ${({ theme }) => theme.Colors.Gold};
    color: ${({ theme }) => theme.Colors.White};
  }
`;

export default Header;
