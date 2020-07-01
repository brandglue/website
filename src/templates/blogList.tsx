import React, { FC } from 'react';
import { graphql } from 'gatsby';

import { Box } from '@components/boxes/Box';
import { Image } from '@components/images/Image';
import { P, H1 } from '@components/text/Text';
import { Search } from '@components/search/Search';

import { useBlogHeroImage } from '@hooks/queries/useBlogHeroImage';
import { Previews } from '@page-partials/blog/Previews';

interface IProps {
  data: GatsbyTypes.AllBlogPostsQuery;
}

export const Blog: FC<IProps> = ({ data }) => {
  const blogHeroImage = useBlogHeroImage();

  return (
    <>
      <Image alt="blog-hero" fluid={blogHeroImage?.fluid} />
      <Box>
        <Box py={6} variant="section">
          <H1>There&apos;s a lot going on out there in the social sphere.</H1>
          <P>Here&apos;s what we&apos;ve got to say about it.</P>
          <Search />
          <Previews blogPosts={data} />
        </Box>
      </Box>
    </>
  );
};

export default Blog;

export const allBlogPostsQuery = graphql`
  query AllBlogPosts($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          frontmatter {
            slug
            title
            author
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
  }
`;
