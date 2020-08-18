import { graphql } from 'gatsby';
import React, { FC } from 'react';

import { Contact } from '@components/common';
import { Box, Divider } from '@components/core';
import { CaseStudy, Clients, Hero, Services, Team } from '@components/home';

interface IProps {
  data: GatsbyTypes.HomePageQuery;
}

export const Home: FC<IProps> = ({ data }) => {
  return (
    <Box>
      <Hero />
      <Team data={data} />
      <Clients />
      <CaseStudy />
      <Services data={data} />
      <Divider />
      <Contact />
    </Box>
  );
};

export default Home;

export const homePageQuery = graphql`
  query HomePage {
    allTeamImages: allMdx(
      filter: { frontmatter: { type: { eq: "team" }, name: { ne: "You?" } } }
      sort: { order: ASC, fields: frontmatter___order }
    ) {
      edges {
        node {
          frontmatter {
            name
            image {
              name
              childImageSharp {
                fluid(maxWidth: 1100) {
                  ...GatsbyImageSharpFluid_withWebp
                  ...GatsbyImageSharpFluidLimitPresentationSize
                }
              }
            }
          }
        }
      }
    }
    allServices: allMdx(
      filter: { frontmatter: { type: { eq: "service" } } }
      sort: { order: ASC, fields: frontmatter___title }
    ) {
      edges {
        node {
          frontmatter {
            title
            shortDescription
            icon
          }
        }
      }
    }
  }
`;
