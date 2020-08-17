import { CaretRight } from '@styled-icons/boxicons-regular';
import React, { FC } from 'react';

import { Box, NavLink, P } from '@components/core';
import { TopLevelPages as Pages } from '@constants/routes';
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
import { css, hexToRgb, minMediaQuery, rhythm, styled } from '@styles/index';

interface IGridItems {
  icon: React.ReactElement;
  label: string;
  description: string;
  to: Pages;
}

const gridItems: IGridItems[] = [
  {
    icon: <SocialStrategy />,
    label: 'Social Strategy',
    description:
      'Understand where (and how) to focus your efforts for the most ROI.',
    to: Pages.Services,
  },
  {
    icon: <AudiencePersonas />,
    label: 'Audience Personas',
    description: 'Know who you’re targeting to meet your goals.',
    to: Pages.Services,
  },
  {
    icon: <PaidAdvertising />,
    label: 'Paid Advertising',
    description: 'Put the right ads in front of the right people.',
    to: Pages.Services,
  },
  {
    icon: <ContentStrategy />,
    label: 'Content Strategy',
    description: 'Create more buzz with key thought leadership pieces.',
    to: Pages.Services,
  },
  {
    icon: <GraphicDesign />,
    label: 'Graphic Design',
    description: 'Kick your ho-hum brand assets to the curb.',
    to: Pages.Services,
  },
  {
    icon: <CommunityManagement />,
    label: 'Community Management',
    description: 'Never skip a beat with social trends and best practices.',
    to: Pages.Services,
  },
  {
    icon: <NewsfeedOptimization />,
    label: 'Newsfeed Optimization',
    description: 'Show your brand to the right people.',
    to: Pages.Services,
  },
  {
    icon: <CustomerService />,
    label: 'Customer Service',
    description: 'Give your customers the experience they deserve.',
    to: Pages.Services,
  },
  {
    icon: <DataAnalysis />,
    label: 'Data Analysis',
    description: 'Make strategic decisions that are backed by data.',
    to: Pages.Services,
  },
];

export const ServicesGrid: FC = () => {
  return (
    <Grid>
      {gridItems.map((item) => {
        return (
          <GridItem key={item.label}>
            <GridIcon>{item.icon}</GridIcon>
            <GridText>
              <GridLabel>{item.label}</GridLabel>
              <P>{item.description}</P>
              <Box flexGrow={0}>
                <NavLink to={`/${item.to}`}>
                  Learn more <Arrow />
                </NavLink>
              </Box>
            </GridText>
          </GridItem>
        );
      })}
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: flex-start;
  margin-bottom: ${rhythm(1)};

  ${minMediaQuery.Medium(css`
    grid-template-columns: repeat(3, 1fr);
  `)}
`;

const GridItem = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding: ${theme.space[5]}px;

    ${minMediaQuery.Medium(css`
      min-height: 200px;
      border: 1px solid transparent;
      border-top: 1px solid ${theme.colors.gray02};
      border-left: 1px solid ${theme.colors.gray02};
      &:nth-child(-n + 2) {
        border-top: 1px solid ${theme.colors.gray02};
      }
      &:nth-child(odd) {
        border-left: 1px solid ${theme.colors.gray02};
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
          0 0 15px 0 rgba(${hexToRgb(theme.colors.gray03)}, 0.2);
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

const Arrow = styled(CaretRight)`
  width: 20px;
`;
