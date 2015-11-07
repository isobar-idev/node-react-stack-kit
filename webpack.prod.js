'use strict';

let path = require('path');
let webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    path.join(__dirname, './public/javascripts/components/main.js')
  ],
  output: {
    path: path.join(__dirname, './public/build/js'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    // extensions listed here can be omitted in `import`s
    extensions: ['', '.js', '.jsx'],
    // directories which are searched implicitly in `import`s
    modulesDirectories: ['node_modules', 'components', 'vendors']
  },
  plugins: [
    // minify all assets
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false }})
  ]
};