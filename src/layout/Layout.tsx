import React, { FC, useLayoutEffect, useState } from 'react';

import Footer from '@layout/Footer';
import Header from '@layout/Header';
import { IAppState } from '@models/AppState';
import { AppState } from '@src/AppState';
import { theme } from '@theme/theme';

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
    isLargeDevice: windowWidth >= theme.Breakpoints.Large,
    isMediumDevice:
      windowWidth >= theme.Breakpoints.Medium &&
      windowWidth < theme.Breakpoints.Large,
    isSmallDevice: windowWidth < theme.Breakpoints.Medium,
  };

  return (
    <>
      <AppState.Provider value={state}>
        <Header />
        {children}
        <Footer />
      </AppState.Provider>
    </>
  );
};

export default Layout;
