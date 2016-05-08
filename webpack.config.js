var path = require('path');
var webpack = require('webpack');

var DEBUG = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'build/public/js'),
    filename: 'bundle.js'
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
