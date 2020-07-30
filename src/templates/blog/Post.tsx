import React from 'react';
import { graphql } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

import { ActionBar } from '@components/blog';
import { Breadcrumbs, Hero } from '@components/common';
import { Box, Image, SwitchLink, H2, Span } from '@components/core';
import { BlogPostQuery } from '@generated/graphql';
import { styled, css } from '@theme/styled';

interface IProps {
  data: BlogPostQuery;
  pageContext: any;
}

export const BlogPost: React.FC<IProps> = ({ data: { mdx }, pageContext }) => {
  if (!mdx?.frontmatter || !mdx.body) {
    return null;
  }

  const { body, frontmatter } = mdx;

  return (
    <MDXProvider
      components={{
        // eslint-disable-next-line react/display-name
        a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
          <SwitchLink {...props} />
        ),
      }}
    >
      <Hero />
      <Box variant="section">
        <Breadcrumbs breadcrumb={pageContext.breadcrumb} />
        <H2>{frontmatter.title}</H2>
        <PostHeader variant="flex">
          <span>
            <Author>{frontmatter.author}</Author>
            <Date>{frontmatter.date}</Date>
          </span>
          <Categories>
            {frontmatter.categories?.map((category) => {
              return category && <Category key={category}>{category}</Category>;
            })}
          </Categories>
        </PostHeader>
        {frontmatter.cover_image?.childImageSharp?.fluid && (
          <Image
            alt={frontmatter.cover_image?.name}
            fluid={
              frontmatter.cover_image?.childImageSharp?.fluid as FluidObject
            }
            my={4}
          />
        )}
        <MDXRenderer>{body}</MDXRenderer>
        <ActionBar />
      </Box>
    </MDXProvider>
  );
};

const PostHeader = styled(Box)`
  ${({ theme }) => css`
    justify-content: space-between;
    border-top: 4px solid ${theme.colors.blue};
    padding-top: ${theme.spacings.pixelSpace03};
    margin-top: ${theme.spacings.pixelSpace03};
  `}
`;

const Author = styled(Span)`
  ${({ theme }) => css`
    color: ${theme.colors.gold};
    text-transform: uppercase;
    border-right: 1px solid ${theme.colors.gray04};
    padding-right: ${theme.spacings.pixelSpace03};
    margin-right: ${theme.spacings.pixelSpace03};
  `}
`;

const Date = styled(Span)`
  ${({ theme }) => css`
    margin-right: auto;
    text-transform: uppercase;
    color: ${theme.colors.gray04};
  `}
`;

const Categories = styled(Span)`
  margin-left: auto;
`;

const Category = styled(Span)`
  ${({ theme }) => css`
    background: ${theme.colors.blue};
    color: ${theme.colors.white};
    padding: ${theme.spacings.pixelSpace01} ${theme.spacings.pixelSpace02};
    margin-right: ${theme.spacings.pixelSpace02};

    &:last-child {
      margin-right: 0;
    }
  `}
`;

export default BlogPost; // default export needed for gatsby-node

export const blogPostQuery = graphql`
  query BlogPost($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        author
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
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
