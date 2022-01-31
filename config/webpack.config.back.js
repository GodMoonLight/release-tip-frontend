const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack') //to access built-in plugins
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const frontendRoot = path.resolve(__dirname, '..')
const root = path.resolve(frontendRoot, '..')
console.log(root, 'root')
const publicPath = path.resolve(root, 'src/main/resources/public')
module.exports = {
  entry: path.resolve(frontendRoot, 'src/index.jsx'),
  output: {
    filename: 'js/[name].[contenthash].js',
    chunkFilename: 'js/[name].bundle.js',
    path: publicPath,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },

      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: '@svgr/webpack',
            options: {
              babel: false,
              icon: true
            },
          }
          // {
          //   loader: 'url-loader',
          //   options: {
          //     encoding: 'utf8',
          //   },
          // },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      // {
      //   test: /\.svg$/i,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         encoding: 'utf8',
      //       },
      //     },
      //   ],
      // },
      // {
      //   test: /\.less$/,
      //   use: [{
      //     loader: 'style-loader',
      //   }, {
      //     loader: 'css-loader', // translates CSS into CommonJS
      //   }, {
      //     loader: 'less-loader',
      //     // options: {
      //     //   lessOptions: { // 如果使用less-loader@5，请移除 lessOptions 这一级直接配置选项。
      //     //     modifyVars: {
      //     //       'primary-color': 'red',
      //     //       // 'link-color': '#1DA57A',
      //     //       // 'border-radius-base': '2px',
      //     //     },
      //     //     javascriptEnabled: true,
      //     //   },
      //     // },
      //   }]
      // },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      title: 'ENV Management',
      filename: 'index.html',
      template: path.resolve(frontendRoot, 'src', 'index.html'),
      alwaysWriteToDisk: true
    })
  ],
  resolve: {
    // options for resolving module requests
    // (does not apply to resolving of loaders)
    modules: ['node_modules'],
    // directories where to look for modules (in order)
    extensions: ['.js', '.json', '.jsx', '.css', '.scss'],
    // extensions that are used
  }
}
