import React, { FC } from 'react';

import Column from '@components/containers/Column';
import Box from '@components/containers/Box';
import Image from '@components/images/Image';
import quickbooks from '@images/logo-quickbooks.jpg';
import kayak from '@images/logo-kayak.jpg';
import microsoft from '@images/logo-microsoft.jpg';
import dsg from '@images/logo-dicks-sporting-goods.jpg';
import mint from '@images/logo-mint.jpg';
import youtube from '@images/logo-youtube.jpg';

export const Clients: FC = () => {
  return (
    <Column py={6}>
      <Box
        alignItems="center"
        gridGap={6}
        gridTemplateColumns={['repeat(2, minmax(0, 1fr))', 'repeat(6, 1fr)']}
        variant="grid"
      >
        <Image alt="microsoft" img={microsoft} />
        <Image alt="quickbooks" img={quickbooks} />
        <Image alt="mint" img={mint} />
        <Image alt="kayak" img={kayak} />
        <Image alt="dicks-sporting-goods" img={dsg} />
        <Image alt="youtube" img={youtube} />
      </Box>
    </Column>
  );
};

export default Clients;
