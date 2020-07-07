import React, { FC, useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import { chunk } from 'lodash-es';

import { Box } from '@components/boxes/Box';
import { Button } from '@components/buttons/Button';
import { Image } from '@components/images/Image';
import { P, H1 } from '@components/text/Text';
import { Search } from '@components/search/Search';
import { useBlogHeroImage } from '@hooks/queries/useBlogHeroImage';
import { Previews } from '@page-partials/blog/Previews';
import { styled, css } from '@theme/styled';
import { rhythm } from '@theme/globalStyles';

interface IProps {
  data: GatsbyTypes.BlogPostsByCategoryQuery;
}

export const Category: FC<IProps> = ({ data }) => {
  const [page, setPage] = useState(1);
  const [allLoaded, setAllLoaded] = useState(false);

  const blogHeroImage = useBlogHeroImage();
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
      <Image alt="blog-hero" fluid={blogHeroImage?.fluid} />
      <Box>
        <Box py={6} variant="section">
          <H1>There&apos;s a lot going on out there in the social sphere.</H1>
          <P>Here&apos;s what we&apos;ve got to say about it.</P>
          {/* <ActionBar>
            <Search />
            {renderCategories()}
          </ActionBar> */}
          {renderChunks()}
          {!allLoaded ? (
            <LoadMore variant="centered">
              <LoadMoreButton
                disabled={allLoaded}
                onClick={handleLoadMore}
                variant="outline"
              >
                See More +
              </LoadMoreButton>
            </LoadMore>
          ) : (
            <Box variant="centered">All Posts Loaded</Box>
          )}
        </Box>
      </Box>
    </>
  );
};

const ActionBar = styled(Box)`
  margin-bottom: ${rhythm(1)};
`;

const LoadMore = styled(Box)`
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.colors.darkBlue};
    margin-bottom: ${rhythm(1)};
  `}
`;

const LoadMoreButton = styled(Button)`
  ${({ theme }) => css`
    transform: translateY(50%);
    padding: 0.2em 1.2em;
    background: ${theme.colors.gray00};
    color: ${theme.colors.darkBlue};
    border-radius: 0;
    font-weight: 700;
    text-transform: uppercase;

    &:hover,
    &:active,
    &:focus {
      background: ${theme.colors.gray01};
    }
  `}
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
