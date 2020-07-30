import React, { FC } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import { kebabCase } from 'lodash-es';

import { Hero } from '@components/common';
import { Box, Divider, H1, H2, Image, P } from '@components/core';
import { HiringImageQuery } from '@generated/graphql';
import { useTeamImages } from '@hooks/useTeamImages';
import { AboutBrandGlueDesktop, HiringQuestionMark } from '@images/svg';
import { rhythm, scale } from '@theme/globalStyles';
import { styled, css } from '@theme/styled';

interface ITeamGridItems {
  image: FluidObject;
  name: string;
  title: string;
  loves: string;
  goals: string;
}

export const About: FC = () => {
  const teamImages = useTeamImages();
  const hiringImage = useStaticQuery<HiringImageQuery>(graphql`
    query HiringImage {
      file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "hiring-you.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const teamGridItems: ITeamGridItems[] = [
    {
      image: teamImages?.michelle?.childImageSharp?.fluid as FluidObject,
      name: 'Michelle Heathers',
      title: 'VP of Community Management',
      loves: 'Jesus, family, and amazing food.',
      goals:
        'Visit each continent, see a great white shark, and learn how to ski.',
    },
    {
      image: teamImages?.zach?.childImageSharp?.fluid as FluidObject,
      name: 'Zach Welch',
      title: 'VP of Client Services',
      loves: 'My wife, my cat Cletus, and high-end whiskey.',
      goals:
        'Taste Pappy Van Winkle 23, get certiﬁed to dive, golf Pebble Beach.',
    },
    {
      image: teamImages?.joey?.childImageSharp?.fluid as FluidObject,
      name: 'Joey Ponce',
      title: 'Creative Director',
      loves: 'My partner, Brian, my three chickens, and learning new hobbies.',
      goals:
        'Open a landscaping company, animate a cartoon, and build a cabin in the woods with my own farm.',
    },
    {
      image: teamImages?.hannah?.childImageSharp?.fluid as FluidObject,
      name: 'Hannah Lushin',
      title: 'Account Director',
      loves: 'Her family, a nice glass of wine & a good book.',
      goals:
        'Run a marathon, write a novel, be more intentional with her time.',
    },
    {
      image: hiringImage?.file?.childImageSharp?.fluid as FluidObject,
      name: 'You?',
      title: 'I mean... We are always looking for talent.',
      loves:
        'Staying up-to-date with technology, social media, and impressing people with their killer talents.',
      goals:
        'A fun challenge, to constantly learn, and be surrounded by an energetic team.',
    },
  ];

  return (
    <>
      <Hero />
      <Box variant="section">
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
          {teamGridItems.map((item) => {
            return (
              <div key={item.name}>
                <Image alt={kebabCase(item.title)} fluid={item.image} />
                <Name style={{ ...scale(0.25) }}>{item.name}</Name>
                <Title style={{ ...scale(-0.25) }}>{item.title}</Title>
                <Bio>
                  <LovesLabel>Loves</LovesLabel>
                  <Box>{item.loves}</Box>
                  <GoalsLabel>Goals</GoalsLabel>
                  <Box>{item.goals}</Box>
                </Bio>
              </div>
            );
          })}
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
  grid-gap: ${({ theme }) => theme.spacings.pixelSpace10};
  margin-bottom: ${rhythm(1)};
`;

const Bio = styled(Box)`
  ${({ theme }) => css`
    background: ${theme.colors.lightBlue};
    padding: 1em;
  `}
`;

const Name = styled(Box)`
  margin-top: 0.5em;
`;

const Title = styled(Box)`
  color: ${({ theme }) => theme.colors.blue};
  margin-bottom: 1em;
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
