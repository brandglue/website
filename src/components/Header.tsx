import React from 'react';
import styled from 'styled-components';

export const Header = () => (
  <Wrapper>
    <Logo>
      <img src='' alt='BrandGlue logo' />
    </Logo>
    <Menu>
      <StyledLink>About</StyledLink>
      <StyledLink>Services</StyledLink>
      <StyledLink>Case Studies</StyledLink>
      <StyledLink>Blog</StyledLink>
      <StyledLink>Contact</StyledLink>
    </Menu>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 ${({theme}) => theme.padding.page}px;
`;

const Logo = styled.div`
  flex: 0 0 20%;
`;

const Menu = styled.div`
  display: flex;
  flex: 0 1 80%;
`;

// todo: extend Link
const StyledLink = styled.a`
  text-transform: uppercase;
  margin-right: ${({theme}) => theme.margin.medium}px;
`

export default Header;
