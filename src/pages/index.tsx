import { graphql, PageProps } from 'gatsby';
import React, { FC } from 'react';

import { Contact, Seo } from '@components/common';
import { Box, Divider } from '@components/core';
import { BlogPost, Clients, Hero, Services, Team } from '@components/home';

type Props = PageProps<GatsbyTypes.HomePageQuery>;

export const Home: FC<Props> = ({ data, location }) => {
  return (
    <>
      <Seo
        description="BrandGlue Home"
        path={location.pathname}
        title="Home"
        type="website"
      />
      <Box>
        <Hero />
        <Team data={data} />
        <Clients />
        <BlogPost data={data} />
        <Services data={data} />
        <Divider />
        <Contact />
      </Box>
    </>
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
    latestBlogPost: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { type: { eq: "blog-post" } } }
      limit: 1
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
            date(formatString: "MMMM DD, YYYY")
            cover_image {
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
