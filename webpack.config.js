var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

var ExtractTextPlugin = require("extract-text-webpack-plugin");

var DEBUG = process.env.NODE_ENV !== 'production';

module.exports = {

  entry: [

    // Include polyfills for ES2015 in the final bundle
    'babel-polyfill',

    // Include css that normalizes default styles
    'normalize.css',

    path.resolve('./src/main.js')
  ],

  output: {
    path: path.resolve('./build/public'),
    filename: 'bundle.js'
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
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract(
        'style-loader',
        [
          'css-loader?' + JSON.stringify({
            modules: true,
            importLoaders: 1,
            localIdentName: DEBUG ? '[name]_[local]_[hash:base64:4]' : '[hash:base64:8]',
            sourceMap: DEBUG,
            minimize: !DEBUG
          }),
          'postcss-loader'
        ]
      )
    },
    {
      test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
      loader: 'url-loader',
      query: {
        name: DEBUG ? '[path][name].[ext]?[hash:base64:4]' : '[hash].[ext]',
        limit: 10000
      },
    }]
  },

  postcss: function () {
    return [autoprefixer];
  },

  plugins: [

    // Need to set NODE_ENV to `"production"` to include minified version of React
    // https://webpack.github.io/docs/list-of-plugins.html#defineplugin
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': DEBUG ? '"development"' : '"production"'
    }),

    new ExtractTextPlugin('bundle.css')

  // Add additional plugins for development builds
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
