/* test的接口 */

const Router = require('koa-router');
const router = new Router();

router.get('/api/test1', async(ctx)=>{
  ctx.body = {
    test:111,
    test1:112,
    test2:131,
    test3:1114,
  }
})

exports.tests = router;