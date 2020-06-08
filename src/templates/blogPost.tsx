import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';

import { Box } from '@components/containers/Box';
import { Column } from '@components/containers/Column';
import { SectionTitle } from '@components/sections/SectionTitle';
import { useBlogHeroImage } from '@hooks/queries/useBlogHeroImage';
import styled from '@theme/styled';
import { minMediaQuery } from '@theme/utils';
interface IProps {
  data: GatsbyTypes.BlogPostQuery;
}

const BlogPost: React.FC<IProps> = ({ data }) => {
  const blogHeroImage = useBlogHeroImage();

  if (!data.markdownRemark?.frontmatter || !data.markdownRemark.html) {
    return null;
  }

  const { frontmatter, html } = data.markdownRemark;

  return (
    <>
      <Image alt="blog-hero" fluid={blogHeroImage?.fluid} />
      <Column>
        <SectionTitle>{frontmatter.title}</SectionTitle>
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
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </Column>
    </>
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
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
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
