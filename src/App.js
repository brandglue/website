import React, { Component } from 'react';
import { Root, Routes } from 'react-static';
import { ThemeProvider } from 'styled-components';

import Header from './components/Header';
import Homepage from './pages/Homepage';
import Footer from './components/Footer';
import theme from './theme/Theme';

class App extends Component {
  render() {
    return (
      <Root>
        <ThemeProvider theme={theme}>
          <Header />
          <Homepage />
          <Footer />
        </ThemeProvider>
      </Root>
    )
  }
}

export default App
