import React, { FC, Suspense } from 'react';
import { Root, Routes } from 'react-static';
import { Router } from '@reach/router';

import Header from '@components/Header';
import Footer from '@components/Footer';
import { theme } from '@theme/theme';
import { createGlobalStyle, css, ThemeProvider } from '@theme/styled';
import { fluidFontSize } from '@theme/utils';

import SiteHead from './SiteHead';

export const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Root>
        <SiteHead />
        <GlobalStyles />
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <Router>
            <Routes path="*" />
          </Router>
          <Footer />
        </Suspense>
      </Root>
    </ThemeProvider>
  );
};

const GlobalStyles = createGlobalStyle`
  body {
    ${({ theme }) => css`
      background: ${theme.Colors.White};
      color: ${theme.Colors.Black};
      font-family: ${theme.FontFamilies.Primary};
      line-height: 1.5;
      margin: 0;
      ${fluidFontSize.Baseline()}
    `};
  }
`;

export default App;
