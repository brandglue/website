import React, { FC } from 'react';

import Box from '@components/containers/Box';
import Column from '@components/containers/Column';
import { P } from '@components/text/Text';
import NavTextLink from '@components/links/NavTextLink';
import Image from '@components/images/Image';
import SectionTitle from '@components/sections/SectionTitle';
import { Routes } from '@constants/routes';
import joey from '@images/team-joey-ponce.jpg';
import hannah from '@images/team-hannah-lushin.jpg';
import michelle from '@images/team-michelle-heathers.jpg';
import sharon from '@images/team-sharon-bell.jpg';
import zach from '@images/team-zach-welch.jpg';

export const Team: FC = () => (
  <Column alignItems="flex-start" m="auto" py={7} variant="flex">
    <Box flex="0 0 60%" mr={7} variant="flexItem">
      <SectionTitle>Meet the Team</SectionTitle>
      <Box mb={7}>
        <P>
          <strong>We are small in number because we are big on talent.</strong>{' '}
          Collectively we have over 30 years of experience with making social
          media, marketing, and design work together to produce something
          incredible. We are proud to be female-owned and value diversity and
          collaboration. These folks are the team that would work on your social
          outlets. Get to know each of us, learn a bit more about the family,
          and if you want to, reach out!
        </P>
      </Box>
    </Box>
    <Box variant="flexItem">
      <Box
        gridGap={4}
        gridTemplateColumns={'repeat(auto-fit, minmax(100px, 1fr))'}
        mb={5}
        variant="grid"
      >
        <Image alt="michelle-heathers" img={michelle} />
        <Image alt="zach-welch" img={zach} />
        <Image alt="joey-ponce" img={joey} />
        <Image alt="hannah-lushin" img={hannah} />
        <Image alt="sharon bell" img={sharon} />
      </Box>
      <Box justifyContent="flex-end" variant="flex">
        <NavTextLink to={`/${Routes.About}`}>Learn More About Us</NavTextLink>
      </Box>
    </Box>
  </Column>
);

export default Team;
