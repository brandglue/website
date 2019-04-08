import React, { FunctionComponent } from 'react';
import { Link } from '@reach/router'

import { ROUTES } from '@constants/routes';
import styled from '@theme/styled';

interface IOwnProps {
  logo: string
}

export const Header: FunctionComponent<IOwnProps> = ({ logo }) => (
  <Wrapper>
    <Logo to={`/`}>
      <img src={logo} alt='BrandGlue logo' />
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

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 ${({theme}) => theme.padding.page}px;
`;

const Logo = styled(Link)`
  flex: 0 0 20%;
`;

const Menu = styled.nav`
  display: flex;
  flex: 0 1 80%;
`;

const StyledLink = styled(Link)`
  text-transform: uppercase;
  margin-right: ${({theme}) => theme.margin.medium}px;
  text-decoration: none;
`;

export default Header;
