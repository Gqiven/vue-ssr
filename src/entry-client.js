import { createApp } from './app'

const { app, router, store } = createApp();

//确保客户端数据和服务器端相同
//服务器端传入的context.state会挂载在window.__INITIAL_STATE__上，并自动嵌入HTML中
//客户端的store会使用window.__INITIAL_STATE__替换掉根状态
//这个需要在实例挂载之前执行
if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}

//确保挂载app前完成路由的解析
//将实例挂载在#app
router.onReady(() => {
  //添加路由钩子函数，处理异步数据传递函数
  router.beforeResolve((to, from, next) => {
    console.log('beforeResolve')
    //获取匹配当前和上一个路由的组件数组
    const matched = router.getMatchedComponents(to);
    const prevMatched = router.getMatchedComponents(from);

    console.log('matched: ', matched)
    let diffed = false;//
    //比对组件 找出两个数组的差异组件，即前后连个路由访问的是不同组件
    const activated = matched.filter((component, i) => {
      return diffed || (diffed = (prevMatched[i] !== component))
    })
    console.log('activated: ', activated)
    
    if(!activated.length) {
      return next();
    }

    Promise.all(activated.map(component => {
      if(component.asyncData) {
        return component.asyncData({store, route: to})
      }
    })).then(() => {
      next();
      //获取store数据后再挂载实例
      app.$mount('#app');
    }).catch(next)

  })
})

