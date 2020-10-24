import React, { FC, ReactNode, useLayoutEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

import { Seo } from '@components/common';
import { IAppState } from '@models/AppState';
import { AppState } from '@src/AppState';
import { Breakpoints } from '@styles/index';
import { ThemeProvider } from '@styles/styled';
import { theme } from '@styles/theme';

// /* ref: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/31245 */
/// <reference types="styled-components/cssprop" />

const isSsr = typeof window === 'undefined';

const AppStateWrapper: FC = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(0);

  useLayoutEffect(() => {
    if (window !== undefined) {
      const handleResize = () => setWindowWidth(window.innerWidth);

      handleResize();

      if (document.documentElement.classList.contains('no-js')) {
        document.documentElement.classList.remove('no-js');
      }

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

  return <AppState.Provider value={state}>{children}</AppState.Provider>;
};

export const RootWrapper = ({ element }: { element: ReactNode }) => {
  return (
    <>
      <Helmet>
        <html className={isSsr ? 'no-js' : 'js'} />
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Helmet>
      <Seo />
      <AppStateWrapper>
        <ThemeProvider theme={theme}>{element}</ThemeProvider>
      </AppStateWrapper>
    </>
  );
};

export default RootWrapper;
