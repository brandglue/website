exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const posts = result.data.allMdx.edges;

  // create blogList page with pagination
  const postsPerPage = 9;
  const numPages = Math.ceil(posts.length / postsPerPage);
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? '/blog' : `/blog/${i + 1}`,
      component: require.resolve('./src/templates/blogList.tsx'),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });

  // create individual blog posts
  posts.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: require.resolve('./src/templates/blogPost.tsx'),
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });
};
