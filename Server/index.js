const Koa = require('koa');
const app = new Koa();

app.use(async (ctx)=>{
  ctx.body = "测试首页";
})

app
  .listen(9090);