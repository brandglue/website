import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';

import Layout from '@layout/Layout';
import { GlobalStyles } from '@theme/globalStyles';
import { ThemeProvider } from '@theme/styled';
import { theme } from '@theme/theme';

// /* ref: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/31245 */
/// <reference types="styled-components/cssprop" />

export const RootWrapper = ({ element }: { element: ReactNode }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:400,400i,700"
          rel="stylesheet"
        />
      </Helmet>

      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout>{element}</Layout>
      </ThemeProvider>
    </>
  );
};

export default RootWrapper;
