const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = merge(commonConfig, {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, '../dist'),
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('babel-loader')
          }
        ]
      },
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 8080,
    publicPath: '/',
    historyApiFallback: true,
    hot: true,
    open: true,
  }
});
