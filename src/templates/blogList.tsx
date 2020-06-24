import React, { FC } from 'react';
import { graphql } from 'gatsby';

import { Box } from '@components/boxes/Box';
import { Image } from '@components/images/Image';
import { P, H2, H3 } from '@components/text/Text';

import { useBlogHeroImage } from '@hooks/queries/useBlogHeroImage';
import { Excerpts } from '@page-partials/blog/Excerpts';

interface IProps {
  data: GatsbyTypes.AllBlogPostsQuery;
}

export const Blog: FC<IProps> = ({ data }) => {
  const blogHeroImage = useBlogHeroImage();

  return (
    <>
      <Image alt="blog-hero" fluid={blogHeroImage?.fluid} />
      <Box>
        <Box py={6} variant="column">
          <H2>There&apos;s a lot going on out there in the social sphere.</H2>
          <P>Here&apos;s what we&apos;ve got to say about it.</P>
        </Box>
      </Box>
      <H3>Latest Posts</H3>
      <Excerpts blogPosts={data} />
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
            date(formatString: "MMMM DD, YYYY")
            featured
          }
        }
      }
    }
  }
`;
