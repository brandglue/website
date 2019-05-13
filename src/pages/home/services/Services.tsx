import React, { FC } from 'react';

import NavLink from '@components/links/NavLink';
import PrimaryButton from '@components/buttons/PrimaryButton';
import { Routes } from '@constants/routes';
import CommunityManagement from '@icons/CommunityManagement';
import ContentStrategy from '@icons/ContentStrategy';
import CustomerService from '@icons/CustomerService';
import DataAnalysis from '@icons/DataAnalysis';
import GraphicDesign from '@icons/GraphicDesign';
import NewsfeedOptimization from '@icons/NewsfeedOptimization';
import PaidAdvertising from '@icons/PaidAdvertising';
import SocialStrategy from '@icons/SocialStrategy';
import TargetAudiencePersonas from '@icons/TargetAudiencePersonas';
import SectionText from '@components/sections/SectionText';
import SectionTitle from '@components/sections/SectionTitle';
import SectionWrapper from '@components/sections/SectionWrapper';
import styled, { css } from '@theme/styled';
import { fluidFontSize, minMediaQuery } from '@theme/utils';

export const Services: FC = () => {
  return (
    <>
      <SectionWrapper
        css={`
          position: relative;
        `}
      >
        <SectionTitle>
          {`What can we do for you? \n Well, a lot actually.`}
        </SectionTitle>
        <SectionText>
          <p>
            <strong>The world of Social Media is getting bigger daily.</strong>{' '}
            And with this, so are all the ways you can connect with your
            audience, teach them about your brand, and build loyalty. The
            obvious issue here: {"Who's"} got time to manage it all? {"That's"}{' '}
            where we come in. With our combined expertise, and a good chunk of
            time spent getting to know you, we will help you accomplish your
            mission in the social sphere.{' '}
            <strong>Here are the ways we do it:</strong>
          </p>
        </SectionText>
        <Grid>
          <GridItem>
            <GridIcon>
              <SocialStrategy />
            </GridIcon>
            <GridLabel>Social Strategy</GridLabel>
          </GridItem>
          <GridItem>
            <GridIcon>
              <TargetAudiencePersonas />
            </GridIcon>
            <GridLabel>Target Audience Personas</GridLabel>
          </GridItem>
          <GridItem>
            <GridIcon>
              <PaidAdvertising />
            </GridIcon>
            <GridLabel>Paid Advertising</GridLabel>
          </GridItem>
          <GridItem>
            <GridIcon>
              <ContentStrategy />
            </GridIcon>
            <GridLabel>Content Strategy</GridLabel>
          </GridItem>
          <GridItem>
            <GridIcon>
              <GraphicDesign />
            </GridIcon>
            <GridLabel>Graphic Design</GridLabel>
          </GridItem>
          <GridItem>
            <GridIcon>
              <CommunityManagement />
            </GridIcon>
            <GridLabel>Community Management</GridLabel>
          </GridItem>
          <GridItem>
            <GridIcon>
              <NewsfeedOptimization />
            </GridIcon>
            <GridLabel>Newsfeed Optimization</GridLabel>
          </GridItem>
          <GridItem>
            <GridIcon>
              <CustomerService />
            </GridIcon>
            <GridLabel>Customer Service</GridLabel>
          </GridItem>
          <GridItem>
            <GridIcon>
              <DataAnalysis />
            </GridIcon>
            <GridLabel>Data Analysis</GridLabel>
          </GridItem>
        </Grid>
        <PrimaryButton as={NavLink} to={`/${Routes.Services}`}>
          Learn More About Our Services
        </PrimaryButton>
      </SectionWrapper>
      <Divider />
    </>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10vw;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: ${({ theme }) => theme.Spacings.StaticSpace07};

  ${minMediaQuery.Medium(css`
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5vw;
    margin-bottom: ${({ theme }) => theme.Spacings.StaticSpace09};
  `)}
`;

const GridItem = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const GridIcon = styled.div`
  width: 50%;
`;

const GridLabel = styled.div`
  margin-top: ${({ theme }) => theme.Spacings.FontSpace01};
  font-weight: 700;
  ${fluidFontSize.StepUp1()};
`;

const Divider = styled.div`
  height: ${({ theme }) => theme.Spacings.StaticSpace05};
  background: ${({ theme }) => theme.Colors.Gold};
`;

export default Services;
