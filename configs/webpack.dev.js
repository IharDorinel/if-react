const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader'
      }
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
