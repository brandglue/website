import { graphql } from 'gatsby';
import { chunk } from 'lodash-es';
import React, { FC, useEffect, useState } from 'react';

import { ActionBar, LoadMore, Previews } from '@components/blog';
import { Breadcrumbs, Seo } from '@components/common';
import { Box, Divider } from '@components/core';
import { rhythm, styled } from '@styles/index';

interface IProps {
  data: GatsbyTypes.BlogPostsByCategoryQuery;
  location: any;
  pageContext: any;
  pathContext: {
    category: string;
  };
}

export const Category: FC<IProps> = ({
  data,
  location,
  pathContext: { category },
  pageContext,
}) => {
  const [page, setPage] = useState(1);
  const [allLoaded, setAllLoaded] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const postsPerChunk = 5;
  const { edges } = data.allMdx;

  useEffect(() => {
    if (page * postsPerChunk >= edges.length) {
      setAllLoaded(true);
    }
  }, [page, edges]);

  useEffect(() => {
    document.documentElement.scrollTop = scrollPosition;
  }, [page, scrollPosition]);

  const handleLoadMore = () => {
    const pageCount = page + 1;
    setPage(pageCount);
    setScrollPosition(
      document.documentElement.scrollTop || document.body.scrollTop,
    );

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
      <Seo
        description={`BrandGlue blog | category: ${category}`}
        path={location.pathname}
        title={`Category: ${category}`}
        type="website"
      />
      <Box>
        <Divider />
        <Box pb={0} variant="section">
          <Breadcrumbs breadcrumb={pageContext.breadcrumb} />
          <ActionBar />
          <CategoryTitle>Category: {category}</CategoryTitle>
        </Box>
        {renderChunks()}
        <Box pt={0} variant="section">
          <LoadMore allLoaded={allLoaded} handleLoadMore={handleLoadMore} />
        </Box>
      </Box>
    </>
  );
};

const CategoryTitle = styled.h3`
  margin-bottom: ${rhythm(1)};
`;

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
