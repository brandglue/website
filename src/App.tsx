import React, { Component } from 'react';
import { Root, Routes } from 'react-static';

import Header from '@components/Header';
import Footer from '@components/Footer';
import theme from '@theme/theme';
import styled, { css, ThemeProvider } from '@theme/styled';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <RootStyles>
          <Root>
            <Header logo='test'/>
            {/* <Routes /> */}
            <Footer />
          </Root>
        </RootStyles>
      </ThemeProvider>
    )
  }
}

// TODO: figure out using the css`` function here
const RootStyles = styled.div`
  ${({ theme }) => css`
    background: theme.colors.white;
    color: theme.colors.black;
    font-family: theme.fontFamily;
    font-size: theme.fontSize.medium;
  `};
`;

export default App;
