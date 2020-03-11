import Vue from 'vue';
import App from './App.vue';
import { createRouter } from './router/index.js';

//为避免服务端的请求状态污染，导出一个工厂函数，用于创建新的实例
export function createApp () {
  //创建router实例
  const router = createRouter();

  const app = new Vue({
    router,
    render: h => h(App)
  })
  return { app, router }
}