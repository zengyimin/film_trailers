<template>
  <div class="login-wrap">
    <div class="input-wrap">
      <div class="username-warp">
        <div class="icon-wrap">
          <div class="icon-username"></div>
        </div>
        <el-input v-if="isLogin" v-model="username" class="username-input" placeholder="请输入登录用户名"></el-input>
        <el-input v-else v-model="reg_username" class="username-input" placeholder="请输入注册用户名"></el-input>
      </div>
      <div class="password-warp">
        <div class="icon-wrap">
          <div class="icon-password"></div>
        </div>
        <el-input v-if="isLogin" v-model="password" type="password" class="password-input" placeholder="请输入登录密码"></el-input>
        <el-input v-else v-model="reg_password" type="password" class="password-input" placeholder="请输入注册密码"></el-input>
      </div>
      <div class="input-button">
        <el-button v-if="isLogin" type="primary" class="login-btn" @click="login" round>登录</el-button>
        <el-button v-else type="primary" class="login-btn" @click="registry" round>注册</el-button>
        <p v-if="isLogin">没有账号？请<span class="btn-registry" @click="toRegistry">注册</span></p>
      </div>
      <span class="danger">{{danger}}</span>
    </div>
  </div>
</template>
<script>
import {Vaildation} from '../../assets/js/utils.js' 
export default {
  data(){
    return {
      username:"",
      password:"",
      reg_username:"",
      reg_password:"",
      danger:"",
    }
  },
  props:["isLogin"],
  methods:{
    toRegistry(){
      this.$emit("toRegistry");
    },
    login(){
      let vaild = [
        {
          value:this.username,
          type: "用户名",
          rules:[
            "isDefine", 
            {
              name:"limit",
              check: true,
              min:5,
              max:12
            }
          ]
        },
        {
          value:this.password,
          type: "密码",
          rules:[
            "isDefine", 
            {
              name:"mix",
              check:true,
            },
            {
              name:"limit",
              check: true,
              min:5,
              max:12
            }
          ]
        }
      ];
      let vaildation = new Vaildation();
      vaildation.vaild_item = vaild;
      let result = vaildation.check();
      if(!result.check){
        this.danger = result.type;
      }
      if(vaildation.isCheck){
        this.danger = '';
        this.$http.post('/api/user/login',{
          username: this.username,
          password: this.password,
        }).then((res) => {
          localStorage.setItem('access_token',res.data.token);
          this.$router.push('/home/film');
        })
      }
    },
    registry(){
      let that = this;
      let vaild = [
        {
          value:this.reg_username,
          type: "用户名",
          rules:[
            "isDefine", 
            {
              name:"limit",
              check: true,
              min:5,
              max:12
            }
          ]
        },
        {
          value:this.reg_password,
          type: "密码",
          rules:[
            "isDefine", 
            {
              name:"mix",
              check:true,
            },
            {
              name:"limit",
              check: true,
              min:5,
              max:12
            }
          ]
        }
      ];
      let vaildation = new Vaildation();
      vaildation.vaild_item = vaild;
      let result = vaildation.check();
      if(!result.check){
        this.danger = result.type;
      }
      if(vaildation.isCheck){
        this.danger = "";
        this.$http.post('/api/user/registry',{
          username: this.reg_username,
          password: this.reg_password,
        })
        .then((res) => {
          this.danger = res.data.msg;
          let t = setTimeout(() => {
            this.$emit('toHome');
          },1000)
        })
      }
    }
  },
}
</script>
<style>
.login-wrap{
  position: absolute;
  bottom: 0;
  width: 100vw;
  height: 5.4rem;
  background-color: #fff;
}
.input-wrap{
  position: relative;
  width: 6rem;
  height: 3rem;
  margin: 0 auto;
}
.username-warp,.password-warp{
  position: relative;
}
.password-warp{
  margin-top: .6rem;
}
.icon-wrap{
  position: relative;
  display: inline-block;
  width: .5rem;
  height: .5rem;
}
.icon-username,.icon-password{
  position: absolute;
  top: .18rem;
  background-image: url('../../assets/img/film1.png') ;
  background-repeat: no-repeat;
  width: .5rem;
  height: .5rem;
  background-size: .5rem .5rem;
}
.icon-password{
  background-image: url('../../assets/img/film2.png') ;
}
.username-input,.password-input{
  width: 5rem;
}
.username-input input,.password-input input{
  border: none;
  border-bottom: 1px solid #f25353;
  border-radius: 0;
}
.input-button{
  margin-top: .8rem;
  padding-left: .4rem;
}
.login-btn{
  width: 5rem;
}
.input-button p{
  margin: .2rem;
}
.login-btn{
  color: #fff;
  cursor: pointer;
}
.btn-registry,.danger{
  color: #f25353;
}
.danger{
  position: absolute;
  bottom:.2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 4rem;
}
</style>

