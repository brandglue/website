import React, { FC, useState } from 'react';

import Button from '@components/Button';
import CurvedBadge from '@components/CurvedBadge';
import HorizontalDivider from '@components/HorizontalDivider';
import Image from '@components/Image';
import { useTheme } from '@hooks/useTheme';
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
      <CurvedBadge>
        <AccordianSelector onClick={() => setOpen(!isOpen)}>
          See More Clients
          <StyledCaret shouldRotate={isOpen} />
        </AccordianSelector>
      </CurvedBadge>
      <HorizontalDivider
        color={theme.Colors.Gold}
        height={theme.Spacings.StaticSpace0}
      />
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
  text-transform: uppercase;
  font-weight: 700;
  ${fluidFontSize.Baseline()};
`;

const StyledCaret = styled(Caret)`
  margin-left: ${({ theme }) => theme.Spacings.StaticSpace0};
  ${({ shouldRotate }) =>
    shouldRotate &&
    css`
      transform: rotate(180deg);
    `}
`;

export default Clients;
