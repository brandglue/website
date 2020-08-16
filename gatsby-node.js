const { kebabCase } = require('lodash');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage, createRedirect } = actions;

  const result = await graphql(`
    {
      blogPostsMdx: allMdx(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { type: { eq: "blog-post" } } }
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
      blogPostCategories: allMdx {
        group(field: frontmatter___categories) {
          value: fieldValue
          totalCount
        }
      }
      caseStudiesMdx: allMdx(
        filter: { frontmatter: { type: { eq: "case-study" } } }
      ) {
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

  // create individual blog posts
  const blogPosts = result.data.blogPostsMdx.edges;
  blogPosts.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: require.resolve('./src/templates/blog/Post.tsx'),
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });

  // create blog category pages
  const blogCategories = result.data.blogPostCategories.group;
  blogCategories.forEach((category) => {
    createPage({
      path: `/blog/category/${kebabCase(category.value)}`,
      component: require.resolve('./src/templates/blog/Category.tsx'),
      context: {
        category: category.value,
      },
    });
  });

  // create blog search page
  createPage({
    path: '/blog/search',
    component: require.resolve('./src/templates/blog/Search.tsx'),
  });

  // create individual case studies
  const caseStudies = result.data.caseStudiesMdx.edges;
  caseStudies.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: require.resolve('./src/templates/case-studies/CaseStudy.tsx'),
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });

  // redirects
  createRedirect({
    fromPath: '/blog/category',
    toPath: '/blog',
    redirectInBrowser: true,
    isPermanent: true,
  });
};
