const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
//构建前清空构建目录
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')//注意这里CleanWebpackPlugin的引入
const VueLoaderPlugin = require('vue-loader/lib/plugin')

//确定mode
let _mode = 'production';
// switch(process.env.NODE_ENV) {
//   case 'development':
//     _mode = 'development';
//     configData = config.dev;
//     break;
//   case 'production':
//     _mode = 'production';
//     configData = config.build;
//     break;
//   default:
//     _mode = 'none';
// }

module.exports = {
  mode: _mode,
  //入口文件
  // entry: {
  //   index: './src/app.js'
  // },
  //输出配置
  output: {
    //文件名称
    filename: 'app.js',
    //文件存放地址
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/'
  },
  resolve: {
    //自动解析确定的扩展
    extensions: ['.js', '.vue'],
    //指定解析模块使的搜索目录
    modules: [path.resolve(__dirname, '../node_modules')]
  },
  stats:{
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader','css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      //favicon: 'https://static.mileslife.com/image/32X32.ico'
      // minify: true
    }),
    // new CleanWebpackPlugin(),
    new VueLoaderPlugin()
  ],
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}