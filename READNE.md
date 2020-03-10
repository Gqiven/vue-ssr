#### 构建步骤
  > * 1、配置webpack打包环境
  > * 2、Vue SSR 的初步实践
  > * 3、Vue SSR 的逐步完善
  
  > webpack部分
  * yarn init -y
  * 创建目录
  ```bash
    | -server/
      | -index.js #node运行文件
    | -src/
      | -app.js
    | -public/
      | -index.html #模版文件 <!--vue-ssr-outlet--> 这里将是应用程序 HTML 标记注入的地方
  ```
