import { FluidObject } from 'gatsby-image';
import React, { FC, useContext } from 'react';

import { Box, Image, NavLink, P, H3 } from '@components/core';
import { AppState } from '@src/AppState';
import { css, minMediaQuery, rhythm, styled } from '@styles/index';
import { TopLevelPages as Pages } from '@utils/routes';

interface IPost {
  node: {
    excerpt: string;
    frontmatter?: Partial<GatsbyTypes.MdxFrontmatter> | null;
  };
}

interface IProps {
  index: number;
  blogPosts: IPost[];
}

export const Previews: FC<IProps> = ({ blogPosts }) => {
  const { isSmallDevice } = useContext(AppState);

  let posts, featured;

  if (isSmallDevice) {
    posts = blogPosts;
    featured = undefined;
  } else {
    [featured, ...posts] = blogPosts;
  }

  const renderPost = (
    frontmatter: Partial<GatsbyTypes.MdxFrontmatter>,
    excerpt: string,
  ) => (
    <>
      <PostImage variant="flexItem">
        <NavLink to={`/${Pages.Blog}/${frontmatter.slug}`} variant="invisible">
          {frontmatter.cover_image?.childImageSharp?.fluid && (
            <Image
              alt={frontmatter.title}
              fluid={
                frontmatter.cover_image.childImageSharp.fluid as FluidObject
              }
            />
          )}
        </NavLink>
      </PostImage>
      <PostContent variant="flexItem">
        <Box>
          {frontmatter?.slug && (
            <NavLink to={`/${Pages.Blog}/${frontmatter.slug}`} variant="title">
              <H3>{frontmatter.title}</H3>
            </NavLink>
          )}
          <P>{excerpt}</P>
          {frontmatter?.slug && (
            <NavLink to={`/${Pages.Blog}/${frontmatter.slug}`} variant="button">
              <Box variant="centered">Read More</Box>
            </NavLink>
          )}
        </Box>
      </PostContent>
    </>
  );

  return (
    <>
      <Box bg="gray00">
        {!isSmallDevice && (
          <FeaturedWrapper>
            <FeaturedPost>
              {featured?.node?.frontmatter &&
                renderPost(featured.node.frontmatter, featured.node.excerpt)}
            </FeaturedPost>
          </FeaturedWrapper>
        )}
      </Box>
      <GridWrapper variant="section">
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
      </GridWrapper>
    </>
  );
};

const FeaturedWrapper = styled(Box)`
  max-width: ${({ theme }) => theme.spacings.maxContentColWidth};
  padding: ${rhythm(1)};
  margin: 0 auto;
`;

const GridWrapper = styled(Box)`
  padding-bottom: 0;
  padding-top: 0;

  ${minMediaQuery.Medium(css`
    padding-top: ${rhythm(2)};
  `)}
`;

const PostGrid = styled(Box)`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 60px;
  margin-bottom: ${rhythm(2)};

  ${minMediaQuery.Medium(css`
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 1fr;
    align-items: flex-start;
  `)}
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

const FeaturedPost = styled(Box)`
  display: flex;
  background: ${({ theme }) => theme.colors.gray00};
  padding: ${rhythm(0.75)};

  ${PostImage} {
    flex-basis: 50%;
  }

  ${PostContent} {
    flex-basis: 50%;
    padding: 0 ${rhythm(1)};
  }
`;
