import { Linkedin, Twitter } from '@styled-icons/boxicons-logos';
import { graphql, PageProps } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import React, { FC, useContext } from 'react';

import { Seo } from '@components/common';
import {
  Anchor,
  Box,
  Divider,
  H1,
  H2,
  Image,
  NavLink,
  P,
} from '@components/core';
import { AboutBrandGlueDesktop, AboutBrandGlueMobile } from '@media/svg';
import { AppState } from '@src/AppState';
import {
  hexToRgb,
  minMediaQuery,
  rhythm,
  scale,
  styled,
  css,
} from '@styles/index';
import { TopLevelPages as Pages } from '@utils/routes';

type Props = PageProps<GatsbyTypes.AboutPageQuery>;

export const About: FC<Props> = ({ data, location }) => {
  const { isLargeDevice } = useContext(AppState);
  const { edges: team } = data.team;
  const { edges: jobs } = data.jobs;

  return (
    <>
      <Seo
        description="About BrandGlue"
        path={location.pathname}
        title="About"
        type="website"
      />
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
            {team.map(({ node: teamMember }) => {
              const { frontmatter } = teamMember;

              return (
                frontmatter?.name && (
                  <TeamMember key={frontmatter.name}>
                    <Image
                      alt={frontmatter.name}
                      fluid={
                        frontmatter.image?.childImageSharp?.fluid as FluidObject
                      }
                    />
                    <Meta>
                      <NameWrapper>
                        <Name>{frontmatter.name}</Name>
                        <Title>{frontmatter.title}</Title>
                      </NameWrapper>
                      {(frontmatter.twitter || frontmatter.linkedin) && (
                        <Social>
                          {frontmatter.twitter && (
                            <SocialAnchor
                              hasArrow={false}
                              href={frontmatter.twitter}
                              rel="noopener noreferrer nofollow"
                              target="_blank"
                              variant="invisible"
                            >
                              <Twitter />
                            </SocialAnchor>
                          )}
                          {frontmatter.linkedin && (
                            <SocialAnchor
                              hasArrow={false}
                              href={frontmatter.linkedin}
                              rel="noopener noreferrer nofollow"
                              target="_blank"
                              variant="invisible"
                            >
                              <Linkedin />
                            </SocialAnchor>
                          )}
                        </Social>
                      )}
                    </Meta>
                    <Bio>
                      <LovesLabel>Loves</LovesLabel>
                      <Box>{frontmatter.loves}</Box>
                      <GoalsLabel>Goals</GoalsLabel>
                      <Box>{frontmatter.goals}</Box>
                    </Bio>
                  </TeamMember>
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
          With remote working and the ﬂexibility to build your day the way you
          work best, BrandGlue is a great place to focus on your talent and love
          for delivering quality experiences to our clients. Check out the
          available positions below and reach out if you’re interested! We’d
          love to meet you.
        </P>
        {jobs.length > 0 ? (
          <>
            <P fontStyle="italic">Current openings:</P>
            <Grid>
              {jobs.map(({ node: job }) => {
                const { frontmatter } = job;

                return (
                  frontmatter?.title && (
                    <Job key={frontmatter.title}>
                      <h4>{frontmatter.title}</h4>
                      {frontmatter?.link && (
                        <NavLink to={`/${Pages.Blog}/${frontmatter.link}`}>
                          Learn more
                        </NavLink>
                      )}
                    </Job>
                  )
                );
              })}
            </Grid>
          </>
        ) : (
          <P fontStyle="italic" mt="6" textAlign="center">
            No current openings. Check back soon!
          </P>
        )}
      </Box>
    </>
  );
};

const BrandGlueStory = styled(Box)`
  padding-top: ${rhythm(1)};

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
  `)}

  ${minMediaQuery.Large(css`
    grid-template-columns: repeat(3, minmax(250px, 380px));
  `)}
`;

const TeamMember = styled(Box)``;

const Meta = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${minMediaQuery.Medium(css`
    flex-direction: row;
    margin-right: auto;
  `)}
`;

const NameWrapper = styled(Box)`
  ${minMediaQuery.Medium(css`
    margin-right: auto;
  `)}
`;

const Name = styled(Box)`
  margin-top: 0.5em;
  font-size: ${scale(0.25).fontSize};
  line-height: ${scale(0.25).lineHeight};
`;

const Title = styled(Box)`
  font-size: ${scale(-0.25).fontSize};
  line-height: ${scale(-0.25).lineHeight};

  ${minMediaQuery.Medium(css`
    margin-bottom: 1em;
  `)}
`;

const Social = styled(Box)`
  margin-bottom: 1em;

  ${minMediaQuery.Medium(css`
    margin-top: 0.5em;
    margin-bottom: 0;
  `)}
`;

const SocialAnchor = styled(Anchor)`
  svg {
    width: 20px;
  }
`;

const Bio = styled(Box)`
  ${({ theme }) => css`
    background: ${theme.colors.lightBlue};
    padding: 1em;
  `}
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

const Job = styled(Box)`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.gray02};
    border-radius: 5px;
    padding: 2em;

    &:hover {
      cursor: pointer;
      border: 1px solid ${theme.colors.blue};
      box-shadow: 0 0 1px 1px rgba(${hexToRgb(theme.colors.blue)}, 0.3),
        0 0 15px 0 rgba(${hexToRgb(theme.colors.gray03)}, 0.2);
      transform: scale(1.025);
      transition: border 0.3s ease-in-out, box-shadow 0.3s ease-in-out,
        transform 0.3s ease-in-out;
      z-index: 1;
    }
  `}
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
            linkedin
            loves
            name
            title
            twitter
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
    jobs: allMdx(
      filter: { frontmatter: { type: { eq: "job" }, isActive: { eq: true } } }
      sort: { order: ASC, fields: frontmatter___title }
    ) {
      edges {
        node {
          frontmatter {
            link
            title
          }
        }
      }
    }
  }
`;
