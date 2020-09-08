import { graphql } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import { kebabCase } from 'lodash-es';
import React, { FC } from 'react';

import { Contact } from '@components/common';
import { Box, Divider, H1, Image, NavLink, P } from '@components/core';
import { css, minMediaQuery, rhythm, scale, styled } from '@styles/index';

interface IProps {
  data: GatsbyTypes.CaseStudiesPageQuery;
}

export const CaseStudies: FC<IProps> = ({ data }) => {
  const { edges } = data.caseStudies;

  return (
    <>
      <Divider />
      <Box pb={0} variant="section">
        <H1>See how we&apos;ve helped our clients.</H1>
        <P>
          From developing social strategies to event social management, we’ve
          done a lot. But don’t take our word for it, check out the case studies
          below.
        </P>
      </Box>
      {edges.map(({ node: caseStudy }, index) => {
        const { frontmatter } = caseStudy;
        const isEven = index % 2 === 0;
        return (
          <CaseStudyWrapper key={frontmatter?.client}>
            <CaseStudy isEven={isEven} variant="section">
              <CaseStudyText isEven={isEven}>
                <CaseStudyTitle>{frontmatter?.client}</CaseStudyTitle>
                <h3>{frontmatter?.title}</h3>
                <p>{frontmatter?.description}</p>
                <NavLink hasArrow to={frontmatter?.slug || ''}>
                  Check out the case study
                </NavLink>
              </CaseStudyText>
              <CaseStudyImage>
                <Image
                  alt={kebabCase(frontmatter?.client)}
                  fluid={
                    frontmatter?.logo?.childImageSharp?.fluid as FluidObject
                  }
                />
              </CaseStudyImage>
            </CaseStudy>
          </CaseStudyWrapper>
        );
      })}
      <Divider />
      <Contact />
    </>
  );
};

const CaseStudyWrapper = styled(Box)`
  &:nth-child(even) {
    background: ${({ theme }) => theme.colors.gray00};
  }
`;

interface ICaseStudyProps {
  isEven: boolean;
}

const CaseStudy = styled(Box)<ICaseStudyProps>`
  display: flex;
  flex-direction: column-reverse;

  ${minMediaQuery.Small(css`
    /* using 'any' until the minMediaQuery can be generically typed */
    flex-direction: ${(props: any) => (props.isEven ? 'row' : 'row-reverse')};
    align-items: center;
  `)}
`;

const CaseStudyText = styled(Box)<ICaseStudyProps>`
  ${minMediaQuery.Small(css`
    flex-basis: 70%;
    /* using 'any' until the minMediaQuery can be generically typed */
    margin-right: ${(props: any) => props.isEven && '10%'};
    margin-left: ${(props: any) => !props.isEven && '10%'};
  `)}
`;

const CaseStudyTitle = styled.h2`
  font-size: ${scale(0.1).fontSize};
  color: ${({ theme }) => theme.colors.gray04};
`;

const CaseStudyImage = styled(Box)`
  max-width: 30%;
  margin-bottom: ${rhythm(1)};

  ${minMediaQuery.Small(css`
    flex-basis: 20%;
    max-width: auto;
    margin-bottom: 0;
  `)}
`;

export default CaseStudies;

export const caseStudiesPage = graphql`
  query CaseStudiesPage {
    caseStudies: allMdx(
      sort: { fields: frontmatter___client, order: ASC }
      filter: { frontmatter: { type: { eq: "case-study" } } }
    ) {
      edges {
        node {
          frontmatter {
            client
            description
            logo {
              name
              childImageSharp {
                fluid(maxWidth: 1100) {
                  ...GatsbyImageSharpFluid_withWebp
                  ...GatsbyImageSharpFluidLimitPresentationSize
                }
              }
            }
            slug
            title
          }
        }
      }
    }
  }
`;
