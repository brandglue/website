import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React, { FC } from 'react';

import { Box, H2, NavLink, P } from '@components/core';
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
import { TopLevelPages as Pages } from '@utils/routes';

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
          <strong>The world of social media is getting bigger daily, </strong>{' '}
          and so are all the ways you can connect with your audience, teach them
          about your brand, and build loyalty. The issue is obvious: {"Who's"}{' '}
          got time to manage it all? {"That's"} where we come in. With our
          combined expertise, and a good chunk of time spent getting to know
          you, we will help you accomplish your mission in the social sphere.{' '}
          <strong>Here are the ways we do it:</strong>
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
                    <NavLink hasArrow to={`/${Pages.Services}/`}>
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
  grid-template-columns: 1fr;
  grid-auto-rows: 1fr;
  grid-gap: 20px;
  justify-content: center;
  align-items: flex-start;
  margin: ${rhythm(1)} 0;

  ${minMediaQuery.Medium(css`
    grid-template-columns: repeat(2, minmax(0, 1fr));
  `)}

  ${minMediaQuery.Large(css`
    grid-template-columns: repeat(3, 1fr);
  `)}
`;

const GridItem = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column;
    height: 100%;
    padding: 2em;
    border: 1px solid ${({ theme }) => theme.colors.gray02};
    border-radius: 3px;

    ${minMediaQuery.Medium(css`
      flex-flow: row;
      min-height: 200px;

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
  margin-bottom: 1em;

  svg {
    width: 75px;
  }

  ${minMediaQuery.Medium(css`
    margin-bottom: 0;
    margin-right: 1em;
  `)}
`;

const GridText = styled.div`
  display: flex;
  flex-flow: column;
  min-width: 0;
`;

const GridLabel = styled.h5`
  &:after {
    content: '';
    display: block;
    background: ${({ theme }) => theme.colors.darkBlue};
    height: 1px;
    width: 48px;
    margin-top: 1em;
  }
`;
