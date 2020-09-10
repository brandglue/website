import { MDXProvider } from '@mdx-js/react';
import { graphql } from 'gatsby';
import { FixedObject } from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';

import { Category, Share } from '@components/blog';
import { Breadcrumbs, Seo } from '@components/common';
import { Box, Divider, SwitchLink, H2, Span } from '@components/core';
import { css, minMediaQuery, rhythm, scale, styled } from '@styles/index';

interface IProps {
  data: GatsbyTypes.BlogPostQuery;
  location: any;
  pageContext: any;
}

export const BlogPost: React.FC<IProps> = ({
  data: { post, site },
  location,
  pageContext,
}) => {
  if (!post?.frontmatter || !post.body) {
    return null;
  }

  const { body, frontmatter } = post;

  return (
    <>
      <Seo
        description={post.excerpt}
        image={frontmatter.cover_image?.childImageSharp?.resize as FixedObject}
        path={location.pathname}
        title={frontmatter.title}
        type="article"
      />
      <MDXProvider
        components={{
          // eslint-disable-next-line react/display-name
          a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
            <SwitchLink {...props} />
          ),
        }}
      >
        <Divider />
        <PostWrapper>
          <Breadcrumbs breadcrumb={pageContext.breadcrumb} />
          <H2>{frontmatter.title}</H2>
          <PostHeader>
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
          <PostBody>
            <MDXRenderer>{body}</MDXRenderer>
          </PostBody>
          <Share
            absoluteUrl={`${site?.siteMetadata?.siteUrl}${location.pathname}`}
            siteUrl={site?.siteMetadata?.siteUrl}
            summary={post.excerpt}
            title={frontmatter.title}
          />
        </PostWrapper>
      </MDXProvider>
    </>
  );
};

const PostWrapper = styled(Box)`
  max-width: ${({ theme }) => theme.spacings.maxTextColWidth};
  padding: ${rhythm(1)};
  margin: auto;
`;

const PostHeader = styled(Box)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    color: ${theme.colors.gray04};
    border-bottom: 4px solid ${theme.colors.blue};
    font-size: ${scale(-0.1).fontSize};
    line-height: ${scale(-0.1).lineHeight};
    margin-bottom: ${rhythm(1)};

    ${minMediaQuery.Medium(css`
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
    `)}
  `}
`;

const Meta = styled.span`
  margin-bottom: ${rhythm(0.5)};

  ${minMediaQuery.Medium(css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
  `)}
`;

const Sep = styled.span`
  display: inline-block;
  position: relative;
  vertical-align: middle;
  width: 30px;
  height: 3px;
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
  margin-bottom: ${rhythm(0.5)};

  ${minMediaQuery.Medium(css`
    margin-left: auto;
    margin-bottom: 0;
  `)}
`;

const PostBody = styled(Box)`
  margin-bottom: ${rhythm(2)};
`;

export default BlogPost; // default export needed for gatsby-node

export const blogPostQuery = graphql`
  query BlogPost($slug: String!) {
    post: mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      excerpt(pruneLength: 160)
      frontmatter {
        author
        categories
        cover_image {
          name
          childImageSharp {
            resize(width: 1100) {
              src
              height
              width
            }
          }
        }
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;
