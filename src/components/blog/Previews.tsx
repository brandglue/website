import { CaretRight } from '@styled-icons/boxicons-regular';
import { FluidObject } from 'gatsby-image';
import React from 'react';

import { Box, Image, NavLink, P, H3, Span } from '@components/core';
import { MdxFrontmatter } from '@generated/graphql';
import { styled, css, rhythm } from '@styles/index';

interface IPost {
  node: {
    excerpt: string;
    frontmatter?: Partial<MdxFrontmatter> | null;
  };
}

interface IProps {
  index: number;
  blogPosts: IPost[];
}

export const Previews: React.FC<IProps> = ({ blogPosts }) => {
  const [featured, ...posts] = blogPosts;

  const renderPost = (
    frontmatter: Partial<MdxFrontmatter>,
    excerpt: string,
  ) => (
    <>
      <PostImage variant="flexItem">
        {frontmatter.cover_image?.childImageSharp?.fluid && (
          <Image
            alt={frontmatter.title}
            fluid={frontmatter.cover_image.childImageSharp.fluid as FluidObject}
          />
        )}
      </PostImage>
      <PostContent variant="flexItem">
        <Box>
          {frontmatter?.slug && (
            <NavLink to={frontmatter.slug} variant="title">
              <H3>{frontmatter.title}</H3>
            </NavLink>
          )}
          <Box
            css={`
              padding-bottom: ${rhythm(0.5)};
            `}
          >
            <Author>{frontmatter.author}</Author>
            <span>&bull;</span>
            <Date>{frontmatter.date}</Date>
          </Box>
          <P>{excerpt}</P>
          {frontmatter?.slug && (
            <NavLink to={frontmatter.slug} variant="button">
              <Box variant="centered">
                Read More <ReadMoreCaret />
              </Box>
            </NavLink>
          )}
        </Box>
      </PostContent>
    </>
  );

  return (
    <>
      <FeaturedPost>
        {featured?.node?.frontmatter &&
          renderPost(featured.node.frontmatter, featured.node.excerpt)}
      </FeaturedPost>
      <PostGrid>
        {posts.map(({ node: post }, index: number) => {
          const { excerpt, frontmatter } = post;
          return (
            frontmatter && (
              <Post key={index}>{renderPost(frontmatter, excerpt)}</Post>
            )
          );
        })}
      </PostGrid>
    </>
  );
};

const gridGap = rhythm(1);

const PostGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  align-items: flex-start;
  grid-gap: ${gridGap};
  margin-bottom: ${rhythm(2)};
`;

const Post = styled(Box)`
  display: flex;
  flex-flow: column;
  height: 100%;
  background: ${({ theme }) => theme.colors.gray00};
  padding: ${rhythm(0.75)};
`;

const PostImage = styled(Box)`
  flex-grow: 0;
`;

const PostContent = styled(Box)`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  padding: ${rhythm(0.5)};
`;

const Author = styled(Span)`
  padding-right: 10px;
  color: ${({ theme }) => theme.colors.gray04};
`;

const Date = styled(Span)`
  margin-right: auto;
  padding-left: 10px;
  color: ${({ theme }) => theme.colors.gray04};
`;

const ReadMoreCaret = styled(CaretRight)`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    width: 20px;
    margin-left: 10px;
  `};
`;

const FeaturedPost = styled(Box)`
  display: flex;
  background: ${({ theme }) => theme.colors.gray00};
  padding: ${rhythm(0.75)};
  border-top: 3px solid ${({ theme }) => theme.colors.blue};
  margin-bottom: ${gridGap};

  ${PostImage} {
    flex-basis: 60%;
  }

  ${PostContent} {
    flex-basis: 40%;
    padding: 0 ${rhythm(1)};
  }
`;
