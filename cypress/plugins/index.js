const path = require('path');

const webpack = require('@cypress/webpack-preprocessor');

/*
  NOTE:
  These rules are only used to transpile test files. The main app uses the transpilation pipeline provided by react-static
*/
const webpackOptions = {
  mode: 'development',
  // make sure the source maps work
  devtool: 'eval-source-map',
  // webpack will transpile TS and JS files
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        // every time webpack sees a TS file (except for node_modules)
        // webpack will use "ts-loader" to transpile it to JavaScript
        test: /\.ts$/,
        include: [path.resolve('cypress')],
        use: [
          {
            loader: 'ts-loader',
            options: {
              // skip typechecking for speed
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },
};

const options = {
  webpackOptions,
};

module.exports = on => {
  on('file:preprocessor', webpack(options));
};
