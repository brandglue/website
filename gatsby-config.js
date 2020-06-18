const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'BrandGlue',
    description: 'BrandGlue website',
    siteUrl: 'https://brandglue.netlify.app',
  },
  plugins: [
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'blog-posts',
        path: `${__dirname}/src/content/blog`,
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '@components': path.join(__dirname, 'src/components'),
        '@constants': path.join(__dirname, 'src/constants'),
        '@hooks': path.join(__dirname, 'src/hooks'),
        '@icons': path.join(__dirname, 'src/icons'),
        '@images': path.join(__dirname, 'src/images'),
        '@layout': path.join(__dirname, 'src/layout'),
        '@models': path.join(__dirname, 'src/models'),
        '@pages': path.join(__dirname, 'src/pages'),
        '@page-partials': path.join(__dirname, 'src/page-partials'),
        '@src': path.join(__dirname, 'src'),
        '@theme': path.join(__dirname, 'src/theme'),
        '@utils': path.join(__dirname, 'src/utils'),
      },
    },
    {
      resolve: 'gatsby-plugin-typegen',
      options: {
        outputPath: `${__dirname}/__generated__/gatsby-types.d.ts`,
        emitSchema: {
          '__generated__/gatsby-introspection.json': true,
          '__generated__/gatsby-schema.graphql': true,
        },
        emitPluginDocuments: {
          '__generated__/gatsby-plugin-documents.graphql': true,
        },
      },
    },
  ],
};
