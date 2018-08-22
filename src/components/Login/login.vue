<template>
  <div class="login-wrap">
    <div class="input-wrap">
      <el-tabs v-model="activeName" :stretch="true">
        <el-tab-pane label="登录" name="login">
          <el-input v-model="sign_in" placeholder="请输入用户名"></el-input>
        </el-tab-pane>
      </el-tabs>
      <el-tabs v-model="activeName">
        <el-tab-pane label="注册" name="sign_up">
          <el-input v-model="sign_up" placeholder="请输入用户名"></el-input>
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
      activeName:"login",
    }
  },
  methods:{
    handleClick(){},
  },
}
</script>
<style>
.input-wrap{
  width: 400px;
  height: 200px;
  margin: 0 auto;
}
</style>

