import React, { FC } from 'react';
import { Link } from '@reach/router';

import ButtonCurved from '@components/ButtonCurved';
import { Routes } from '@constants/routes';
import Caret from '@icons/Caret';
import CommunityManagement from '@icons/CommunityManagement';
import ContentStrategy from '@icons/ContentStrategy';
import CustomerService from '@icons/CustomerService';
import DataAnalysis from '@icons/DataAnalysis';
import GraphicDesign from '@icons/GraphicDesign';
import NewsfeedOptimization from '@icons/NewsfeedOptimization';
import PaidAdvertising from '@icons/PaidAdvertising';
import SocialStrategy from '@icons/SocialStrategy';
import TargetAudiencePersonas from '@icons/TargetAudiencePersonas';
import SectionTitle from '@components/SectionTitle';
import styled from '@theme/styled';
import { fluidFontSize } from '@theme/utils';

export const Services: FC = () => (
  <>
    <Wrapper>
      <SectionTitle>
        What can we do for you?
        <br /> Well, a lot actually.
      </SectionTitle>
      <ServicesText>
        <strong>The world of Social Media is getting bigger daily.</strong> And
        with this, so are all the ways you can connect with your audience, teach
        them about your brand, and build loyalty. The obvious issue here:{' '}
        {"Who's"} got time to manage it all? {"That's"} where we come in. With
        our combined expertise, and a good chunk of time spent getting to know
        you, we will help you accomplish your mission in the social sphere.{' '}
        <strong>Here are the ways we do it:</strong>
      </ServicesText>
      <Grid>
        <GridItem>
          <SocialStrategy />
          <GridLabel>Social Strategy</GridLabel>
        </GridItem>
        <GridItem>
          <TargetAudiencePersonas />
          <GridLabel>Target Audience Personas</GridLabel>
        </GridItem>
        <GridItem>
          <PaidAdvertising />
          <GridLabel>Paid Advertising</GridLabel>
        </GridItem>
        <GridItem>
          <ContentStrategy />
          <GridLabel>Content Strategy</GridLabel>
        </GridItem>
        <GridItem>
          <GraphicDesign />
          <GridLabel>Graphic Design</GridLabel>
        </GridItem>
        <GridItem>
          <CommunityManagement />
          <GridLabel>Community Management</GridLabel>
        </GridItem>
        <GridItem>
          <NewsfeedOptimization />
          <GridLabel>Newsfeed Optimization</GridLabel>
        </GridItem>
        <GridItem>
          <CustomerService />
          <GridLabel>Customer Service</GridLabel>
        </GridItem>
        <GridItem>
          <DataAnalysis />
          <GridLabel>Data Analysis</GridLabel>
        </GridItem>
      </Grid>
      <CtaButton as={Link} to={`/${Routes.Services}`}>
        Learn More About Our Services <StyledCaret />
      </CtaButton>
    </Wrapper>
    <Divider />
  </>
);

const Wrapper = styled.div`
  position: relative;
  padding: ${({ theme }) =>
    `${theme.Spacings.StaticSpace10} ${theme.Spacings.Page} ${
      theme.Spacings.StaticSpace19
    }`};
`;

const ServicesText = styled.p`
  margin-bottom: ${({ theme }) => theme.Spacings.StaticSpace08};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 1fr);
  grid-gap: 3vw;
  justify-content: center;
  align-items: flex-start;
`;

const GridItem = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const GridLabel = styled.div`
  margin-top: ${({ theme }) => theme.Spacings.FontSpace01};
  font-weight: 700;
  ${fluidFontSize.StepUp1()};
`;

const CtaButton = styled(ButtonCurved)`
  position: absolute;
  bottom: 0;
  right: ${({ theme }) => theme.Spacings.DynamicSpace09};
  color: ${({ theme }) => theme.Colors.DarkBlue};
`;

const StyledCaret = styled(Caret)`
  transform: rotate(90deg);
`;

const Divider = styled.div`
  height: ${({ theme }) => theme.Spacings.StaticSpace05};
  background: ${({ theme }) => theme.Colors.Gold};
`;

export default Services;
