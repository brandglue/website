import React, { FC } from 'react';
import { Link } from '@reach/router';

import { BrandglueLogo } from '@components/icons/BrandglueLogo';
import { ROUTES } from '@constants/routes';
import styled, { css } from '@theme/styled';

export const Header: FC = () => (
  <Wrapper>
    <Logo to={`/`}>
      <BrandglueLogo />
    </Logo>
    <Menu>
      <StyledLink to={`/${ROUTES.ABOUT}`}>About</StyledLink>
      <StyledLink to={`/${ROUTES.SERVICES}`}>Services</StyledLink>
      <StyledLink to={`/${ROUTES.CASE_STUDIES}`}>Case Studies</StyledLink>
      <StyledLink to={`/${ROUTES.BLOG}`}>Blog</StyledLink>
      <StyledLink to={`/${ROUTES.CONTACT}`}>Contact</StyledLink>
    </Menu>
  </Wrapper>
);

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.padding.space5};
  margin: ${({ theme }) => theme.margin.space2} 0;
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
    color: ${theme.colors.black};
    margin-right: ${theme.margin.space5};
    text-decoration: none;
    border-bottom: 2px solid transparent;

    &:hover {
      border-bottom: 2px solid ${theme.colors.gold};
    }
  `};
`;

export default Header;
