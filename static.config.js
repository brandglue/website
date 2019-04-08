import path from 'path'

export default {
  siteRoot: 'https://brandglue.com',

  plugins: [
    ['react-static-plugin-typescript', { typeCheck: false }], // TODO: figure out typechecking on commit
    'react-static-plugin-styled-components',
  ],

  entry: path.join(__dirname, 'src', 'Root.tsx'),
};
