const Vue  = require('vue');

//为避免服务端的请求状态污染，每次请求都创建一个新的Vue实例
module.exports = function createApp(ctx) {
  return new Vue({
    data: {
      url: ctx.url
    },
    template: `<div>the page url is {{ url }}</div>`
  })
}