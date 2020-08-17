import React, { FC } from 'react';

import { Contact } from '@components/common';
import { Box, Divider, H1, H2, H3, P } from '@components/core';
import {
  AudiencePersonas,
  CommunityManagement,
  ContentStrategy,
  CustomerService,
  DataAnalysis,
  GraphicDesign,
  NewsfeedOptimization,
  PaidAdvertising,
  SocialStrategy,
} from '@media/svg';
import { styled } from '@styles/index';

export const Services: FC = () => {
  return (
    <>
      <Divider />
      <Box pb={0} variant="section">
        <H1>There&apos;s a lot of ways we can help your brand get noticed.</H1>
        <P>
          And when you are putting your brand on the line, you&apos;ll want the
          experts to handle it. Here&apos;s how we can help.
        </P>
      </Box>
      <Box bg="gray00">
        <Service variant="section">
          <ServiceText>
            <H2>Social Strategy</H2>
            <H3>
              To have informed decision-making, you need the right approach,
              technology and execution.
            </H3>
            <p>
              We will conduct a social media analysis of each of your channels
              and provide a recommendation of where you should focus your
              efforts. With social media, more is not necessarily better and we
              will use the resources that you have to get the biggest bang for
              your buck. This will include taking a deep dive into your social
              media data on each channel and assessing what best practices are
              being used or need to be improved upon.
            </p>
          </ServiceText>
          <ServiceImage>
            <SocialStrategy />
          </ServiceImage>
        </Service>
      </Box>
      <Box>
        <Service variant="section">
          <ServiceImage>
            <AudiencePersonas />
          </ServiceImage>
          <ServiceText>
            <H2>Audience Personas</H2>
            <H3>Know who you’re targeting to meet your goals.</H3>
            <p>
              We will help you identify exactly who you are talking to on each
              channel as well as who you want to be engaging with in the future
              and help you meet those goals. Whether you have a full-blown
              marketing strategy or are just getting started, we’ll work with
              your team to build out a social strategy that aligns with your
              larger marketing goals.
            </p>
          </ServiceText>
        </Service>
      </Box>
      <Divider />
      <Contact />
    </>
  );
};

const Service = styled(Box)`
  display: flex;
  align-items: center;
`;

const ServiceText = styled(Box)`
  flex-basis: 70%;
  margin-right: 10%;
`;

const ServiceImage = styled(Box)`
  flex-basis: 20%;
`;

export default Services;
