const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: '/',
  },
  resolve: {
    extensions: [".js", ".jsx", ".tsx",".ts"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.(s*)css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|gif|jpg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[hash].[ext]'
            }
          }
        ]
      },
      {
        test: /\.tsx?$/,
        use: {
          loader: 'awesome-typescript-loader'
        }
      },
      {
        test: /\.(woff|woff2)$/,
        use: {
            loader: 'url-loader',
            options: {
                limit: 10000,
                mimetype: "application/font-woff",
                name: "[name].[contenthash].[ext]",
                outputPath: "./assets/fonts",
                publicPath: "../assets/fonts",
                esModule: false,
            },
        }
      },
    ],
  },
  plugins: [
      new HtmlWebpackPlugin({
          inject: true,
          template: './public/index.html',
          filename: './index.html',
      }),
      new MiniCssExtractPlugin()
  ],
  devServer: {
    static: {
        directory: path.join(__dirname, "dist")
    },
    compress: true,
    historyApiFallback: true,
    port: 3000,
  },
};