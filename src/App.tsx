import React, { FC, Suspense } from 'react';
import { Root, Routes } from 'react-static';
import { Router } from '@reach/router';

import Spinner from '@components/Spinner';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { theme } from '@theme/theme';
import styled, { createGlobalStyle, css, ThemeProvider } from '@theme/styled';
import { fluidFontSize } from '@theme/utils';

import SiteHead from './SiteHead';

export const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Root>
        <SiteHead />
        <GlobalStyles />
        <Suspense
          fallback={
            <SpinnerWrapper>
              <Spinner />
            </SpinnerWrapper>
          }
        >
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

  /* basic resets for common tags */
  p, h1, h2, h3, h4, h5 {
    margin: 0;
    margin-bottom: ${({ theme }) => theme.Spacings.StaticSpace01};
  }
`;

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export default App;
