import React, { FC } from 'react';

import Image from '@components/Image';
import quickbooks from '@images/logo-quickbooks.jpg';
import kayak from '@images/logo-kayak.jpg';
import microsoft from '@images/logo-microsoft.jpg';
import intel from '@images/logo-intel.jpg';
import dsg from '@images/logo-dicks-sporting-goods.jpg';
import intuit from '@images/logo-intuit.jpg';
import suns from '@images/logo-phoenix-suns.jpg';
import mint from '@images/logo-mint.jpg';
import good from '@images/logo-good.jpg';
import shortel from '@images/logo-shortel.jpg';
import pgi from '@images/logo-pgi.jpg';
import youtube from '@images/logo-youtube.jpg';

import styled from '@theme/styled';

export const Clients: FC = () => (
  <Grid>
    <Logo img={microsoft} />
    <Logo img={intel} />
    <Logo img={kayak} />
    <Logo img={quickbooks} />
    <Logo img={intuit} />
    <Logo img={mint} />
    <Logo img={dsg} />
    <Logo img={youtube} />
    <Logo img={suns} />
    <Logo img={good} />
    <Logo img={shortel} />
    <Logo img={pgi} />
  </Grid>
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 12vw 12vw 12vw 12vw;
  grid-template-rows: 12vw 12vw 12vw;
  grid-column-gap: 3vw;
  grid-row-gap: 1vw;
  justify-items: center;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.Spacings.StaticSpace3} 0;
`;

const Logo = styled(Image)`
  /* max-width: 200px; */
`;

export default Clients;
