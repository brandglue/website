import path from 'path'

export default {
  siteRoot: 'https://brandglue.com',

  plugins: [
    ['react-static-plugin-typescript', { typeCheck: true }],
    'react-static-plugin-styled-components',
  ],

  entry: path.join(__dirname, 'src', 'Root.tsx'),
};
