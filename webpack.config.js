const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
      './src/index.js', 
      './src/sidebar.js',
      './src/header.js'
  ],
  plugins: [
      new HtmlWebpackPlugin({
          title: 'Odin ToDoist',
      }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  mode: 'development',
  module: {
      rules: [
          {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader'],
          },
      ],
  },
};