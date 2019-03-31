import React from 'react';
import { Link } from '@reach/router'
import styled from 'styled-components';

export const Header = () => (
  <Wrapper>
    <Logo to="/">
      <img src='' alt='BrandGlue logo' />
    </Logo>
    <Menu>
      <StyledLink to="/about">About</StyledLink>
      <StyledLink to="/services">Services</StyledLink>
      <StyledLink to="/case-studies">Case Studies</StyledLink>
      <StyledLink to="/blog">Blog</StyledLink>
      <StyledLink to="/contact">Contact</StyledLink>
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

// todo: extend Link
const StyledLink = styled(Link)`
  text-transform: uppercase;
  margin-right: ${({theme}) => theme.margin.medium}px;
  text-decoration: none;
`;

export default Header;
