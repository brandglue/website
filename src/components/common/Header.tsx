import { MenuAltRight, X } from 'styled-icons/boxicons-regular';
import React, { FC, useContext, useState } from 'react';

import { Box, Button, NavLink } from '@components/core';
import { BrandGlueLogo } from '@media/svg/BrandGlueLogo';
import { AppState } from '@src/AppState';
import { css, minMediaQuery, rhythm, styled } from '@styles/index';
import {
  TopLevelPages as Pages,
  TopLevelPageLabels as PageLabels,
} from '@utils/routes';

interface IMenuItem {
  label: string;
  to: Pages;
}

const menuItems: IMenuItem[] = [
  {
    label: PageLabels.About,
    to: Pages.About,
  },
  {
    label: PageLabels.Services,
    to: Pages.Services,
  },
    {
    label: PageLabels.Clients,
    to: Pages.Clients,
  },
  {
    label: PageLabels.Blog,
    to: Pages.Blog,
  },
  {
    label: PageLabels.Contact,
    to: Pages.Contact,
  },
];

export const Header: FC = () => {
  const { isLargeDevice } = useContext(AppState);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(!isMenuOpen);
  };

  const smallDeviceMenu = (
    <Container>
      <Wrapper>
        <LogoLink to={`/`} variant="invisible">
          <BrandGlueLogo />
        </LogoLink>
        {!isMenuOpen && (
          <SmallMenuIconWrapper onClick={handleMenuOpen}>
            <MenuAltRight />
          </SmallMenuIconWrapper>
        )}
      </Wrapper>
      {isMenuOpen && (
        <SmallMenuWrapper>
          <CloseButton onClick={handleMenuOpen}>
            <X />
          </CloseButton>
          <SmallMenu>
            {menuItems.map((item) => {
              return (
                <SmallLink
                  key={item.label}
                  onClick={handleMenuOpen}
                  to={`/${item.to}/`}
                  variant="invisible"
                >
                  {item.label}
                </SmallLink>
              );
            })}
          </SmallMenu>
        </SmallMenuWrapper>
      )}
    </Container>
  );

  const largeDeviceMenu = (
    <Container>
      <Wrapper>
        <LogoLink to={`/`} variant="invisible">
          <BrandGlueLogo />
        </LogoLink>
        <LargeDeviceMenu>
          {menuItems.map((item) => {
            return (
              <LargeDeviceLink
                key={item.label}
                to={`/${item.to}/`}
                variant="invisible"
              >
                {item.label}
              </LargeDeviceLink>
            );
          })}
        </LargeDeviceMenu>
      </Wrapper>
    </Container>
  );

  return isLargeDevice ? largeDeviceMenu : smallDeviceMenu;
};

const Container = styled.header`
  background: ${({ theme }) => theme.colors.white};

  ${minMediaQuery.Medium(css`
    position: sticky;
    top: 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray01};
    z-index: 999;
  `)}
`;

const Wrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.spacings.maxContentColWidth};
  padding: ${rhythm(1)};
`;

const LogoLink = styled(NavLink)`
  display: block;
  max-width: 50%;
  padding-top: 10px;

  ${minMediaQuery.Medium(css`
    width: 50%;
    flex: 0 0 220px;
  `)}

  svg {
    width: 100%;
  }
`;

const SmallMenuIconWrapper = styled.div`
  color: ${({ theme }) => theme.colors.black};
  width: 40px;
`;

const SmallMenuWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: ${({ theme }) => theme.colors.darkBlue};
  border-left: 1px solid ${({ theme }) => theme.colors.white};
  z-index: 999;
`;

const CloseButton = styled(Button)`
  text-align: left;
  color: ${({ theme }) => theme.colors.white};
  padding: 1em;
  margin-left: -2px;

  svg {
    width: 24px;
  }
`;

const SmallMenu = styled.nav`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: flex-start;
  padding: 1em;
`;

const SmallLink = styled(NavLink)`
  ${({ theme }) => css`
    flex: 1 1 auto;
    color: ${theme.colors.white};
    padding-bottom: 0.6em;

    &.isActive {
      color: ${theme.colors.gold};
    }
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
    padding: 0.4em 0.6em;
    margin-right: 1em;

    &:hover,
    &.isActive {
      background: ${theme.colors.gold};
      color: ${theme.colors.white};
    }
  `}
`;
