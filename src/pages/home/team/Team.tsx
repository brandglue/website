import React, { FC } from 'react';

import NavLink from '@components/links/NavLink';
import Image from '@components/images/Image';
import PrimaryButton from '@components/buttons/PrimaryButton';
import SectionText from '@components/sections/SectionText';
import SectionTitle from '@components/sections/SectionTitle';
import SectionWrapper from '@components/sections/SectionWrapper';
import { Routes } from '@constants/routes';
import joey from '@images/team-joey-ponce.jpg';
import hannah from '@images/team-hannah-lushin.jpg';
import michelle from '@images/team-michelle-heathers.jpg';
import zach from '@images/team-zach-welch.jpg';
import styled from '@theme/styled';

export const Team: FC = () => (
  <SectionWrapper>
    <SectionTitle>Meet the Team</SectionTitle>
    <SectionText>
      <p>
        <strong>We are small in number because we are big on talent.</strong>{' '}
        Collectively we have over 30 years of experience with making social
        media, marketing, and design work together to produce something
        incredible. We are proud to be female-owned and value diversity and
        collaboration. The folks below are the team that would work on your
        social outlets. Get to know each of us, learn a bit more about the
        family, and if you want to, reach out!
      </p>
    </SectionText>
    <TeamPhotos>
      <Image alt="michelle-heathers" img={michelle} />
      <Image alt="zach-welch" img={zach} />
      <Image alt="joey-ponce" img={joey} />
      <Image alt="hannah-lushin" img={hannah} />
    </TeamPhotos>
    <PrimaryButton as={NavLink} to={`/${Routes.About}`}>
      Learn More About Us
    </PrimaryButton>
  </SectionWrapper>
);

const TeamPhotos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  margin-bottom: ${({ theme }) => theme.Spacings.StaticSpace05};
`;

export default Team;
