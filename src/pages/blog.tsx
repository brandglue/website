import { graphql } from 'gatsby';
import { chunk } from 'lodash-es';
import React, { FC, useState } from 'react';

import { ActionBar, LoadMore, Previews } from '@components/blog';
import { Box, Divider, P, H1 } from '@components/core';

interface IProps {
  data: GatsbyTypes.BlogPageQuery;
}

export const Blog: FC<IProps> = ({ data }) => {
  const [page, setPage] = useState(1);
  const [allLoaded, setAllLoaded] = useState(false);

  const postsPerChunk = 5;
  const { edges } = data.blogPosts;

  const handleLoadMore = () => {
    const pageCount = page + 1;
    setPage(pageCount);

    if (pageCount * postsPerChunk >= edges.length) {
      setAllLoaded(true);
    }
  };

  // todo: memoize
  const renderChunks = () => {
    const chunks = chunk(edges, postsPerChunk);
    const paginated = chunks.slice(0, page);

    return paginated.map((group, index) => (
      <Previews key={index} blogPosts={group} index={index} />
    ));
  };

  return (
    <Box>
      <Divider />
      <Box variant="section">
        <H1>There&apos;s a lot going on out there in the social sphere.</H1>
        <P>Here&apos;s what we&apos;ve got to say about it.</P>
        <ActionBar />
        {renderChunks()}
        <LoadMore allLoaded={allLoaded} handleLoadMore={handleLoadMore} />
      </Box>
    </Box>
  );
};

export default Blog;

export const blogPage = graphql`
  query BlogPage {
    blogPosts: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { type: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 300)
          frontmatter {
            slug
            title
            author
            date(formatString: "MMMM DD, YYYY")
            categories
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
