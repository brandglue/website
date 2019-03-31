import path from 'path'

export default {
  siteRoot: 'https://brandglue.com',

  plugins: [
    'react-static-plugin-typescript',
    'react-static-plugin-styled-components',
  ],

  entry: path.join(__dirname, 'src', 'index.tsx'),
  
  getRoutes: async () => [],
};
