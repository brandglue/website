export default () => ({
  webpack: (config, { defaultLoaders }) => {
    const existingLoaders = config.module.rules[0].oneOf;
    const loaders = [...existingLoaders];

    /*
      CAUTION
      This code removes the last loader in the chain, which is assumed to be the fileLoader. If that assumption changes for some reason, this code will not behave as expected.
    */
    loaders.length = loaders.length - 1;

    const imageLoader = {
      test: /\.(gif|png|jpe?g)$/i,
      use: [
        'lqip-loader',
        {
          loader: 'responsive-loader',
          options: {
            adapter: require('responsive-loader/sharp'),
            sizes: [300, 600, 900, 1200, 2000, 2600],
            name: '[path][name]-[width].[ext]',
          },
        },
        'image-webpack-loader',
      ],
    };

    config.module.rules = [
      {
        oneOf: [...loaders, imageLoader, defaultLoaders.fileLoader],
      },
    ];

    return config;
  },
});
