#### 构建步骤
  * yarn init -y
  * 创建目录
  ```bash
    | -build/     （#存放构建配置文件）
      | -webpack.base.js  #（公用配置）注意 vue-loader的安装与使用按照错误提示安装缺少的插件
      | -webpack.dev.js   #（开发环境配置）
      | -webpack.prod.js  #（生产环境配置）
    | -server/
      | -index.js #node运行文件
    | -src/
      | -app.js#通用entry
      | -entry-client.js #仅用于浏览器
      | -entry-client.js #仅用于服务端
    | -public/
      | -index.html #模版文件 <!--vue-ssr-outlet--> 这里将是应用程序 HTML 标记注入的地方
  ```

#### 运行步骤
> package.json中添加运行指令
  ```javascript
  "scripts": {
    "server": "node server/index.js",
    "build:server": "webpack --config build/webpack.buildserver.js",
    "build:client": "webpack --config build/webpack.buildclient.js"
  }
  ```
  ```bash
  * npm run build:server #打包服务器端文件
  * npm run build:client #打包客户端文件
  * npm run server       #启动node服务
  ```

#### 加入路由处理
> 使用 vue-router
> 将页面访问URL传递给应用程序，这样可以根据配置处理不同的URL访问，实现路由复用。

#### 加入数据状态预存取
> SSR渲染，如果依赖异步数据，那么需要在渲染前获取并解析完这些异步数据。
> 使用Vuex