import { FluidObject } from 'gatsby-image';
import React, { FC } from 'react';

import { Box, Image, H2, P, NavLink } from '@components/core';
import { css, hexToRgb, minMediaQuery, styled } from '@styles/index';
import { TopLevelPages as Pages } from '@utils/routes';

interface IProps {
  data: GatsbyTypes.HomePageQuery;
}

export const Team: FC<IProps> = ({ data }) => {
  const { edges } = data.allTeamImages;

  return (
    <Container>
      <Box variant="section">
        <Wrapper>
          <Text>
            <H2>Meet the Team</H2>
            <Box mb={7}>
              <P>
                <strong>
                  We are small in number because we are big on talent.
                </strong>{' '}
                Collectively we have over 30 years of experience with making
                social media, marketing, and design work together to produce
                something incredible. We are proud to be female-owned and value
                diversity and collaboration. We {"don't"} sign clients and then
                outsource the work - we are the team that would do the work for
                your business.. Get to know each of us, learn a bit more about
                the family, and if you want to, reach out!
              </P>
              <NavLink hasArrow to={`/${Pages.About}/`}>
                Learn More About Us
              </NavLink>
            </Box>
          </Text>
          <Photos>
            {edges.map(({ node: teamMember }) => {
              const { frontmatter } = teamMember;

              return (
                frontmatter?.name && (
                  <Image
                    key={frontmatter.name}
                    alt={frontmatter.name}
                    css={{ borderRadius: '5px' }}
                    fluid={
                      frontmatter.image?.childImageSharp?.fluid as FluidObject
                    }
                  />
                )
              );
            })}
          </Photos>
        </Wrapper>
      </Box>
    </Container>
  );
};

const Container = styled(Box)`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-start;
    margin: auto;
    background: linear-gradient(
      180deg,
      rgba(${hexToRgb(theme.colors.white)}, 1) 0%,
      rgba(${hexToRgb(theme.colors.gray02)}, 1) 100%
    );
  `}
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  margin: auto;

  ${minMediaQuery.Medium(css`
    flex-flow: row;
  `)}
`;

const Text = styled(Box)`
  ${minMediaQuery.Medium(css`
    flex: 0 0 50%;
    margin-right: 10%;
  `)}
`;

const Photos = styled(Box)`
  flex: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 20px;
  margin-bottom: 20px;
  width: 100%;

  ${minMediaQuery.Medium(css`
    width: auto;
  `)}
`;
