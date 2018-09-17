const user = require('../model/user');
const secret = 'jwt-test';
const jwt = require('jsonwebtoken');

async function registry(ctx){
  let username = ctx.request.body.username;
  let password = ctx.request.body.password;
  let result = await user.createUser(username, password);
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
}

async function login(ctx){
  let userToken,token;
  let username = userToken = ctx.request.body.username;
  let password  = ctx.request.body.password;
  token = jwt.sign({data: userToken}, secret, {expiresIn: '12h'});
  let result = await user.getUser(username,password);
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
}

module.exports = {
  registry,
  login,
}