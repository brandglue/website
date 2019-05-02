import React, { FC } from 'react';
import { Head } from 'react-static';

export const SiteHead: FC = () => {
  return (
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Lato:400,400i,700"
        rel="stylesheet"
      />
    </Head>
  );
};

export default SiteHead;
