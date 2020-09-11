const http      = require("http");
const https     = require("https");
const fs        = require("fs");
const Koa       = require("koa");
const app       = new Koa();

app.use(async ctx => {
  // ctx.cookies.set('name', 'ljh222')
  ctx.body = "hello https";
});

http.createServer(app.callback()).listen(3000);

const options = {
  key: fs.readFileSync("./config/test.server.ke.com-key.pem", "utf8"),
  cert: fs.readFileSync("./config/test.server.ke.com.pem", "utf8")
};
https.createServer(options, app.callback()).listen(443);