import { graphql } from 'gatsby';
import { chunk } from 'lodash-es';
import React, { FC, useEffect, useState } from 'react';

import { ActionBar, Hero, LoadMore, Previews } from '@components/blog';
import { Breadcrumbs } from '@components/common';
import { Box, H3 } from '@components/core';
import { BlogPostsByCategoryQuery } from '@generated/graphql';

interface IProps {
  pathContext: {
    category: string;
  };
  data: BlogPostsByCategoryQuery;
  pageContext: any;
}

export const Category: FC<IProps> = ({
  data,
  pathContext: { category },
  pageContext,
}) => {
  const [page, setPage] = useState(1);
  const [allLoaded, setAllLoaded] = useState(false);

  const postsPerChunk = 5;
  const { edges } = data.allMdx;

  useEffect(() => {
    if (page * postsPerChunk >= edges.length) {
      setAllLoaded(true);
    }
  }, [page, edges]);

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
    <>
      <Hero />
      <Box>
        <Box variant="section">
          <Breadcrumbs breadcrumb={pageContext.breadcrumb} />
          <ActionBar />
          <H3>Category: {category}</H3>
          {renderChunks()}
          <LoadMore allLoaded={allLoaded} handleLoadMore={handleLoadMore} />
        </Box>
      </Box>
    </>
  );
};

export default Category;

export const blogPostsByCategoryQuery = graphql`
  query BlogPostsByCategory($category: String!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { categories: { in: [$category] } } }
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
