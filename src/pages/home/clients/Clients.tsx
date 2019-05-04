import React, { FC, useState } from 'react';

import Button from '@components/Button';
import HorizontalDivider from '@components/HorizontalDivider';
import Image from '@components/Image';
import { useTheme } from '@hooks/useTheme';
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

export const Clients: FC = () => {
  const [isOpen, setOpen] = useState(false);
  const theme = useTheme();

  return (
    <>
      <Grid>
        <Image img={microsoft} />
        <Image img={intel} />
        <Image img={kayak} />
        <Image img={quickbooks} />

        {isOpen && (
          <>
            <Image img={intuit} />
            <Image img={mint} />
            <Image img={dsg} />
            <Image img={youtube} />
            <Image img={suns} />
            <Image img={good} />
            <Image img={shortel} />
            <Image img={pgi} />
          </>
        )}
      </Grid>
      <AccordianSelector onClick={() => setOpen(!isOpen)}>
        See More Clients
      </AccordianSelector>
      <HorizontalDivider
        color={theme.Colors.Gold}
        height={theme.Spacings.StaticSpace5}
      />
    </>
  );
};

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

const AccordianSelector = styled(Button)``;

export default Clients;
