export default () => ({
  webpack: (config, { defaultLoaders }) => {
    /*
      CAUTION:
      The current mix of plugins in static.config.js and here results in the 
      typescriptLoader being first if the oneOf array. THIS MAY CHANGE IN THE FUTURE.
      If other plugins are added/removed, the ordering may change and this code may break.
    */
    const typescriptLoader = config.module.rules[0].oneOf[0];

    config.module.rules = [
      {
        oneOf: [
          typescriptLoader,
          defaultLoaders.jsLoaderExt,
          defaultLoaders.cssLoader,
          {
            test: /\.(gif|png|jpe?g)$/i,
            use: [
              'lqip-loader',
              {
                loader: 'responsive-loader',
                options: {
                  adapter: require('responsive-loader/sharp'),
                  sizes: [300, 600, 900, 1200],
                  name: '[path][name]-[width].[ext]',
                },
              },
              'image-webpack-loader',
            ],
          },
          defaultLoaders.fileLoader,
        ],
      },
    ];
    return config;
  },
});
