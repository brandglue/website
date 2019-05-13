import React, { FC, useState } from 'react';

import ButtonOutline from '@components/ButtonOutline';
import Image from '@components/Image';
import SectionWrapper from '@components/SectionWrapper';
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
import { minMediaQuery } from '@theme/utils';

export const Clients: FC = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <SectionWrapper
      css={`
        text-align: center;
      `}
    >
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
      <CtaButton onClick={() => setOpen(!isOpen)}>
        {`See ${isOpen ? 'Fewer' : 'More'} Clients`}{' '}
        <StyledCaret shouldRotate={isOpen} />
      </CtaButton>
    </SectionWrapper>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 5vw;
  justify-content: center;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.Spacings.StaticSpace03};
`;

const CtaButton = styled(ButtonOutline)`
  color: ${({ theme }) => theme.Colors.DarkBlue};
`;

const StyledCaret = styled(Caret)`
  width: 15px;
  margin-left: ${({ theme }) => theme.Spacings.StaticSpace00};
  ${({ shouldRotate }) =>
    !shouldRotate &&
    css`
      transform: rotate(180deg);
    `}
`;

export default Clients;
