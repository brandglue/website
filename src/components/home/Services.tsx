import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React, { FC } from 'react';

import { Box, H2, NavLink, P } from '@components/core';
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

interface IProps {
  data: GatsbyTypes.HomePageQuery;
}

export const Services: FC<IProps> = ({ data }) => {
  const { edges } = data.allServices;

  return (
    <MDXProvider
      components={{
        AudiencePersonas,
        CommunityManagement,
        ContentStrategy,
        CustomerService,
        DataAnalysis,
        GraphicDesign,
        NewsfeedOptimization,
        PaidAdvertising,
        SocialStrategy,
      }}
    >
      <Box variant="section">
        <H2>What we do for you</H2>
        <P>
          <strong>The world of Social Media is getting bigger daily.</strong>{' '}
          And with this, so are all the ways you can connect with your audience,
          teach them about your brand, and build loyalty. The obvious issue
          here: {"Who's"} got time to manage it all? {"That's"} where we come
          in. With our combined expertise, and a good chunk of time spent
          getting to know you, we will help you accomplish your mission in the
          social sphere. <strong>Here are the ways we do it:</strong>
        </P>
        <Grid>
          {edges.map(({ node: service }) => {
            const { frontmatter } = service;
            return (
              <GridItem key={frontmatter?.title}>
                <GridIcon>
                  {frontmatter?.icon && (
                    <MDXRenderer>{frontmatter.icon}</MDXRenderer>
                  )}
                </GridIcon>
                <GridText>
                  <GridLabel>{frontmatter?.title}</GridLabel>
                  <P>{frontmatter?.shortDescription}</P>
                  <Box flexGrow={0}>
                    <NavLink hasArrow to={`/${Pages.Services}`}>
                      Learn more
                    </NavLink>
                  </Box>
                </GridText>
              </GridItem>
            );
          })}
        </Grid>
      </Box>
    </MDXProvider>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  justify-content: center;
  align-items: flex-start;
  margin: ${rhythm(1)} 0;

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

const GridLabel = styled.h5`
  &:after {
    content: '';
    display: block;
    background: ${({ theme }) => theme.colors.darkBlue};
    height: 1px;
    width: 48px;
    margin-top: ${({ theme }) => theme.space[2]}px;
  }
`;
