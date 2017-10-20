var webpack = require('webpack');
var path = require('path');

module.exports = {
  watch: true,
  cache: true,
  devtool: '#cheap-module-eval-source-map',
  context: __dirname,
  entry: './entry.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    modules: [ 'node_modules' ]
  },
  module: {
    rules: [{
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
    }, {
      test: /\.(html)$/,
      use: {
        loader: 'html-loader'
      }
    }]
  }
};