const path = require('path');

module.exports = {
  siteMetadata: {
    author: 'BrandGlue',
    description: 'BrandGlue website',
    keywords: ['social media', 'social media agency'],
    siteUrl: 'https://brandglue.netlify.app', // TODO: update when go live, don't include trailing slash
    title: 'BrandGlue',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '@components': path.join(__dirname, 'src/components'),
        '@hooks': path.join(__dirname, 'src/hooks'),
        '@media': path.join(__dirname, 'src/media'),
        '@models': path.join(__dirname, 'src/models'),
        '@pages': path.join(__dirname, 'src/pages'),
        '@src': path.join(__dirname, 'src'),
        '@styles': path.join(__dirname, 'src/styles'),
        '@utils': path.join(__dirname, 'src/utils'),
      },
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-force-trailing-slashes',
    'gatsby-remark-embed-video', // must come before remark-images
    'gatsby-remark-images',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    'gatsby-plugin-mdx-frontmatter',
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
        trailingSlashes: true,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'media',
        path: `${__dirname}/src/media`,
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
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'services',
        path: `${__dirname}/src/content/services`,
      },
    },
    {
      resolve: 'gatsby-plugin-typegen',
      options: {
        outputPath: '__generated__/graphql.d.ts',
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        htmlTitle: 'Admin',
        modulePath: `${__dirname}/src/admin/cms.js`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-4139092-4',
      },
    },
    'gatsby-plugin-netlify',
    /*
     * TODO: enable these plugins to add user-configurable redirects (the redirect field would also need to be added to the admin yaml.). The redirect-from plugin needs to also have changes in gatsby-node to ensure the right slug is getting passed.
     */
    // {
    //   resolve: 'gatsby-redirect-from',
    //   options: {
    //     query: 'allMdx',
    //   },
    // },
    // 'gatsby-plugin-meta-redirect', // must be last
  ],
};
