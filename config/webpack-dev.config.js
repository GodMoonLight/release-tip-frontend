// eslint-disable-next-line no-undef
const path = require('path')
// eslint-disable-next-line no-undef
const { merge } = require('webpack-merge')
// eslint-disable-next-line no-undef
const root = path.resolve(__dirname, '../')
const publicPath = path.resolve(root, 'public')
// eslint-disable-next-line no-undef
const commonConfig = require('./webpack.config')

// eslint-disable-next-line no-undef
module.exports = merge(commonConfig, {
  mode: 'development',
  output: {
    filename: 'js/[name].[contenthash].js',
    chunkFilename: 'js/[name].bundle.js',
    path: publicPath,
    publicPath: '/',
  },
  devServer: {
    static: {
      directory: publicPath,
    },
    client: {
      progress: true,
    },
    compress: true,
    port: 9000,
    historyApiFallback: true,
    devMiddleware:{
      writeToDisk: true
    }
  },
})
