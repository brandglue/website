import React, { FC, useLayoutEffect, useState } from 'react';

import { Footer, Header } from '@components/common';
import { BrandGlueLogoIconOnly } from '@media/svg';
import { IAppState } from '@models/AppState';
import { AppState } from '@src/AppState';
import { GlobalStyles } from '@styles/globalStyles';
import { Breakpoints, styled } from '@styles/index';
import { ThemeProvider } from '@styles/styled';
import { theme } from '@styles/theme';

export const Layout: FC = ({ children }) => {
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
    isLargeDevice: windowWidth >= Breakpoints.Large,
    isMediumDevice:
      windowWidth >= Breakpoints.Medium && windowWidth < Breakpoints.Large,
    isSmallDevice: windowWidth < Breakpoints.Medium,
  };

  if (windowWidth === 0) {
    return (
      <Wrapper>
        <BrandGlueLogoIconOnly />
      </Wrapper>
    );
  } else {
    return (
      <>
        <AppState.Provider value={state}>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </AppState.Provider>
      </>
    );
  }
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export default Layout;
