import { CaretRight } from '@styled-icons/boxicons-regular';
import { graphql, useStaticQuery } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import React, { FC } from 'react';

import { Box, Image, P, H5, NavLink } from '@components/core';
import { TopLevelPages as Pages } from '@constants/routes';
import { FeaturedCaseStudyQuery } from '@generated/graphql';
import { css, minMediaQuery, styled } from '@styles/index';

export const CaseStudy: FC = () => {
  const intuitLogo = useStaticQuery<FeaturedCaseStudyQuery>(graphql`
    query FeaturedCaseStudy {
      file(
        sourceInstanceName: { eq: "media" }
        relativePath: { eq: "images/logo-intuit-no-bg.png" }
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
        <Logo variant="flexItem">
          {intuitLogo?.file?.childImageSharp?.fluid && (
            <Image
              alt="intuit-accountants"
              fluid={intuitLogo?.file?.childImageSharp?.fluid as FluidObject}
            />
          )}
        </Logo>
        <Box flex="0 0 500px" variant="flexItem">
          <CaseStudyTitle>Growing Twitter the Right Way</CaseStudyTitle>
          <P color="white" mb="0">
            {`See How We Helped Intuit Accountants \n Get The Right Audience at the Right Price`}
            <CaseStudyLink to={`/${Pages.CaseStudies}/intuit-accountants`}>
              See Case Study <Arrow />
            </CaseStudyLink>
          </P>
        </Box>
      </Container>
    </Box>
  );
};

const Container = styled(Box)`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;

  ${minMediaQuery.Medium(css`
    flex-flow: row;
  `)};
`;

const Logo = styled(Box)`
  ${({ theme }) => css`
    flex: 0 0 200px;
    border-bottom: 1px solid ${theme.colors.white};

    ${minMediaQuery.Medium(css`
      border-bottom: none;
      border-right: 1px solid ${theme.colors.white};
      padding: 20px 20px 20px 0;
      margin: 20px 20px 20px 0;
    `)}
  `}
`;

const CaseStudyTitle = styled(H5)`
  ${({ theme }) => css`
    color: ${theme.colors.gold};
    text-transform: uppercase;
  `};
`;

const CaseStudyLink = styled(NavLink)`
  ${({ theme }) => css`
    color: ${theme.colors.gold};
    margin-left: 0.4em;
  `};
`;

const Arrow = styled(CaretRight)`
  width: 20px;
`;

export default CaseStudy;
