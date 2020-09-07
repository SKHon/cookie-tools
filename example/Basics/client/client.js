/*
 * @Author: liujianghong
 * @Date: 2020-01-09 16:53:01
 * @LastEditTime: 2020-09-04 14:13:12
 * @Descripttion: client
 */
var Koa = require('koa');
var router = require('koa-router')(); /*引入是实例化路由** 推荐*/
var fs = require('fs');
//实例化
var app = new Koa();

router.get('/', async ctx => {
  ctx.set('content-type','text/html')
  ctx.body = fs.readFileSync('./cookie.html')
});

app.use(router.routes()); /*启动路由*/


app.listen(8888, () => {
  console.log(`prot 8888 is listening...`);
});