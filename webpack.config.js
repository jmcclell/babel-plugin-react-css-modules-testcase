'use strict'

var path = require('path')

var root = path.resolve(__dirname)

module.exports = {
  context: root,
  entry: './index.js',
  output: {
    filename: '[name].bundle.js',
    path: root,
  },
  devServer: {
    contentBase: root,
    port: 8000,
    publicPath: 'http://localhost:9000',
    watchContentBase: true,
    inline: false,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015'],
          plugins: [
            ["react-css-modules", { generateScopedName: '[path]___[name]__[local]___[hash:base64:5]' }] 
          ]
        }
      },
      {
        test: /\.css$/, 
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true
            }
          },
          { 
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              importLoaders: 1,
              localIdentName: '[path]___[name]__[local]___[hash:base64:5]'
            }
          }
        ]
      }
    ]
  }
}

