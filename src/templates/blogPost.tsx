import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

import { Box } from '@components/boxes/Box';
import {
  Em,
  H1,
  H2,
  H3,
  H4,
  H5,
  Li,
  Ol,
  P,
  Span,
  Strong,
  Ul,
} from '@components/text/Text';
import { useBlogHeroImage } from '@hooks/queries/useBlogHeroImage';
import { styled, css } from '@theme/styled';

interface IProps {
  data: GatsbyTypes.BlogPostQuery;
}

export const BlogPost: React.FC<IProps> = ({ data: { mdx } }) => {
  const blogHeroImage = useBlogHeroImage();

  if (!mdx?.frontmatter || !mdx.body) {
    return null;
  }

  const { body, frontmatter } = mdx;

  return (
    <MDXProvider
      components={{
        em: Em,
        h1: H1,
        h2: H2,
        h3: H3,
        h4: H4,
        h5: H5,
        li: Li,
        ol: Ol,
        p: P,
        strong: Strong,
        ul: Ul,
      }}
    >
      <Image alt="blog-hero" fluid={blogHeroImage?.fluid} />
      <Box py={7} variant="column">
        <H2>{frontmatter.title}</H2>
        <PostHeader variant="flex">
          <span>
            <Author fontSize={[2, null, null, null, 3, 4]}>
              {frontmatter.author}
            </Author>
            <Date fontSize={[2, null, null, null, 3, 4]}>
              {frontmatter.date}
            </Date>
          </span>
          {frontmatter.categories?.map((category) => {
            return <Category key={category}>{category}</Category>;
          })}
        </PostHeader>
        <>
          <Image
            alt=""
            fluid={frontmatter.cover_image?.childImageSharp?.fluid}
          />
          <MDXRenderer>{body}</MDXRenderer>
        </>
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
    border-right: 1px solid ${theme.colors.gray02};
    padding-right: ${theme.spacings.pixelSpace03};
    margin-right: ${theme.spacings.pixelSpace03};
  `}
`;

const Date = styled(Span)`
  ${({ theme }) => css`
    text-transform: uppercase;
    color: ${theme.colors.gray02};
  `}
`;

const Category = styled(Span)`
  ${({ theme }) => css`
    background: ${theme.colors.blue};
    color: ${theme.colors.white};
    padding: ${theme.spacings.pixelSpace01} ${theme.spacings.pixelSpace02};
  `}
`;

export default BlogPost; // needed for gatsby-node

export const pageQuery = graphql`
  query BlogPost($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        author
        categories
        cover_image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
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
