// const Vue = require('vue');
const fs = require('fs');
const path = require('path');
// const renderer = require('vue-server-renderer').createRenderer({
//   //读取模版 并采用utf-8编码
//   template: fs.readFileSync(path.resolve(__dirname, '../public/index.html'), 'utf-8')
// });
const express = require('express');
const server = express();

//设置静态资源路径
server.use('/dist', express.static('dist'));

//webpack --config webpack.buildserver.js 打包出的文件
const serverBundle = require(path.resolve(__dirname, '../dist/vue-ssr-server-bundle.json'));//path.resolve(__dirname, '../dist/vue-ssr-server-bundle.json');
const template = fs.readFileSync(path.resolve(__dirname, '../public/index.html'), 'utf-8');
const clientManifest = require(path.resolve(__dirname, '../dist/vue-ssr-client-manifest.json'));
const { createBundleRenderer } = require('vue-server-renderer');

// const renderer = createBundleRenderer(serverBundle, () => {
//   return {
//     runInNewContext: false, //是否在渲染时创建新的上下文
//     template,//设置渲染html模版
//     clientManifest
//   }
// })
const renderer = createBundleRenderer(serverBundle, {
  // runInNewContext: false, //是否在渲染时创建新的上下文
  template,//设置渲染html模版
  clientManifest
})

server.get('/', (req, res) => {
  renderer.renderToString().then(html => {
    res.end(html)
  }).catch(err => {
    console.error(err)
  })
})

//设置监听端口
server.listen(3000, () => {
  console.log(`server started at localhost:3000`)
})