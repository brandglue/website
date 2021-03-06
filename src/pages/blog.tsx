import { graphql, PageProps } from 'gatsby';
import { chunk } from 'lodash-es';
import React, { FC, useEffect, useState } from 'react';

import { ActionBar, LoadMore, Previews } from '@components/blog';
import { Seo } from '@components/common';
import { Box, Divider, P, H1 } from '@components/core';

type Props = PageProps<GatsbyTypes.BlogPageQuery>;

export const Blog: FC<Props> = ({ data, location }) => {
  const [page, setPage] = useState(1);
  const [allLoaded, setAllLoaded] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const postsPerChunk = 5;
  const { edges } = data.blogPosts;

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
        description="BrandGlue blog"
        path={location.pathname}
        title="Blog"
        type="website"
      />
      <Box>
        <Divider />
        <Box pb={0} variant="section">
          <H1>There is a lot going on out there in the social sphere.</H1>
          <P>Here&apos;s what we&apos;ve got to say about it.</P>
          <ActionBar />
        </Box>
        {renderChunks()}
        <Box pt={0} variant="section">
          <LoadMore allLoaded={allLoaded} handleLoadMore={handleLoadMore} />
        </Box>
      </Box>
    </>
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
