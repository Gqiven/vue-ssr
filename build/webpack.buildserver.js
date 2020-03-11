const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const path = require('path')

module.exports = merge(baseConfig, {
  entry: './src/entry-server.js',//入口文件
  target: 'node',//告知vue-loader生成node服务器代码
  // 对 bundle renderer 提供 source map 支持
  devtool: '#source-map',
  // 此处告知 server bundle 使用 Node 风格导出模块(Node-style exports)
  // output: {
  //   filename: 'server-bundle.js',
  //   libraryTarget: 'commonjs2'
  // },
  output: {
    //文件名称
    filename: 'server-bundle.js',
    libraryTarget: 'commonjs2',
    //文件存放地址
    path: path.resolve(__dirname, '../dist'),
    // publicPath: '/dist/'
  },
  // 这是将服务器的整个输出
  // 构建为单个 JSON 文件的插件。
  // 默认文件名为 `vue-ssr-server-bundle.json`
  plugins: [
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    //   'process.env.VUE_ENV': '"client"'
    // }),
    new VueSSRServerPlugin()
  ]
})