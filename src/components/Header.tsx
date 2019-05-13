import React, { FC, useContext } from 'react';

import NavLink from '@components/links/NavLink';
import BrandGlueLogo from '@icons/BrandGlueLogo';
import { Routes } from '@constants/routes';
import { AppState } from '@src/AppState';
import styled, { css } from '@theme/styled';
import { fluidFontSize, minMediaQuery } from '@theme/utils';

export const Header: FC = () => {
  const appState = useContext(AppState);

  const smallFormFactorMenu = (
    <header>
      <Logo to={`/`}>
        <BrandGlueLogo />
      </Logo>
      <SmallFormFactorMenu>
        <SmallFormFactorLink to={`/${Routes.About}`}>About</SmallFormFactorLink>
        <SmallFormFactorLink to={`/${Routes.Services}`}>
          Services
        </SmallFormFactorLink>
        <SmallFormFactorLink to={`/${Routes.CaseStudies}`}>
          Case Studies
        </SmallFormFactorLink>
        <SmallFormFactorLink to={`/${Routes.Blog}`}>Blog</SmallFormFactorLink>
      </SmallFormFactorMenu>
    </header>
  );

  const largeFormFactorMenu = (
    <LargeFormFactorWrapper>
      <Logo to={`/`}>
        <BrandGlueLogo />
      </Logo>
      <LargeFormFactorMenu>
        <LargeFormFactorLink to={`/${Routes.About}`}>About</LargeFormFactorLink>
        <LargeFormFactorLink to={`/${Routes.Services}`}>
          Services
        </LargeFormFactorLink>
        <LargeFormFactorLink to={`/${Routes.CaseStudies}`}>
          Case Studies
        </LargeFormFactorLink>
        <LargeFormFactorLink to={`/${Routes.Blog}`}>Blog</LargeFormFactorLink>
        <LargeFormFactorLink to={`/${Routes.Contact}`}>
          Contact
        </LargeFormFactorLink>
      </LargeFormFactorMenu>
    </LargeFormFactorWrapper>
  );

  return appState.isLargeFormFactor ? largeFormFactorMenu : smallFormFactorMenu;
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

const SmallFormFactorMenu = styled.nav`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
`;

const SmallFormFactorLink = styled(NavLink)`
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

const LargeFormFactorWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.Spacings.Page};
  margin: ${({ theme }) => theme.Spacings.StaticSpace04} 0;
`;

const LargeFormFactorMenu = styled.nav`
  flex: 1 1 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const LargeFormFactorLink = styled(NavLink)`
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
