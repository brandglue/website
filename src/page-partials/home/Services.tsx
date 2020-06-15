import React, { FC } from 'react';

import { Box } from '@components/boxes/Box';
import { NavLink } from '@components/links/NavLink';
import { H2, P } from '@components/text/Text';
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
import { css, styled } from '@theme/styled';
import { hexToRgb, minMediaQuery } from '@theme/utils';

interface IGridItems {
  icon: React.ReactElement;
  label: string;
  description: string;
  to: Routes;
}

const gridItems: IGridItems[] = [
  {
    icon: <SocialStrategy />,
    label: 'Social Strategy',
    description:
      'Insert a sentence of text here describing this service and why it matters',
    to: Routes.Services,
  },
  {
    icon: <TargetAudiencePersonas />,
    label: 'Target Audience Personas',
    description:
      'Insert a sentence of text here describing this service and why it matters',
    to: Routes.Services,
  },
  {
    icon: <PaidAdvertising />,
    label: 'Paid Advertising',
    description:
      'Insert a sentence of text here describing this service and why it matters',
    to: Routes.Services,
  },
  {
    icon: <ContentStrategy />,
    label: 'Content Strategy',
    description:
      'Insert a sentence of text here describing this service and why it matters',
    to: Routes.Services,
  },
  {
    icon: <GraphicDesign />,
    label: 'Graphic Design',
    description:
      'Insert a sentence of text here describing this service and why it matters',
    to: Routes.Services,
  },
  {
    icon: <CommunityManagement />,
    label: 'Community Management',
    description:
      'Insert a sentence of text here describing this service and why it matters',
    to: Routes.Services,
  },
  {
    icon: <NewsfeedOptimization />,
    label: 'Newsfeed Optimization',
    description:
      'Insert a sentence of text here describing this service and why it matters',
    to: Routes.Services,
  },
  {
    icon: <CustomerService />,
    label: 'Customer Service',
    description:
      'Insert a sentence of text here describing this service and why it matters',
    to: Routes.Services,
  },
  {
    icon: <DataAnalysis />,
    label: 'Data Analysis',
    description:
      'Insert a sentence of text here describing this service and why it matters',
    to: Routes.Services,
  },
];

export const Services: FC = () => {
  return (
    <Box borderBottom="50px solid" borderColor="Blue">
      <Box py={7} variant="column">
        <H2>What we do for you</H2>
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
          {gridItems.map((item) => {
            return (
              <GridItem key={item.label}>
                <GridIcon>{item.icon}</GridIcon>
                <GridText>
                  <GridLabel>{item.label}</GridLabel>
                  <P>{item.description}</P>
                  <NavLink to={`/${item.to}`}>
                    {'Learn more' + String.fromCharCode(62)}
                  </NavLink>
                </GridText>
              </GridItem>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: flex-start;
  margin-bottom: ${({ theme }) => theme.spacings.pixelSpace07};

  ${minMediaQuery.Medium(css`
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: ${({ theme }) => theme.spacings.pixelSpace08};
  `)}
`;

const GridItem = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding: ${theme.space[5]}px;

    ${minMediaQuery.Medium(css`
      min-height: 200px;
      border: 1px solid transparent;
      border-top: 1px solid ${theme.colors.gray00};
      border-left: 1px solid ${theme.colors.gray00};
      &:nth-child(-n + 2) {
        border-top: 1px solid ${theme.colors.gray00};
      }
      &:nth-child(odd) {
        border-left: 1px solid ${theme.colors.gray00};
      }
      &:nth-child(-n + 3) {
        border-top: 1px solid transparent;
      }
      &:first-child,
      &:nth-child(3n + 1) {
        border-left: 1px solid transparent;
      }

      ${NavLink} {
        visibility: hidden;
        opacity: 0;
      }

      &:hover {
        cursor: pointer;
        background-color: ${theme.colors.white};
        border: 1px solid ${theme.colors.blue};
        box-shadow: 0 0 1px 1px rgba(${hexToRgb(theme.colors.blue)}, 0.3),
          0 0 15px 0 rgba(${hexToRgb(theme.colors.gray01)}, 0.2);
        border-radius: 3px;
        transform: scale(1.025);
        transition: border 0.3s ease-in-out, box-shadow 0.3s ease-in-out,
          transform 0.3s ease-in-out;
        z-index: 1;

        ${NavLink} {
          visibility: visible;
          opacity: 1;
          transition: opacity 0.3s ease-in-out;
        }
      }
    `)}
  `}
`;

const GridIcon = styled.div`
  width: 200px;
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
    background: ${({ theme }) => theme.colors.darkBlue};
    height: 1px;
    width: 48px;
    margin-top: ${({ theme }) => theme.space[2]}px;
  }
`;
