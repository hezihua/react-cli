
const { merge } = require("webpack-merge")
const {
  baseConf
} = require('./webpack.base.conf')


module.exports = merge(baseConf, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    host: "127.0.0.1",
    port: 9000,
    hot: true,
    open: true,
  },
})

