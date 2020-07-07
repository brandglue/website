const { kebabCase } = require('lodash');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      postsMdx: allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
      postsCategories: allMdx {
        group(field: frontmatter___categories) {
          value: fieldValue
          totalCount
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // create individual blog posts
  const posts = result.data.postsMdx.edges;
  posts.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: require.resolve('./src/templates/blog/Post.tsx'),
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });

  // create blog category pages
  const categories = result.data.postsCategories.group;
  categories.forEach((category) => {
    createPage({
      path: `/blog/category/${kebabCase(category.value)}`,
      component: require.resolve('./src/templates/blog/Category.tsx'),
      context: {
        category: category.value,
      },
    });
  });
};
