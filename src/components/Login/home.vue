<template>
  <div class="home-page">
    <div class="home-title">
      <img class="home-logo" src="../../assets/img/logos.png" alt="movie">
      <p>LOVE-MOVIE</p>
    </div>
    <login></login>
  </div>  
</template>
<script>
import login from './login.vue'
export default {
  data(){
    return {}
  },
  components:{
    login,
  }
}
</script>
<style>
.home-page{
  position: relative;
  width: 100vw;
  height:100vh;
  font-size: 14px;
  background-color: #f25353;
}
.home-title{
  position: absolute;
  top: 3rem;
  width: 100vw;
  height:2rem;
}
.home-logo{
  width: 1rem;
  height: 1rem;
}
.home-title p{
  color: #fff;
  font-size: 16px;
}
</style>

