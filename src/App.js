import React, { Component } from 'react';
import { Root } from 'react-static';
import styled, { ThemeProvider } from 'styled-components';

import Header from './components/Header';
import Homepage from './pages/Homepage';
import Footer from './components/Footer';
import theme from './theme/Theme';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <RootStyles>
          <Root>
            <Header />
            <Homepage />
            <Footer />
          </Root>
        </RootStyles>
      </ThemeProvider>
    )
  }
}

// todo: figure out using the css`` function here
const RootStyles = styled.div`
  background: ${({theme}) => theme.colors.white};
  color: ${({theme}) => theme.colors.black};
  font-family: ${({theme}) => theme.fontFamily};
  font-size: 14px;
`;

export default App
