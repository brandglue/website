import React from 'react';
import { Link } from 'gatsby';

interface IProps {
  blogPosts: GatsbyTypes.AllBlogPostsQuery;
}

export const Excerpts: React.FC<IProps> = ({ blogPosts }) => {
  const posts = blogPosts.allMdx?.edges;

  return (
    <>
      {posts?.map(({ node: post }, index: number) => {
        return (
          post.frontmatter &&
          post.frontmatter.slug && (
            <div key={index}>
              <article
                className={post.frontmatter.featured ? 'is-featured' : ''}
              >
                <header>
                  <p>
                    <Link to={post.frontmatter.slug}>
                      {post.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <span>{post.frontmatter.date}</span>
                  </p>
                </header>
                <p>
                  {post.excerpt}
                  <br />
                  <br />
                  <Link to={post.frontmatter.slug}>Keep Reading →</Link>
                </p>
              </article>
            </div>
          )
        );
      })}
    </>
  );
};
