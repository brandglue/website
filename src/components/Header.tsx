import React, { FC } from 'react';
import { Link } from '@reach/router';

import { BrandglueLogo } from '@components/icons/BrandglueLogo';
import { Routes } from '@constants/routes';
import styled, { css } from '@theme/styled';

export const Header: FC = () => (
  <Wrapper>
    <Logo to={`/`}>
      <BrandglueLogo />
    </Logo>
    <Menu>
      <StyledLink to={`/${Routes.About}`}>About</StyledLink>
      <StyledLink to={`/${Routes.Services}`}>Services</StyledLink>
      <StyledLink to={`/${Routes.CaseStudies}`}>Case Studies</StyledLink>
      <StyledLink to={`/${Routes.Blog}`}>Blog</StyledLink>
      <StyledLink to={`/${Routes.Contact}`}>Contact</StyledLink>
    </Menu>
  </Wrapper>
);

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.Padding.Space5};
  margin: ${({ theme }) => theme.Margin.Space2} 0;
`;

const Logo = styled(Link)`
  flex: 0 0 220px;
`;

const Menu = styled.nav`
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20%;
`;

const StyledLink = styled(Link)`
  ${({ theme }) => css`
    text-transform: uppercase;
    color: ${theme.Colors.Black};
    margin-right: ${theme.Margin.Space5};
    text-decoration: none;
    border-bottom: 2px solid transparent;

    &:hover {
      border-bottom: 2px solid ${theme.Colors.Gold};
    }
  `};
`;

export default Header;
