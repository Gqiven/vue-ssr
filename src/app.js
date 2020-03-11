import Vue from 'vue';
import App from './App.vue';
import { createRouter } from './router/index.js';
import { createStore } from './store/index.js';

//为避免服务端的请求状态污染，导出一个工厂函数，用于创建新的实例
export function createApp () {
  //创建router、store实例
  const router = createRouter();
  const store = createStore();

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })
  return { app, router, store }
}