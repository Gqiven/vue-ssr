const fs = require('fs');
const path = require('path');
const renderer = require('vue-server-renderer').createRenderer({
  //读取模版 并采用utf-8编码
  template: fs.readFileSync(path.resolve(__dirname, '../public/index.html'), 'utf-8')
});
const server = require('express')();
//获取创建Vue实例方法
const createApp = require('../src/app.js');

server.get('*', (req, res) => {
  const app = createApp(req);
  renderer.renderToString(app).then(html => {
    res.end(html)
  }).catch(err => {
    console.error(err)
  })
})

//设置监听端口
server.listen(3000)