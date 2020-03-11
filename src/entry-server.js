import { createApp } from './app'

// // export default context => {
// //   const { app } = createApp()
// //   return app
// // }
// const { app } = createApp()
// //   return app
// export default app

export default context => {
  //兼容处理异步路由钩子，返回Promise
  return new Promise((resolve, reject) => {
    const { app, router } = createApp();

    //设置服务器端路由位置
    router.push(context.url);
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents();
      //未匹配到配置的路由
      if(!matchedComponents.length) {
        return reject({code: 400});
      }
      resolve(app);
    }, reject)
  })
}