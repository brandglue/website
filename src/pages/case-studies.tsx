import { CaseStudiesPageQuery } from '@generated/graphql';
import { graphql } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import { kebabCase } from 'lodash-es';
import React, { FC } from 'react';

import { Contact } from '@components/common';
import { Box, Divider, H1, Image, NavLink, P } from '@components/core';
import { rhythm, styled } from '@styles/index';

interface IProps {
  data: CaseStudiesPageQuery;
}

export const CaseStudies: FC<IProps> = ({ data }) => {
  const { edges } = data.caseStudies;

  return (
    <>
      <Divider />
      <Box variant="section">
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
                    <Title>
                      <NavLink to={frontmatter.slug} variant="invisible">
                        {frontmatter.title}
                      </NavLink>
                    </Title>
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
