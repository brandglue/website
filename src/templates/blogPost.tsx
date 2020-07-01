import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

import { Box } from '@components/boxes/Box';
import { Image } from '@components/images/Image';
import { SwitchLink } from '@components/links/SwitchLink';
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
        // eslint-disable-next-line react/display-name
        a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
          <SwitchLink {...props} />
        ),
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
      <Image alt={'blog-hero'} fluid={blogHeroImage?.fluid} />
      <Box py={7} variant="section">
        <H2>{frontmatter.title}</H2>
        <PostHeader variant="flex">
          <span>
            <Author>{frontmatter.author}</Author>
            <Date>{frontmatter.date}</Date>
          </span>
          <Categories>
            {frontmatter.categories?.map((category) => {
              return <Category key={category}>{category}</Category>;
            })}
          </Categories>
        </PostHeader>
        <Image
          alt={frontmatter.cover_image?.name}
          fluid={frontmatter.cover_image?.childImageSharp?.fluid}
          my={4}
        />
        <MDXRenderer>{body}</MDXRenderer>
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
