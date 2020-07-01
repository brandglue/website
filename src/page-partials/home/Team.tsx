import React, { FC } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { Box } from '@components/boxes/Box';
import { Image } from '@components/images/Image';
import { H2, P } from '@components/text/Text';
import { NavLink } from '@components/links/NavLink';
import { Routes } from '@constants/routes';
import { css, styled } from '@theme/styled';
import { hexToRgb } from '@theme/utils';

export const Team: FC = () => {
  const images = useStaticQuery<GatsbyTypes.TeamImagesQuery>(graphql`
    query TeamImages {
      joey: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "team-joey-ponce.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hannah: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "team-hannah-lushin.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      michelle: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "team-michelle-heathers.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sharon: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "team-sharon-bell.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      zach: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "team-zach-welch.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

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
              <Image
                alt="michelle-heathers"
                fluid={images?.michelle?.childImageSharp?.fluid}
              />
              <Image
                alt="zach-welch"
                fluid={images?.zach?.childImageSharp?.fluid}
              />
              <Image
                alt="joey-ponce"
                fluid={images?.joey?.childImageSharp?.fluid}
              />
              <Image
                alt="hannah-lushin"
                fluid={images?.hannah?.childImageSharp?.fluid}
              />
              <Image
                alt="sharon bell"
                fluid={images?.sharon?.childImageSharp?.fluid}
              />
            </Box>
            <Box justifyContent="flex-end" variant="flex">
              <NavLink to={`/${Routes.About}`}>
                Learn More About Us &gt;
              </NavLink>
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
    padding: ${theme.space[7]}px 0;
    background: linear-gradient(
      180deg,
      rgba(${hexToRgb(theme.colors.white)}, 1) 0%,
      rgba(${hexToRgb(theme.colors.gray02)}, 1) 100%
    );
  `}
`;
