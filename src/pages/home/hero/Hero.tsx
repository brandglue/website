import React, { FC } from 'react';

import Box from '@components/containers/Box';
import Column from '@components/containers/Column';
import Image from '@components/images/Image';
import { H1, H3 } from '@components/text/Heading';
import { P } from '@components/text/Text';
import hero from '@images/homepage-hero.jpg';
import styled, { css } from '@theme/styled';
import { minMediaQuery } from '@theme/utils';

const Hero: FC = () => {
  return (
    <Container>
      <HeroImage alt="homepage-hero" img={hero} />
      <Tagline justifyContent="center" variant="flex">
        <Box variant="flexItem">
          <H1 lineHeight={['41px', '51px', '64px']} m="auto">
            We are a social media agency
          </H1>
          <H3>Reaching your audience in the places they hang out most</H3>
          <P fontSize="108px" mt={7}>
            &darr;
          </P>
        </Box>
      </Tagline>
    </Container>
  );
};

const HeroImage = styled(Image)`
  filter: brightness(0.8);
`;

const Container = styled(Box)`
  position: relative;
  display: inline-block;
  font-size: 0;
`;

const Tagline = styled(Column)`
  color: ${({ theme }) => theme.Colors.White};

  ${minMediaQuery.Medium(css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    flex-flow: column;
    text-align: center;
  `)};
`;

export default Hero;
