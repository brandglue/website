const path = require('path');

// TODO: change to https://brandglue.com/ when ready for live deploy
// siteRoot: 'https://brave-kilby-8a8ba4.netlify.com/',

module.exports = {
  plugins: [
    'gatsby-plugin-typescript',
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
        '@partials': path.join(__dirname, 'src/partials'),
        '@src': path.join(__dirname, 'src'),
        '@theme': path.join(__dirname, 'src/theme'),
        '@utils': path.join(__dirname, 'src/utils'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
  ],
};
