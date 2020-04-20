import path from 'path';

export default {
  // TODO: change to https://brandglue.com/ when ready for live deploy
  siteRoot: 'https://brave-kilby-8a8ba4.netlify.com/',

  plugins: [
    [
      require.resolve('react-static-plugin-typescript'),
      {
        typeCheck: true,
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-styled-components'),
  ],

  entry: path.join(__dirname, 'src', 'Root.tsx'),

  getRoutes: () => [
    {
      path: '/',
      template: 'src/pages/home/Home',
    },
    {
      path: '/about',
      template: 'src/pages/About',
    },
    {
      path: '/blog',
      template: 'src/pages/blog/Blog',
    },
    {
      path: '/case-studies',
      template: 'src/pages/CaseStudies',
    },
    {
      path: '/contact',
      template: 'src/pages/Contact',
    },
    {
      path: '/services',
      template: 'src/pages/Services',
    },
  ],
};
