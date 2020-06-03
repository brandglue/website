import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

export const Excerpts: React.FC = () => {
  const allBlogPostsQuery = useStaticQuery<
    GatsbyTypes.AllBlogPostsQuery
  >(graphql`
    query AllBlogPosts {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            excerpt(pruneLength: 400)
            frontmatter {
              slug
              title
              date(formatString: "MMMM DD, YYYY")
              featured
            }
          }
        }
      }
    }
  `);

  const posts = allBlogPostsQuery?.allMarkdownRemark?.edges;

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
