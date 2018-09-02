const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const router = new Router();
const {useRouter} = require('./utils/router.js');
const user = require('./route/user.js');

app.use(bodyParser());
useRouter(app,user.login);

app
  .listen(9090);