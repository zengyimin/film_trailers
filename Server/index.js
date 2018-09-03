const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const router = new Router();
const {useRouter} = require('./utils/router.js');
const user = require('./route/user.js');
const secret = "jwt-test";
const koaJwt = require('koa-jwt');

app.use(bodyParser());
app.use(koaJwt({secret}).unless({
  path: [/^\/api\/user\/login/,/^\/api\/user\/registry/] //数组中的路径不需要通过jwt验证
}))
useRouter(app,user.login);

app
  .listen(9090);