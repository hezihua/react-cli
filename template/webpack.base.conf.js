// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin }  = require("clean-webpack-plugin")
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const baseConf =  {
  entry: './src/index.jsx', // 指定库的入口文件
  output: {
    path: path.resolve(__dirname, 'dist'), // 输出目录
    filename: 'main.js', // 输出的库文件名
    libraryTarget: 'umd', // 将库导出为 UMD 格式
  },
  devServer: {
    static: './dist',
    hot: true,
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader', // 使用 Babel 处理 ES6+ 代码
        // options: {
        //   presets: ['@babel/preset-env'],
        //   sourceMaps: true, // 启用 sourcemap
        // },
      },
      {
        test: /\.jsx$/,
        use: 'babel-loader', // 使用 Babel 处理 ES6+ 代码
      },
      {
        test: /\.svg$/,
        type: "asset/resource"
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./public/index.html"),
      filename: "index.html",
      title: "react app"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[hash:8].css"
    }),
    new CleanWebpackPlugin()
  ]
};

module.exports = {
  baseConf
}
