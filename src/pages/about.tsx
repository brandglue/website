import { graphql } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import React, { FC, useContext } from 'react';

import { Box, Divider, H1, H2, Image, P } from '@components/core';
import { AboutBrandGlueDesktop, AboutBrandGlueMobile } from '@media/svg';
import { AppState } from '@src/AppState';
import { minMediaQuery, rhythm, scale, styled, css } from '@styles/index';

interface IProps {
  data: GatsbyTypes.AboutPageQuery;
}

export const About: FC<IProps> = ({ data }) => {
  const { isLargeDevice } = useContext(AppState);
  const { edges } = data.team;

  return (
    <>
      <Divider />
      <Box variant="section">
        <H1>We&apos;ve come a long way.</H1>
        <P>
          And it feels like just yesterday that we got started. Here&apos;s a
          bit of our history.
        </P>
        <BrandGlueStory>
          {isLargeDevice ? <AboutBrandGlueDesktop /> : <AboutBrandGlueMobile />}
        </BrandGlueStory>
      </Box>
      <Team>
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
          </Grid>
        </Box>
      </Team>
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

const BrandGlueStory = styled(Box)`
  svg {
    width: 100%;
  }
`;

const Team = styled(Box)`
  background: ${({ theme }) => theme.colors.gray00};
`;

const Grid = styled(Box)`
  display: grid;
  grid-template-columns: minmax(250px, 380px);
  grid-gap: 60px;
  margin-bottom: ${rhythm(1)};

  ${minMediaQuery.Small(css`
    grid-template-columns: 1fr 1fr;
  `)}

  ${minMediaQuery.Medium(css`
    grid-template-columns: repeat(2, minmax(250px, 380px));
    grid-auto-rows: 1fr;
  `)}

  ${minMediaQuery.Large(css`
    grid-template-columns: repeat(3, minmax(250px, 380px));
  `)}
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
    team: allMdx(
      filter: { frontmatter: { type: { eq: "team" }, name: { ne: "You?" } } }
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
    hiring: file(
      sourceInstanceName: { eq: "media" }
      relativePath: { eq: "images/hiring.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1100) {
          ...GatsbyImageSharpFluid_withWebp
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  }
`;
