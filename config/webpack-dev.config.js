const path = require('path')
const { merge } = require('webpack-merge')
const root = path.resolve(__dirname, '../../')
const publicPath = path.resolve(root, 'build/resources/main/public')
const commonConfig = require('./webpack.config.back')

module.exports = merge(commonConfig, {
  mode: 'development',
  output: {
    filename: 'js/[name].[contenthash].js',
    chunkFilename: 'js/[name].bundle.js',
    path: publicPath,
    publicPath: '/',
  }
})
