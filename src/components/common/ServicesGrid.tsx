import React, { FC } from 'react';

import { NavLink, P } from '@components/core';
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
      'Insert a sentence of text here describing this service and why it matters',
    to: Pages.Services,
  },
  {
    icon: <AudiencePersonas />,
    label: 'Audience Personas',
    description:
      'Insert a sentence of text here describing this service and why it matters',
    to: Pages.Services,
  },
  {
    icon: <PaidAdvertising />,
    label: 'Paid Advertising',
    description:
      'Insert a sentence of text here describing this service and why it matters',
    to: Pages.Services,
  },
  {
    icon: <ContentStrategy />,
    label: 'Content Strategy',
    description:
      'Insert a sentence of text here describing this service and why it matters',
    to: Pages.Services,
  },
  {
    icon: <GraphicDesign />,
    label: 'Graphic Design',
    description:
      'Insert a sentence of text here describing this service and why it matters',
    to: Pages.Services,
  },
  {
    icon: <CommunityManagement />,
    label: 'Community Management',
    description:
      'Insert a sentence of text here describing this service and why it matters',
    to: Pages.Services,
  },
  {
    icon: <NewsfeedOptimization />,
    label: 'Newsfeed Optimization',
    description:
      'Insert a sentence of text here describing this service and why it matters',
    to: Pages.Services,
  },
  {
    icon: <CustomerService />,
    label: 'Customer Service',
    description:
      'Insert a sentence of text here describing this service and why it matters',
    to: Pages.Services,
  },
  {
    icon: <DataAnalysis />,
    label: 'Data Analysis',
    description:
      'Insert a sentence of text here describing this service and why it matters',
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
              <NavLink to={`/${item.to}`}>
                {'Learn more' + String.fromCharCode(62)}
              </NavLink>
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
