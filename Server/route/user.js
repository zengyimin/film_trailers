const Router = require('koa-router');
const {sequelize} = require('../db/index');
const {toTime} = require('../utils/index')
const router = new Router();

router.post('/api/user/login', async(ctx)=>{
  let username = ctx.request.body.username;
  let password  = ctx.request.body.password;
  let result = await sequelize.import('../schema/user').findOne({
    where : {
      name : username,
      password : password,
    }
  })
  if(result !== null){
    ctx.body = {
      success:true,
      msg:"登录成功",
    }
  }else{
    ctx.body = {
      success: false,
      msg:"用户名或密码有误",
    }
  }
})

router.post('/api/user/registry', async(ctx) => {
  let username = ctx.request.body.username;
  let password  = ctx.request.body.password;
  let createdAt = ctx.request.body.createdAt;
  let updatedAt = ctx.request.body.updatedAt;

  let result = await sequelize.import('../schema/user').create({
    name : username,
    password : password,
    createdAt: "Thu Aug 23 2018 00:14:19 GMT+0800 ",
    updatedAt: "Thu Aug 23 2018 00:14:19 GMT+0800 ",
  })
  console.log(result);
  ctx.body = "aa";
})

exports.login = router;