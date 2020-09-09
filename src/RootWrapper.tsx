import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';

import { Seo } from '@components/common';

import Layout from './Layout';

// /* ref: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/31245 */
/// <reference types="styled-components/cssprop" />

export const RootWrapper = ({ element }: { element: ReactNode }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Helmet>
      <Seo />
      <Layout>{element}</Layout>
    </>
  );
};

export default RootWrapper;
