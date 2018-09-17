const Router = require('koa-router');
const {sequelize} = require('../db/index');
const router = new Router();
const {registry,login} = require('../controller/user.js');

/* 登录 */
router.post('/api/user/login', async(ctx) => login(ctx))

/* 注册 */
router.post('/api/user/registry', async(ctx) => registry(ctx));

exports.login = router;