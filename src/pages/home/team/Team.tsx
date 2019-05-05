import React, { FC } from 'react';
import { Link } from '@reach/router';

import Image from '@components/Image';
import ButtonPrimary from '@components/ButtonPrimary';
import SectionTitle from '@components/SectionTitle';
import { Routes } from '@constants/routes';
import joey from '@images/team-joey-ponce.jpg';
import hannah from '@images/team-hannah-lushin.jpg';
import michelle from '@images/team-michelle-heathers.jpg';
import zach from '@images/team-zach-welch.jpg';
import styled, { css } from '@theme/styled';
import { fluidFontSize } from '@theme/utils';

export const Team: FC = () => (
  <>
    <Divider>
      <div>Social experts. Loyal partners. Data-driven results.</div>
      <div>{"That's what you get when you hire BrandGlue."}</div>
    </Divider>
    <Wrapper>
      <SectionTitle>Meet the Team</SectionTitle>
      <p>
        <strong>We are small in number because we are big on talent.</strong>{' '}
        Collectively we have over 30 years of experience with making social
        media, marketing, and design work together to produce something
        incredible. We are proud to be female-owned and value diversity and
        collaboration. The folks below are the team that would work on your
        social outlets. Get to know each of us, learn a bit more about the
        family, and if you want to, reach out!
      </p>
      <TeamPhotos>
        <Image alt="michelle-heathers" img={michelle} />
        <Image alt="zach-welch" img={zach} />
        <Image alt="joey-ponce" img={joey} />
        <Image alt="hannah-lushin" img={hannah} />
      </TeamPhotos>
      <ButtonPrimary as={Link} to={`/${Routes.About}`}>
        Learn More About Us
      </ButtonPrimary>
    </Wrapper>
  </>
);

const Divider = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    background: ${theme.Colors.DarkBlue};
    color: ${theme.Colors.White};
    text-transform: uppercase;
    padding: ${theme.Spacings.FontSpace04};
    ${fluidFontSize.StepUp1()};

    div:first-child {
      color: ${theme.Colors.Gold};
    }
  `};
`;

const Wrapper = styled.div`
  padding: ${({ theme }) =>
    `${theme.Spacings.StaticSpace05} ${theme.Spacings.Page}`};
`;

const TeamPhotos = styled.div`
  display: flex;
  margin: ${({ theme }) => theme.Spacings.StaticSpace03} 0;
`;

export default Team;
