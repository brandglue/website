import React, { FC, useContext } from 'react';

import { NavLink } from '@components/links/NavLink';
import { Routes, RouteLabels } from '@constants/routes';
import { BrandGlueLogo } from '@icons/index';
import { AppState } from '@src/AppState';
import { css, styled } from '@theme/styled';
import { minMediaQuery } from '@theme/utils';

interface IMenuItem {
  label: string;
  to: Routes;
}

const smallMenuItems: IMenuItem[] = [
  {
    label: RouteLabels.About,
    to: Routes.About,
  },
  {
    label: RouteLabels.Services,
    to: Routes.Services,
  },
  {
    label: RouteLabels.CaseStudies,
    to: Routes.CaseStudies,
  },
  {
    label: RouteLabels.Blog,
    to: Routes.Blog,
  },
];

const largeMenuItems: IMenuItem[] = [
  ...smallMenuItems,
  {
    label: RouteLabels.Contact,
    to: Routes.Contact,
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
      <LogoLink to={`/`}>
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
  margin: ${({ theme }) => theme.space[3]}px auto;

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
    padding: ${theme.space[3]}px;
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
    padding: 0 ${theme.space[3]}px;
    margin: ${theme.space[4]}px 0;
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
    text-transform: uppercase;
    border-bottom: 2px solid transparent;
    padding: ${theme.space[3]}px;
    margin-right: ${theme.space[4]}px;

    &:hover {
      border-bottom: 2px solid ${theme.colors.gold};
    }

    &.isActive {
      background: ${theme.colors.gold};
      color: ${theme.colors.white};
    }
  `}
`;
