const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); //installed via npm
const webpack = require("webpack"); //to access built-in plugins

const root = path.resolve(__dirname,"..");
const sourcePath = path.resolve(root, "src");
const buildPath = path.resolve(root, "../src/main/resources/public");

module.exports = {
  mode: "production",
  entry: path.join(sourcePath, "index.jsx"),
  output: {
    path: buildPath,
    filename: "[name].[contenthash].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      },

      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          {
            loader: "postcss-loader"
          }
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          {
            loader: "css-loader",
            options: {
              importLoaders: 2
            }
          },
          {
            loader: "postcss-loader"
          },
          // Compiles Sass to CSS
          {
            loader: "sass-loader",
            options: {}
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
    new webpack.HotModuleReplacementPlugin(),
  ],

  cache: {
    type: "filesystem",
    cacheDirectory: path.resolve(root, ".temp_cache")
  },
  resolve: {
    modules: [path.resolve(root, "src"), path.resolve(root, "node_modules"), "node_modules"],
    extensions: ["*", ".js", ".jsx"]
  }
};

