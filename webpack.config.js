var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'build/public/js'),
    filename: 'bundle.js',
  },
}
