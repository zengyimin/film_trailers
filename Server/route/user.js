const Router = require('koa-router');
const {sequelize} = require('../db/index');
const {toTime} = require('../utils/index')
const router = new Router();
const secret = 'jwt-test';
const jwt = require('jsonwebtoken');

let userToken;
let token;

router.post('/api/user/login', async(ctx)=>{
  let username = ctx.request.body.username;
  let password  = ctx.request.body.password;
  userToken = ctx.request.body.username;
  token = jwt.sign({data: userToken}, "jwt-test", {expiresIn: '12h'})
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
      token:token,
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
  })
  if(result !== null){
    ctx.body = {
      success:true,
      msg:"注册成功",
    }
  }else{
    ctx.body = {
      success: false,
      msg:"注册失败",
    }
  }
})

exports.login = router;