import { Head } from 'react-static';
import React, { FC } from 'react';

export const SiteHead: FC = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link
        href="https://fonts.googleapis.com/css?family=Lato:400,400i,700"
        rel="stylesheet"
      />
    </Head>
  );
};

export default SiteHead;
