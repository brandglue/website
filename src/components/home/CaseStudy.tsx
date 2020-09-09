import { graphql, useStaticQuery } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import React, { FC } from 'react';

import { Box, Image, P, H5, NavLink } from '@components/core';
import { css, minMediaQuery, rhythm, styled } from '@styles/index';
import { TopLevelPages as Pages } from '@utils/routes';

export const CaseStudy: FC = () => {
  const whiteHatLogo = useStaticQuery<
    GatsbyTypes.FeaturedCaseStudyQuery
  >(graphql`
    query FeaturedCaseStudy {
      file(
        sourceInstanceName: { eq: "media" }
        relativePath: { eq: "images/logo-whitehat-security-white.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1100) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `);

  return (
    <Box bg="darkBlue">
      <Container variant="section">
        <Logo>
          {whiteHatLogo?.file?.childImageSharp?.fluid && (
            <Image
              alt="whitehat-security"
              fluid={whiteHatLogo?.file?.childImageSharp?.fluid as FluidObject}
            />
          )}
        </Logo>
        <Text>
          <CaseStudyTitle>Developing a wholistic strategy</CaseStudyTitle>
          <P color="white" mb="0">
            {`How we boosted brand awareness \n and organic engagement for WhiteHat Security.`}
            <CaseStudyLink
              hasArrow
              to={`/${Pages.CaseStudies}/whitehat-security`}
            >
              See Case Study
            </CaseStudyLink>
          </P>
        </Text>
      </Container>
    </Box>
  );
};

const Container = styled(Box)`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;

  ${minMediaQuery.Medium(css`
    flex-flow: row;
    align-items: center;
  `)};
`;

const Logo = styled(Box)`
  ${({ theme }) => css`
    flex: auto;
    max-width: 200px;
    margin-bottom: 1em;

    ${minMediaQuery.Medium(css`
      flex: 0 0 200px;
      border-bottom: none;
      border-right: 1px solid ${theme.colors.white};
      padding: 20px 20px 20px 0;
      margin: 20px 20px 20px 0;
    `)}
  `}
`;

const Text = styled(Box)`
  flex: auto;

  ${minMediaQuery.Medium(css`
    flex: 0 0 500px;
  `)};
`;

const CaseStudyTitle = styled(H5)`
  ${({ theme }) => css`
    color: ${theme.colors.gold};
    text-transform: uppercase;
    margin-bottom: ${rhythm(0.25)};
  `};
`;

const CaseStudyLink = styled(NavLink)`
  ${({ theme }) => css`
    color: ${theme.colors.gold};
    margin-left: 0.6em;
  `};
`;

export default CaseStudy;
