import React, { FC } from 'react';
import { FluidObject } from 'gatsby-image';

import { Box, Image, H2, P, NavLink } from '@components/core';
import { TopLevelPages as Pages } from '@constants/routes';
import { useTeamImages } from '@hooks/useTeamImages';
import { css, styled } from '@theme/styled';
import { hexToRgb } from '@theme/utils';

export const Team: FC = () => {
  const teamImages = useTeamImages();

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
              {teamImages?.michelle?.childImageSharp?.fluid && (
                <Image
                  alt="michelle-heathers"
                  fluid={
                    teamImages?.michelle?.childImageSharp?.fluid as FluidObject
                  }
                />
              )}
              {teamImages?.zach?.childImageSharp?.fluid && (
                <Image
                  alt="zach-welch"
                  fluid={
                    teamImages?.zach?.childImageSharp?.fluid as FluidObject
                  }
                />
              )}
              {teamImages?.joey?.childImageSharp?.fluid && (
                <Image
                  alt="joey-ponce"
                  fluid={
                    teamImages?.joey?.childImageSharp?.fluid as FluidObject
                  }
                />
              )}
              {teamImages?.hannah?.childImageSharp?.fluid && (
                <Image
                  alt="hannah-lushin"
                  fluid={
                    teamImages?.hannah?.childImageSharp?.fluid as FluidObject
                  }
                />
              )}
              {teamImages?.sharon?.childImageSharp?.fluid && (
                <Image
                  alt="sharon bell"
                  fluid={
                    teamImages?.sharon?.childImageSharp?.fluid as FluidObject
                  }
                />
              )}
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
