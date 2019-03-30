import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <Menu>
      <CustomLink>About</CustomLink>
      <CustomLink>Services</CustomLink>
      <CustomLink>Case Studies</CustomLink>
      <CustomLink>Blog</CustomLink>
      <CustomLink>Contact</CustomLink>
    </Menu>
  );
}

const Menu = styled.div`

`;

// todo: extend Link
const CustomLink = styled.a`

`

export default Header;
