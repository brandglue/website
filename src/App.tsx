import React, { Suspense } from 'react';
import { Root, Routes } from 'react-static';
import { Router } from '@reach/router';

import Header from '@components/Header';
import Footer from '@components/Footer';
import { theme } from '@theme/theme';
import { createGlobalStyle, css, ThemeProvider } from '@theme/styled';
import { fluidFontSize, minMediaQuery } from '@theme/utils';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Root>
        <GlobalStyles />
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Router>
            <Routes path="*" />
          </Router>
        </Suspense>
        <Footer />
      </Root>
    </ThemeProvider>
  );
};

const GlobalStyles = createGlobalStyle`
  body {
    ${({ theme }) => css`
      background: ${theme.colors.white};
      color: ${theme.colors.black};
      font-family: ${theme.fontFamilies.primary};
      margin: 0;
      ${fluidFontSize.default()}
    `};
  }
`;

export default App;
