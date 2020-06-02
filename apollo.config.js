module.exports = {
  client: {
    name: 'brandglue',
    tagName: 'graphql',
    includes: [
      './src/**/*.{ts,tsx}',
      './__generated__/gatsby-plugin-documents.graphql',
    ],
    service: {
      name: 'GatsbyJS',
      localSchemaFile: './__generated__/gatsby-schema.graphql',
    },
  },
};
