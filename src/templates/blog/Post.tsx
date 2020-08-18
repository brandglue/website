import { MDXProvider } from '@mdx-js/react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';

import { Category } from '@components/blog';
import { Breadcrumbs } from '@components/common';
import { Box, Divider, SwitchLink, H2, Span } from '@components/core';
import { css, rhythm, scale, styled } from '@styles/index';

interface IProps {
  data: GatsbyTypes.BlogPostQuery;
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
      <Divider />
      <Box variant="text">
        <Breadcrumbs breadcrumb={pageContext.breadcrumb} />
        <H2>{frontmatter.title}</H2>
        <PostHeader variant="flex">
          <Meta>
            {frontmatter.author}
            <Sep></Sep>
            {frontmatter.date}
          </Meta>
          <Categories>
            {frontmatter.categories?.map((category) => {
              return category && <Category key={category} value={category} />;
            })}
          </Categories>
        </PostHeader>
        <MDXRenderer>{body}</MDXRenderer>
      </Box>
    </MDXProvider>
  );
};

const PostHeader = styled(Box)`
  ${({ theme }) => css`
    justify-content: space-between;
    align-items: flex-start;
    color: ${theme.colors.gray04};
    border-bottom: 4px solid ${theme.colors.blue};
    font-size: ${scale(-0.1).fontSize};
    line-height: ${scale(-0.1).lineHeight};
    margin-bottom: ${rhythm(1)};
  `}
`;

const Meta = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Sep = styled.span`
  display: inline-block;
  position: relative;
  width: 30px;
  margin: 0 10px;

  &:after {
    content: '';
    position: absolute;
    height: 3px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.gray02};
  }
`;

const Categories = styled(Span)`
  margin-left: auto;
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
