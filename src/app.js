import Vue from 'vue';
import App from './App.vue';

//为避免服务端的请求状态污染，导出一个工厂函数，用于创建新的实例
export function createApp () {

  const app = new Vue({
    render: h => h(App)
  })
  return { app }
}