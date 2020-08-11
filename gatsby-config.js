const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'BrandGlue',
    description: 'BrandGlue website',
    siteUrl: 'https://brandglue.netlify.app',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '@components': path.join(__dirname, 'src/components'),
        '@constants': path.join(__dirname, 'src/constants'),
        '@generated': path.join(__dirname, '__generated__'),
        '@hooks': path.join(__dirname, 'src/hooks'),
        '@images': path.join(__dirname, 'src/images'),
        '@models': path.join(__dirname, 'src/models'),
        '@pages': path.join(__dirname, 'src/pages'),
        '@src': path.join(__dirname, 'src'),
        '@styles': path.join(__dirname, 'src/styles'),
        '@utils': path.join(__dirname, 'src/utils'),
      },
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-react-helmet',
    'gatsby-remark-embed-video', // must come before remark-images
    'gatsby-remark-images',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1100,
              linkImagesToOriginal: false,
              wrapperStyle: 'margin: 0;',
            },
          },
          {
            resolve: 'gatsby-remark-embed-video',
            options: {
              width: 800,
              related: false,
              noIframeBorder: true,
              urlOverrides: [
                {
                  id: 'youtube',
                  embedURL: (videoId) =>
                    `https://www.youtube-nocookie.com/embed/${videoId}`,
                },
              ],
              containerClass: 'embed-video-container',
            },
          },
          'gatsby-remark-instagram-embed',
          'gatsby-remark-responsive-iframe',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/styles/index',
      },
    },
    {
      resolve: 'gatsby-plugin-flexsearch',
      options: {
        languages: ['en'],
        type: 'Mdx',
        fields: [
          {
            name: 'title',
            indexed: true,
            resolver: 'frontmatter.title',
            attributes: {
              encode: 'balance',
              tokenize: 'strict',
              threshold: 6,
              depth: 3,
            },
            store: true,
          },
          {
            name: 'url',
            indexed: false,
            resolver: 'frontmatter.slug',
            store: true,
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-breadcrumb',
      options: {
        useAutoGen: true,
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
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog-posts',
        path: `${__dirname}/src/content/blog`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'case-studies',
        path: `${__dirname}/src/content/case-studies`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'team',
        path: `${__dirname}/src/content/team`,
      },
    },
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: `./__generated__/graphql.ts`,
      },
    },
  ],
};
