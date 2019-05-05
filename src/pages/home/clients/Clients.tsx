import React, { FC, useState } from 'react';

import Button from '@components/Button';
import CurvedBadge from '@components/CurvedBadge';
import Image from '@components/Image';
import Caret from '@icons/Caret';
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
import styled, { css } from '@theme/styled';
import { fluidFontSize } from '@theme/utils';

export const Clients: FC = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Grid>
        <Image alt="microsoft" img={microsoft} />
        <Image alt="intel" img={intel} />
        <Image alt="kayak" img={kayak} />
        <Image alt="quickbooks" img={quickbooks} />

        {isOpen && (
          <>
            <Image alt="intuit" img={intuit} />
            <Image alt="mint" img={mint} />
            <Image alt="dicks-sporting-goods" img={dsg} />
            <Image alt="youtube" img={youtube} />
            <Image alt="phoenix-suns" img={suns} />
            <Image alt="good" img={good} />
            <Image alt="shortel" img={shortel} />
            <Image alt="pgi" img={pgi} />
          </>
        )}
      </Grid>
      <CurvedBadge>
        <AccordianSelector onClick={() => setOpen(!isOpen)}>
          {`See ${isOpen ? 'Fewer' : 'More'} Clients`}
          <StyledCaret shouldRotate={isOpen} />
        </AccordianSelector>
      </CurvedBadge>
      <HorizontalDivider />
    </>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: 12vw 12vw 12vw 12vw;
  grid-auto-rows: 12vw 12vw 12vw;
  grid-column-gap: 3vw;
  grid-row-gap: 1vw;
  justify-items: center;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.Spacings.StaticSpace3} 0;
`;

const AccordianSelector = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.Colors.White};
  margin-top: ${({ theme }) => theme.Spacings.StaticSpace0};
  margin-left: ${({ theme }) => theme.Spacings.Page};
  text-transform: uppercase;
  font-weight: 700;
  ${fluidFontSize.Baseline()};
`;

const StyledCaret = styled(Caret)`
  margin-left: ${({ theme }) => theme.Spacings.StaticSpace0};
  ${({ shouldRotate }) =>
    !shouldRotate &&
    css`
      transform: rotate(180deg);
    `}
`;

const HorizontalDivider = styled.div`
  background: ${({ theme }) => theme.Colors.Gold};
  height: ${({ theme }) => theme.Spacings.StaticSpace0};
`;

export default Clients;
