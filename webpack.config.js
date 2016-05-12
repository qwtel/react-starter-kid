var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

var ExtractTextPlugin = require("extract-text-webpack-plugin");

var DEBUG = process.env.NODE_ENV !== 'production';

var AUTOPREFIXER_BROWSERS = [
  'Android 2.3',
  'Android >= 4',
  'Chrome >= 35',
  'Firefox >= 31',
  'Explorer >= 9',
  'iOS >= 7',
  'Opera >= 12',
  'Safari >= 7.1',
];

module.exports = {

  entry: [

    // Include polyfills for ES2015 in the final bundle
    'babel-polyfill',
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
        'css-loader?' + JSON.stringify({
          modules: true,
          importLoaders: 1,
          localIdentName: DEBUG ? '[name]_[local]_[hash:base64:4]' : '[hash:base64:8]',
          sourceMap: DEBUG,
          minimize: !DEBUG
        }),
        'postcss-loader'
      )
    },
    {
      test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
      loader: 'url-loader',
      query: {
        name: DEBUG ? '[path][name].[ext]?[hash]' : '[hash].[ext]',
        limit: 10000,
      },
    }]
  },

  postcss: [
    autoprefixer({
      browsers: AUTOPREFIXER_BROWSERS
    })
  ],

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
