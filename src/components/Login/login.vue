<template>
  <div class="login-wrap">
    <div class="input-wrap">
      <el-tabs class="login-tab" v-model="activeName" :stretch="true" @tab-click="handleClick">
        <el-tab-pane label="登录" name="login" >
          <el-input class="login-username" v-model="sign_in" placeholder="请输入登录用户名"></el-input>
          <el-input class="login-password" v-model="sign_in_password" placeholder="请输入登录密码"></el-input>
          <el-button type="primary">登录</el-button>
        </el-tab-pane>
        <el-tab-pane label="注册" name="sign_up">
          <el-input class="sign-up-username" v-model="sign_up" placeholder="请输入注册用户名"></el-input>
          <el-input class="sign-up-username" v-model="sign_up_password" placeholder="请输入注册密码"></el-input>
          <el-button type="primary">注册</el-button>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      sign_in:"",
      sign_up:"",
      sign_in_password:"",
      sign_up_password:"",
      activeName:"login",
    }
  },
  methods:{
    handleClick(){
      console.log(111);
    },
  },
}
</script>
<style>
.login-wrap{
  position: absolute;
  bottom: 0;
  background-color: #fff;
  width: 100vw;
  height: 5rem;
}
.input-wrap{
  position: relative;
  width: 4rem;
  height: 5rem;
  margin: 0 auto;
}
.login-tab{
  position: absolute;
  width:4rem;
  left: 0;
}
</style>

