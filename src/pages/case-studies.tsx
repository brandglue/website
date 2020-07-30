import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import { kebabCase } from 'lodash-es';

import { Breadcrumbs, Contact, Hero } from '@components/common';
import { Box, Divider, H1, Image, NavLink, P } from '@components/core';
import { AllCaseStudiesQuery } from '@generated/graphql';
import { rhythm } from '@theme/globalStyles';
import { styled } from '@theme/styled';

interface IProps {
  data: AllCaseStudiesQuery;
  pageContext: any;
}

export const CaseStudies: FC<IProps> = ({ data, pageContext }) => {
  const { edges } = data.allMdx;

  return (
    <>
      <Hero />
      <Box variant="section">
        <Breadcrumbs breadcrumb={pageContext.breadcrumb} />
        <H1>See how we&apos;ve helped our clients.</H1>
        <P>
          From developing social strategies to event social management, we’ve
          done a lot. But don’t take our word for it, check out the case studies
          below.
        </P>
        <Grid>
          {edges.map(({ node: caseStudy }) => {
            const { frontmatter } = caseStudy;

            return (
              frontmatter?.client &&
              frontmatter?.slug && (
                <GridItem key={frontmatter.client}>
                  <GridImage variant="flexItem">
                    <Image
                      alt={kebabCase(frontmatter.client)}
                      fluid={
                        frontmatter.logo?.childImageSharp?.fluid as FluidObject
                      }
                    />
                  </GridImage>
                  <GridContent variant="flexItem">
                    <Title>{frontmatter.title}</Title>
                    <Description>{frontmatter.description}</Description>
                    <Link to={frontmatter.slug}>Check out the Case Study</Link>
                  </GridContent>
                </GridItem>
              )
            );
          })}
        </Grid>
      </Box>
      <Divider />
      <Contact />
    </>
  );
};

const Grid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  grid-gap: 100px;
  margin-bottom: ${rhythm(1)};
`;

const GridItem = styled(Box)`
  display: flex;
`;

const GridImage = styled(Box)`
  flex-basis: 30%;
  flex-grow: 0;
  margin-right: 2em;
`;

const GridContent = styled(Box)`
  flex-basis: 70%;
`;

const Title = styled.h3``;

const Description = styled.div``;

const Link = styled(NavLink)``;

export default CaseStudies;

export const allCaseStudiesQuery = graphql`
  query AllCaseStudies {
    allMdx(
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
