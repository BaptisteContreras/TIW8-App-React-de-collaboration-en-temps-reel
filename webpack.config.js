const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './client/index.html',
  filename: './index.html',
});
module.exports = () => ({
  entry: './client/index.jsx',
  output: { // NEW
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  }, // NEW Ends
  plugins: [htmlPlugin],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
        options: { name: '/static/[name].[ext]' },
      },
    ],
  },
});
