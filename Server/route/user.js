const Router = require('koa-router');
const router = new Router();

router.get('/user/login', async(ctx)=>{
  ctx.body = "登录";
})

exports.login = router;