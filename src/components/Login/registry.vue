<template>
  <div class="registry-wrap">
    <div class="registry-header">
      <div class="registry-close close" @click="close_registry"></div>
      <div class="registry-mask"></div>
    </div>
    <div class="registry-content">
      <div>
        <login :isLogin='false' @toHome="close_registry"></login>
      </div>
    </div>
  </div>
</template>
<script>
import login from './login.vue'
export default {
  components:{
    login,
  },
  methods:{
    close_registry(){
      this.$emit('closeReg');
    },
  },
}
</script>
<style>
.registry-wrap{
  position: absolute;
  left: 0vw;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
}
.registry-header{
  width: 100vw;
  height: 7rem;
  background: url(../../assets/img/summer.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.registry-mask{
  width: 100vw;
  height: 7rem;
  background-color: rgba(244,53,63,0.6);
}
.close{
  background-image: url(../../assets/img/close.png);
  background-repeat: no-repeat;
}
.registry-close{
  position: absolute;
  top: .5rem;
  left: .5rem;
  width: .5rem;
  height: .5rem;
  background-size: .5rem .5rem;
}
</style>

