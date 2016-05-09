var path = require('path');
var webpack = require('webpack');

var DEBUG = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: [
    // Include polyfills for ES2015 in the final bundle
    'babel-polyfill',
    path.resolve(__dirname, 'src/main.js')
  ],
  output: {
    path: path.resolve(__dirname, 'build/public/js'),
    filename: 'bundle.js',
    // Need to tell the webpack-dev-server where your assets should be served:
    publicPath: 'js'
  },
  debug: DEBUG,
  // Write source maps. Supports "cheaper" options as well.
  // https://webpack.github.io/docs/configuration.html#devtool
  devtool: DEBUG ? 'source-map' : null,
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  plugins: [
    // Need to set NODE_ENV to `"production"` to include minified version of React
    // https://webpack.github.io/docs/list-of-plugins.html#defineplugin
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': DEBUG ? '"development"' : '"production"'
    })
  // Add additional plugins for production builds
  ].concat(DEBUG ? [] : [
    // Search for equal or similar files and deduplicate them in the output.
    // https://webpack.github.io/docs/list-of-plugins.html#dedupeplugin
    new webpack.optimize.DedupePlugin(),

    // Minimize all JavaScript output of chunks.
    // https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
    new webpack.optimize.UglifyJsPlugin(),

    // A plugin for a more aggressive chunk merging strategy.
    // https://webpack.github.io/docs/list-of-plugins.html#aggressivemergingplugin
    new webpack.optimize.AggressiveMergingPlugin()
  ])
}
