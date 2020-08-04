import { graphql } from 'gatsby';
import React, { FC } from 'react';

import { Contact } from '@components/common';
import { Divider } from '@components/core';
import { CaseStudy, Clients, Hero, Services, Team } from '@components/home';
import { AllTeamImagesQuery } from '@generated/graphql';

interface IProps {
  data: AllTeamImagesQuery;
}

export const Home: FC<IProps> = ({ data }) => {
  return (
    <div>
      <Hero />
      <Team data={data} />
      <Clients />
      <CaseStudy />
      <Services />
      <Divider />
      <Contact />
    </div>
  );
};

export default Home;

export const teamQuery = graphql`
  query AllTeamImages {
    allMdx(
      filter: { frontmatter: { type: { eq: "team" } } }
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
  }
`;
