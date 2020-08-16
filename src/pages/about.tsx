import { graphql } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import React, { FC } from 'react';

import { Breadcrumbs } from '@components/common';
import { Box, Divider, H1, H2, Image, P } from '@components/core';
import { AboutPageQuery } from '@generated/graphql';
import { AboutBrandGlueDesktop, HiringQuestionMark } from '@media/svg';
import { rhythm, scale, styled, css } from '@styles/index';

interface IProps {
  data: AboutPageQuery;
  pageContext: any;
}

export const About: FC<IProps> = ({ data, pageContext }) => {
  const { edges } = data.team;
  const hero = data.hero?.childImageSharp?.fluid;

  return (
    <>
      <Image alt="page-hero" fluid={hero as FluidObject} />
      <Box variant="section">
        <Breadcrumbs breadcrumb={pageContext.breadcrumb} />
        <H1>We&apos;ve come a long way.</H1>
        <P>
          And it feels like just yesterday that we got started. Here&apos;s a
          bit of our history.
        </P>
        <AboutBrandGlueDesktop />
      </Box>
      <Divider />
      <Box variant="section">
        <H2>So, who makes the team?</H2>
        <Grid>
          {edges.map(({ node: teamMember }) => {
            const { frontmatter } = teamMember;

            return (
              frontmatter?.name && (
                <GridItem key={frontmatter.name}>
                  <Image
                    alt={frontmatter.name}
                    fluid={
                      frontmatter.image?.childImageSharp?.fluid as FluidObject
                    }
                  />
                  <Name>{frontmatter.name}</Name>
                  <Title>{frontmatter.title}</Title>
                  <Bio>
                    <LovesLabel>Loves</LovesLabel>
                    <Box>{frontmatter.loves}</Box>
                    <GoalsLabel>Goals</GoalsLabel>
                    <Box>{frontmatter.goals}</Box>
                  </Bio>
                </GridItem>
              )
            );
          })}
          <GridItem key="hiring">
            <HiringQuestionMark />
            <Name>You?</Name>
            <Title>I mean... We are always looking for talent.</Title>
            <Bio>
              <LovesLabel>Loves</LovesLabel>
              <Box>
                Staying up-to-date with technology, social media, and impressing
                people with their killer talents.
              </Box>
              <GoalsLabel>Goals</GoalsLabel>
              <Box>
                A fun challenge, to constantly learn, and be surrounded by an
                energetic team.
              </Box>
            </Bio>
          </GridItem>
        </Grid>
      </Box>
      <Divider />
      <Box variant="section">
        <H2>Join the team. It&apos;s a good one.</H2>
        <P>
          With remote working and the ﬂexible to build your day the way you work
          best, BrandGlue is a great place to focus on your talent and love for
          delivering quality experiences to our clients. Check out the available
          positions below and reach out if you’re interested! We’d love to meet
          you.
        </P>
        <P fontStyle="italic" mt="6" textAlign="center">
          No current openings.
        </P>
      </Box>
    </>
  );
};

const Grid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 1fr;
  grid-gap: 50px;
  margin-bottom: ${rhythm(1)};
`;

const GridItem = styled(Box)``;

const Bio = styled(Box)`
  ${({ theme }) => css`
    background: ${theme.colors.lightBlue};
    padding: 1em;
  `}
`;

const Name = styled(Box)`
  margin-top: 0.5em;
  font-size: ${scale(0.25).fontSize};
  line-height: ${scale(0.25).lineHeight};
`;

const Title = styled(Box)`
  color: ${({ theme }) => theme.colors.blue};
  margin-bottom: 1em;
  font-size: ${scale(-0.25).fontSize};
  line-height: ${scale(-0.25).lineHeight};
`;

const LovesLabel = styled(Box)`
  color: ${({ theme }) => theme.colors.blue};
  text-transform: uppercase;
`;

const GoalsLabel = styled(Box)`
  color: ${({ theme }) => theme.colors.blue};
  text-transform: uppercase;
  margin-top: 1em;
`;

export default About;

export const aboutPage = graphql`
  query AboutPage {
    hero: file(
      sourceInstanceName: { eq: "media" }
      relativePath: { eq: "images/hero-about.jpg" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    team: allMdx(
      filter: { frontmatter: { type: { eq: "team" } } }
      sort: { order: ASC, fields: frontmatter___order }
    ) {
      edges {
        node {
          frontmatter {
            goals
            loves
            name
            title
            image {
              name
              childImageSharp {
                fluid(maxWidth: 1100) {
                  ...GatsbyImageSharpFluid_withWebp
                  ...GatsbyImageSharpFluidLimitPresentationSize
                }
              }
            }
          }
        }
      }
    }
  }
`;
