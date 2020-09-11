## 介绍
各种关于cookie的demo

## 怎么在本地搭https
1. 先安装一个软件mkcert：
   ``` 
   brew install mkcert
   ```

2. 对域名生成证书，比如我要对test.server.ke.com生成证书：
   ```
   mkcert test.server.ke.com
   ```

3. koa启动https服务：
   ```
    const http      = require("http");
    const https     = require("https");
    const fs        = require("fs");
    const Koa       = require("koa");
    const app       = new Koa();

    app.use(async ctx => {
      ctx.body = "hello https";
    });

    http.createServer(app.callback()).listen(3000);

    const options = {
      key: fs.readFileSync("./config/test.server.ke.com-key.pem", "utf8"),
      cert: fs.readFileSync("./config/test.server.ke.com.pem", "utf8")
    };
    https.createServer(options, app.callback()).listen(443);
   ```