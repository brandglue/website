import { FluidObject } from 'gatsby-image';
import React, { FC } from 'react';

import { Box, Image, H2, P, NavLink } from '@components/core';
import { TopLevelPages as Pages } from '@constants/routes';
import { AllTeamImagesQuery } from '@generated/graphql';
import { css, hexToRgb, styled } from '@styles/index';

interface IProps {
  data: AllTeamImagesQuery;
}

export const Team: FC<IProps> = ({ data }) => {
  const { edges: team } = data.allMdx;

  return (
    <Container>
      <Box variant="section">
        <Box alignItems="flex-start" m="auto" py={7} variant="flex">
          <Box flex="0 0 60%" mr={7} variant="flexItem">
            <H2>Meet the Team</H2>
            <Box mb={7}>
              <P>
                <strong>
                  We are small in number because we are big on talent.
                </strong>{' '}
                Collectively we have over 30 years of experience with making
                social media, marketing, and design work together to produce
                something incredible. We are proud to be female-owned and value
                diversity and collaboration. These folks are the team that would
                work on your social outlets. Get to know each of us, learn a bit
                more about the family, and if you want to, reach out!
              </P>
            </Box>
          </Box>
          <Box variant="flexItem">
            <Box
              gridGap={4}
              gridTemplateColumns={'repeat(auto-fit, minmax(100px, 1fr))'}
              mb={5}
              variant="grid"
            >
              {team.map(({ node: member }) => {
                const { frontmatter } = member;

                return (
                  frontmatter?.name && (
                    <Image
                      key={frontmatter.name}
                      alt={frontmatter.name}
                      fluid={
                        frontmatter.image?.childImageSharp?.fluid as FluidObject
                      }
                    />
                  )
                );
              })}
            </Box>
            <Box justifyContent="flex-end" variant="flex">
              <NavLink to={`/${Pages.About}`}>Learn More About Us &gt;</NavLink>
            </Box>
          </Box>
        </Box>
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
