import path from 'path'

export default {
  siteRoot: 'https://brandglue.com',

  plugins: [
    ['react-static-plugin-typescript', { typeCheck: true }],
    'react-static-plugin-styled-components',
    ['react-static-plugin-source-filesystem',
      {
        location: path.resolve('src/pages'),
      },
    ]
  ],

  entry: path.join(__dirname, 'src', 'Root.tsx'),

  // getRoutes: () => [
  //   {
  //     path: '/',
  //     template: 'src/pages/Home',
  //   },
  //   {
  //     path: '/about',
  //     template: 'src/pages/About',
  //   },
  //   {
  //     path: '/blog',
  //     template: 'src/pages/Blog',
  //   },
  //   {
  //     path: '/case-studies',
  //     template: 'src/pages/CaseStudies',
  //   },
  //   {
  //     path: '/contact',
  //     template: 'src/pages/Contact',
  //   },
  //   {
  //     path: '/services',
  //     template: 'src/pages/Services',
  //   }
  // ]
};
