import { Root, Routes } from 'react-static';
import React, { FC, Suspense, useLayoutEffect, useState } from 'react';
import { Router } from '@reach/router';

// /* ref: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/31245 */
/// <reference types="styled-components/cssprop" />

import Spinner from '@components/Spinner';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { IAppState } from '@models/AppState';
import { AppState } from '@src/AppState';
import { theme } from '@theme/theme';
import styled, { createGlobalStyle, css, ThemeProvider } from '@theme/styled';
import { fluidFontSize } from '@theme/utils';

import SiteHead from './SiteHead';

export const App: FC = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useLayoutEffect(() => {
    if (window !== undefined) {
      const handleResize = () => setWindowWidth(window.innerWidth);

      handleResize();

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [windowWidth]);

  const state: IAppState = {
    isLargeFormFactor: windowWidth >= theme.Breakpoints.Large,
    isMediumFormFactor:
      windowWidth >= theme.Breakpoints.Medium &&
      windowWidth < theme.Breakpoints.Large,
    isSmallFormFactor: windowWidth < theme.Breakpoints.Medium,
  };

  return (
    <AppState.Provider value={state}>
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
    </AppState.Provider>
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

  *, *:before, *:after {
    box-sizing: border-box;
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
