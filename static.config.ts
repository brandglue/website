export default {
  siteRoot: 'https://brandglue.com',
  
  getRoutes: () => [
    {
      path: '',
      component: 'src/pages/Homepage',
    },
    {
      path: 'about',
      component: 'src/pages/About',
    }
  ],

  plugins: [
    'react-static-plugin-typescript',
    'react-static-plugin-styled-components',
  ]
};
