import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';

import Layout from '@layout/Layout';
import { GlobalStyles } from '@src/styles/globalStyles';
import { ThemeProvider } from '@src/styles/styled';
import { theme } from '@src/styles/theme';

// /* ref: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/31245 */
/// <reference types="styled-components/cssprop" />

export const RootWrapper = ({ element }: { element: ReactNode }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Helmet>

      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout>{element}</Layout>
      </ThemeProvider>
    </>
  );
};

export default RootWrapper;
