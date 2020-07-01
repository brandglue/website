import React from 'react';

import { Box } from '@components/boxes/Box';
import { Image } from '@components/images/Image';
import { NavLink } from '@components/links/NavLink';
import { P, H3, Span } from '@components/text/Text';
import { Caret } from '@icons/index';
import { styled, css } from '@theme/styled';

interface IProps {
  blogPosts: GatsbyTypes.AllBlogPostsQuery;
}

export const Previews: React.FC<IProps> = ({ blogPosts }) => {
  const posts = blogPosts.allMdx?.edges;

  return (
    <PostGrid>
      {posts?.map(({ node: post }, index: number) => {
        const { excerpt, frontmatter } = post;

        // const isFeatured = index === 0;

        return (
          frontmatter &&
          frontmatter.slug && (
            <Post key={index}>
              <Box flexGrow={0} variant="flexItem">
                <Image
                  alt={frontmatter.title}
                  fluid={frontmatter.cover_image?.childImageSharp?.fluid}
                />
              </Box>
              <PostContent variant="flexItem">
                <Box px={5}>
                  <NavLink to={frontmatter.slug} variant="title">
                    <H3>{frontmatter.title}</H3>
                  </NavLink>
                  <Box py={3}>
                    <Author>{frontmatter.author}</Author>
                    <span>&bull;</span>
                    <Date>{frontmatter.date}</Date>
                  </Box>
                  <P>{excerpt}</P>
                  <NavLink to={frontmatter.slug} variant="button">
                    <Box variant="centered">
                      Read More <ReadMoreCaret />
                    </Box>
                  </NavLink>
                </Box>
              </PostContent>
            </Post>
          )
        );
      })}
    </PostGrid>
  );
};

const PostGrid = styled(Box)`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 1fr;
    align-items: flex-start;
    grid-gap: ${theme.spacings.pixelSpace06};
    margin: ${theme.spacings.pixelSpace06} 0;
  `};
`;

const Post = styled(Box)`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column;
    height: 100%;
    background: ${theme.colors.gray00};
    padding: ${theme.spacings.pixelSpace03};
  `};
`;

const PostContent = styled(Box)`
  ${() => css`
    display: flex;
    flex-flow: column;
    justify-content: space-between;
  `};
`;

const Author = styled(Span)`
  ${({ theme }) => css`
    text-transform: uppercase;
    padding-right: ${theme.spacings.pixelSpace03};
    color: ${theme.colors.gray04};
  `}
`;

const Date = styled(Span)`
  ${({ theme }) => css`
    margin-right: auto;
    text-transform: uppercase;
    padding-left: ${theme.spacings.pixelSpace03};
    color: ${theme.colors.gray04};
  `}
`;

const ReadMore = styled(Box)`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-start;
    /* border-left: 1px solid ${theme.colors.gold};
    border-bottom: 1px solid ${theme.colors.gold};

    ${NavLink} {
      margin-bottom: -1px;
    } */
  `};
`;

const ReadMoreCaret = styled(Caret)`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    transform: rotate(90deg);
    width: 16px;
    margin-left: ${theme.spacings.pixelSpace02};
  `};
`;
