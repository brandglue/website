import React, { FC, useContext } from 'react';

import { Box, NavLink } from '@components/core';
import {
  TopLevelPages as Pages,
  TopLevelPageLabels as PageLabels,
} from '@constants/routes';
import { BrandGlueLogo } from '@images/svg/BrandGlueLogo';
import { AppState } from '@src/AppState';
import { css, minMediaQuery, rhythm, styled } from '@styles/index';

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
    <header>
      <LargeDeviceWrapper variant="thinSection">
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
    </header>
  );

  return appState.isLargeDevice ? largeDeviceMenu : smallDeviceMenu;
};

const LogoLink = styled(NavLink)`
  display: block;
  width: 50%;
  max-width: 220px;
  padding-top: 10px;

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
    padding: 15px;
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

const LargeDeviceWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
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
    padding: 0.4em 0.6em;
    margin-right: 1em;

    &:hover,
    &.isActive {
      background: ${theme.colors.gold};
      color: ${theme.colors.white};
    }
  `}
`;