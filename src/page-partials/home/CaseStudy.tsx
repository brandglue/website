import React, { FC } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { Box } from '@components/boxes/Box';
import { Image } from '@components/images/Image';
import { P, H5 } from '@components/text/Text';

import { Routes } from '@constants/routes';
import { css, styled } from '@theme/styled';
import { minMediaQuery } from '@theme/utils';
import { NavLink } from '@components/links/NavLink';

export const CaseStudy: FC = () => {
  const intuitLogo = useStaticQuery<GatsbyTypes.FeaturedCaseStudyQuery>(graphql`
    query FeaturedCaseStudy {
      file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "logo-intuit-no-bg.png" }
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
    <Box bg="DarkBlue" py={5}>
      <Container variant="column">
        <Logo variant="flexItem">
          <Image
            alt="intuit-accountants"
            fluid={intuitLogo?.file?.childImageSharp?.fluid}
          />
        </Logo>
        <Box flex="0 0 500px" variant="flexItem">
          <H5 color="Gold" m="auto" textTransform="uppercase">
            Growing Twitter the Right Way:
          </H5>
          <P color="White">
            {`See How We Helped Intuit Accountants \n Get The Right Audience at the Right Price`}
            {/* TODO: Update this link to the proper case study link */}
            <NavLink color="Blue" pl={1} to={`/${Routes.CaseStudies}`}>
              See Case Study &gt;
            </NavLink>
          </P>
        </Box>
      </Container>
    </Box>
  );
};

const Container = styled(Box)`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    margin-bottom: ${theme.space[5]}px;
    padding: ${theme.space[5]}px;

    ${minMediaQuery.Medium(css`
      flex-flow: row;
      margin-bottom: 0;
    `)};
  `}
`;

const Logo = styled(Box)`
  ${({ theme }) => css`
    flex: 0 0 200px;
    border-bottom: 1px solid ${theme.colors.white};
    padding-bottom: ${theme.space[5]}px;
    margin-bottom: ${theme.space[5]}px;

    ${minMediaQuery.Medium(css`
      border-bottom: none;
      border-right: 1px solid ${theme.colors.white};
      padding: 0 ${theme.space[5]}px 0 0;
      margin: 0 ${theme.space[5]}px 0 0;
    `)}
  `}
`;

export default CaseStudy;
