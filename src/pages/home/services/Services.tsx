import React, { FC } from 'react';

import Box from '@components/containers/Box';
import Column from '@components/containers/Column';
import NavTextLink from '@components/links/NavTextLink';
import { P } from '@components/text/Text';
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
import SectionTitle from '@components/sections/SectionTitle';
import styled, { css } from '@theme/styled';
import { hexToRgb, minMediaQuery } from '@theme/utils';

export const Services: FC = () => {
  return (
    <Box borderBottom="50px solid" borderColor="Blue">
      <Column py={7}>
        <SectionTitle>What we offer you</SectionTitle>
        <P mb={6}>
          <strong>The world of Social Media is getting bigger daily.</strong>{' '}
          And with this, so are all the ways you can connect with your audience,
          teach them about your brand, and build loyalty. The obvious issue
          here: {"Who's"} got time to manage it all? {"That's"} where we come
          in. With our combined expertise, and a good chunk of time spent
          getting to know you, we will help you accomplish your mission in the
          social sphere. <strong>Here are the ways we do it:</strong>
        </P>
        <Grid>
          <GridItem>
            <GridIcon>
              <SocialStrategy />
            </GridIcon>
            <GridText>
              <GridLabel>Social Strategy</GridLabel>
              <P>
                Insert a sentence of text here describing this service and why
                it matters
              </P>
              <NavTextLink to={`/${Routes.Services}`}>
                Learn more &gt;
              </NavTextLink>
            </GridText>
          </GridItem>
          <GridItem>
            <GridIcon>
              <TargetAudiencePersonas />
            </GridIcon>
            <GridText>
              <GridLabel>Target Audience Personas</GridLabel>
              <P>
                Insert a sentence of text here describing this service and why
                it matters
              </P>
              <NavTextLink to={`/${Routes.Services}`}>
                Learn more &gt;
              </NavTextLink>
            </GridText>
          </GridItem>
          <GridItem>
            <GridIcon>
              <PaidAdvertising />
            </GridIcon>
            <GridText>
              <GridLabel>Paid Advertising</GridLabel>
              <P>
                Insert a sentence of text here describing this service and why
                it matters
              </P>
              <NavTextLink to={`/${Routes.Services}`}>
                Learn more &gt;
              </NavTextLink>
            </GridText>
          </GridItem>
          <GridItem>
            <GridIcon>
              <ContentStrategy />
            </GridIcon>
            <GridText>
              <GridLabel>Content Strategy</GridLabel>
              <P>
                Insert a sentence of text here describing this service and why
                it matters
              </P>
              <NavTextLink to={`/${Routes.Services}`}>
                Learn more &gt;
              </NavTextLink>
            </GridText>
          </GridItem>
          <GridItem>
            <GridIcon>
              <GraphicDesign />
            </GridIcon>
            <GridText>
              <GridLabel>Graphic Design</GridLabel>
              <P>
                Insert a sentence of text here describing this service and why
                it matters
              </P>
              <NavTextLink to={`/${Routes.Services}`}>
                Learn more &gt;
              </NavTextLink>
            </GridText>
          </GridItem>
          <GridItem>
            <GridIcon>
              <CommunityManagement />
            </GridIcon>
            <GridText>
              <GridLabel>Community Management</GridLabel>
              <P>
                Insert a sentence of text here describing this service and why
                it matters
              </P>
              <NavTextLink to={`/${Routes.Services}`}>
                Learn more &gt;
              </NavTextLink>
            </GridText>
          </GridItem>
          <GridItem>
            <GridIcon>
              <NewsfeedOptimization />
            </GridIcon>
            <GridText>
              <GridLabel>Newsfeed Optimization</GridLabel>
              <P>
                Insert a sentence of text here describing this service and why
                it matters
              </P>
              <NavTextLink to={`/${Routes.Services}`}>
                Learn more &gt;
              </NavTextLink>
            </GridText>
          </GridItem>
          <GridItem>
            <GridIcon>
              <CustomerService />
            </GridIcon>
            <GridText>
              <GridLabel>Customer Service</GridLabel>
              <P>
                Insert a sentence of text here describing this service and why
                it matters
              </P>
              <NavTextLink to={`/${Routes.Services}`}>
                Learn more &gt;
              </NavTextLink>
            </GridText>
          </GridItem>
          <GridItem>
            <GridIcon>
              <DataAnalysis />
            </GridIcon>
            <GridText>
              <GridLabel>Data Analysis</GridLabel>
              <P>
                Insert a sentence of text here describing this service and why
                it matters
              </P>
              <NavTextLink to={`/${Routes.Services}`}>
                Learn more &gt;
              </NavTextLink>
            </GridText>
          </GridItem>
        </Grid>
      </Column>
    </Box>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: flex-start;
  margin-bottom: ${({ theme }) => theme.Spacings.StaticSpace07};

  ${minMediaQuery.Medium(css`
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: ${({ theme }) => theme.Spacings.StaticSpace09};
  `)}
`;

const GridItem = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.space[6]}px;

  ${minMediaQuery.Medium(css`
    border: 1px solid transparent;
    border-top: 1px solid ${({ theme }) => theme.Colors.Gray00};
    border-left: 1px solid ${({ theme }) => theme.Colors.Gray00};
    &:nth-child(-n + 2) {
      border-top: 1px solid ${({ theme }) => theme.Colors.Gray00};
    }
    &:nth-child(odd) {
      border-left: 1px solid ${({ theme }) => theme.Colors.Gray00};
    }
    &:nth-child(-n + 3) {
      border-top: 1px solid transparent;
    }
    &:first-child,
    &:nth-child(3n + 1) {
      border-left: 1px solid transparent;
    }

    ${NavTextLink} {
      visibility: hidden;
      opacity: 0;
    }

    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.Colors.White};
      border: 1px solid ${({ theme }) => theme.Colors.Blue};
      box-shadow: 0 0 1px 1px
          rgba(${({ theme }) => hexToRgb(theme.Colors.Blue)}, 0.3),
        0 0 15px 0 rgba(${({ theme }) => hexToRgb(theme.Colors.Gray01)}, 0.2);
      border-radius: 3px;
      transform: scale(1.025);
      transition: border 0.3s ease-in-out, box-shadow 0.3s ease-in-out,
        transform 0.3s ease-in-out;
      z-index: 1;

      ${NavTextLink} {
        visibility: visible;
        opacity: 1;
        transition: opacity 0.3s ease-in-out;
      }
    }
  `)}
`;

const GridIcon = styled.div`
  width: 100px;
  margin-right: ${({ theme }) => theme.space[4]}px;
`;

const GridText = styled.div`
  display: flex;
  flex-flow: column;
`;

const GridLabel = styled(P)`
  &:after {
    content: '';
    display: block;
    background: ${({ theme }) => theme.Colors.DarkBlue};
    height: 1px;
    width: 48px;
    margin-top: ${({ theme }) => theme.space[2]}px;
  }
`;

export default Services;
