import React from 'react';

import { Box } from '@components/boxes/Box';
import { Image } from '@components/images/Image';
import { NavLink } from '@components/links/NavLink';
import { P, H3, Span } from '@components/text/Text';
import { Caret } from '@icons/index';
import { styled, css } from '@theme/styled';
import { rhythm } from '@theme/globalStyles';

interface IPost {
  node: {
    excerpt: string;
    frontmatter?: Partial<GatsbyTypes.MdxFrontmatter>;
  };
}

interface IProps {
  index: number;
  blogPosts: IPost[];
}

export const Previews: React.FC<IProps> = ({ blogPosts, index }) => {
  const [featured, ...posts] = blogPosts;

  const isFirstGroup = index === 0;

  const renderPost = (
    frontmatter: Partial<GatsbyTypes.MdxFrontmatter>,
    excerpt: string,
  ) => (
    <>
      <PostImage variant="flexItem">
        <Image
          alt={frontmatter.title}
          fluid={frontmatter.cover_image?.childImageSharp?.fluid}
        />
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

interface IFeaturedPostStyleProps {
  readonly isFirst: number;
}

const gridGap = rhythm(1);

const PostGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  align-items: flex-start;
  grid-gap: ${gridGap};
  padding-top: ${rhythm(1.5)};
  border-top: 3px solid ${({ theme }) => theme.colors.blue};
  margin-top: ${rhythm(1.5)};
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

const ReadMoreCaret = styled(Caret)`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    transform: rotate(90deg);
    width: 16px;
    margin-left: ${theme.spacings.pixelSpace02};
  `};
`;

const FeaturedPost = styled(Box)`
  display: flex;
  background: ${({ theme }) => theme.colors.gray00};
  padding: ${rhythm(0.75)};
  margin-bottom: ${gridGap};

  ${PostImage} {
    flex-basis: 60%;
  }

  ${PostContent} {
    flex-basis: 40%;
    padding: 0 ${rhythm(1)};
  }
`;
