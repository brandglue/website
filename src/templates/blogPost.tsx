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
  Strong,
  Ul,
} from '@components/text/Text';
import { useBlogHeroImage } from '@hooks/queries/useBlogHeroImage';
import { styled } from '@theme/styled';

interface IProps {
  data: GatsbyTypes.BlogPostQuery;
}

const BlogPost: React.FC<IProps> = ({ data: { mdx } }) => {
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
            <Author>{frontmatter.author}</Author>
            <Date>{frontmatter.date}</Date>
          </span>
          <span>
            {frontmatter.categories?.map((category) => {
              return <Category key={category}>{category}</Category>;
            })}
          </span>
        </PostHeader>
        <div>
          <Image
            alt=""
            fluid={frontmatter.cover_image?.childImageSharp?.fluid}
          />
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </Box>
    </MDXProvider>
  );
};

const PostHeader = styled(Box)`
  justify-content: space-between;
  border-top: 4px solid ${({ theme }) => theme.Colors.Blue};
  padding-top: ${({ theme }) => theme.space[3]}px;
`;

const Author = styled.span`
  color: ${({ theme }) => theme.Colors.Gold};
  text-transform: uppercase;
  border-right: 1px solid ${({ theme }) => theme.Colors.Gray02};
  padding-right: ${({ theme }) => theme.space[3]}px;
  margin-right: ${({ theme }) => theme.space[3]}px;
`;

const Date = styled.span`
  text-transform: uppercase;
`;

const Category = styled.span`
  background: ${({ theme }) => theme.Colors.Blue};
  color: ${({ theme }) => theme.Colors.White};
  padding: ${({ theme }) => theme.space[1]}px;
`;

export default BlogPost;

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
