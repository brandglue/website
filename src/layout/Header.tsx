import React, { FC, useContext } from 'react';

import { NavLink } from '@components/core';
import {
  TopLevelPages as Pages,
  TopLevelPageLabels as PageLabels,
} from '@constants/routes';
import { BrandGlueLogo } from '@images/svg/BrandGlueLogo';
import { AppState } from '@src/AppState';
import { css, styled } from '@theme/styled';
import { minMediaQuery } from '@theme/utils';

interface IMenuItem {
  label: string;
  to: Pages;
}

const smallMenuItems: IMenuItem[] = [
  {
    label: PageLabels.About,
    to: Pages.About,
  },
  {
    label: PageLabels.Services,
    to: Pages.Services,
  },
  {
    label: PageLabels.CaseStudies,
    to: Pages.CaseStudies,
  },
  {
    label: PageLabels.Blog,
    to: Pages.Blog,
  },
];

const largeMenuItems: IMenuItem[] = [
  ...smallMenuItems,
  {
    label: PageLabels.Contact,
    to: Pages.Contact,
  },
];

export const Header: FC = () => {
  const appState = useContext(AppState);

  const smallDeviceMenu = (
    <header>
      <LogoLink to={`/`} variant="invisible">
        <BrandGlueLogo />
      </LogoLink>
      <SmallDeviceMenu>
        {smallMenuItems.map((item) => {
          return (
            <SmallDeviceLink
              key={item.label}
              to={`/${item.to}`}
              variant="invisible"
            >
              {item.label}
            </SmallDeviceLink>
          );
        })}
      </SmallDeviceMenu>
    </header>
  );

  const largeDeviceMenu = (
    <LargeDeviceWrapper>
      <LogoLink to={`/`} variant="invisible">
        <BrandGlueLogo />
      </LogoLink>
      <LargeDeviceMenu>
        {largeMenuItems.map((item) => {
          return (
            <LargeDeviceLink
              key={item.label}
              to={`/${item.to}`}
              variant="invisible"
            >
              {item.label}
            </LargeDeviceLink>
          );
        })}
      </LargeDeviceMenu>
    </LargeDeviceWrapper>
  );

  return appState.isLargeDevice ? largeDeviceMenu : smallDeviceMenu;
};

const LogoLink = styled(NavLink)`
  display: block;
  width: 50%;
  max-width: 220px;
  margin: ${({ theme }) => theme.spacings.pixelSpace03} auto;

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
  ${({ theme }) => css`
    flex: 1 1 auto;
    color: ${theme.colors.black};
    text-transform: uppercase;
    padding: ${theme.spacings.pixelSpace03};
    border-right: 1px solid ${theme.colors.gray02};

    &:last-child {
      border: none;
    }

    &.isActive {
      background: ${theme.colors.gold};
      color: ${theme.colors.white};
    }
  `}
`;

const LargeDeviceWrapper = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    padding: 0 ${theme.spacings.pixelSpace03};
    margin: ${theme.spacings.pixelSpace04} 0;
    max-width: ${theme.spacings.maxPageWidth}px;
  `}
`;

const LargeDeviceMenu = styled.nav`
  flex: 1 1 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const LargeDeviceLink = styled(NavLink)`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    padding: ${theme.spacings.emSpace02};
    margin-right: ${theme.spacings.emSpace03};

    &:hover,
    &.isActive {
      background: ${theme.colors.gold};
      color: ${theme.colors.white};
    }
  `}
`;
