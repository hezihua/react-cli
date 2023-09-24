
const { merge } = require("webpack-merge")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const {
  baseConf
} = require('./webpack.base.conf')


module.exports = merge(baseConf, {
  mode: "production",
  devtool: "inline-source-map",
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
})

