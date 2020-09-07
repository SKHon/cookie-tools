/*
 * @Author: liujianghong
 * @Date: 2020-01-09 16:53:01
 * @LastEditTime: 2020-09-04 15:45:37
 * @Descripttion: 
 */
var Koa        = require('koa');
var router     = require('koa-router')(); /*引入是实例化路由** 推荐*/
var app        = new Koa();

router.get('/setcookie', async ctx => {
  
  ctx.body = {page: 'setcookie'}
});

router.get('/test', async ctx => {
  ctx.body = {page: 'test'}
});

router.get('/', async ctx => {
  ctx.body = {page: '首页'}
});

app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', 'http://client.ke.com:8888')
  ctx.set('Access-Control-Allow-Credentials', true)
  ctx.cookies.set('age', '20', {domain: '.server.ke.com'})
  ctx.cookies.set('path_ex', 'test', {domain: '.server.ke.com',path: '/test'})
  ctx.cookies.set('name', 'ljh', {domain: '.ke.com'})
  ctx.cookies.set('sex', 'man', {domain: '.four.test.server.ke.com'})
  return next();
})

app.use(router.routes()); 

app.listen(8889, () => {
  console.log(`prot 8889 is listening...`);
});