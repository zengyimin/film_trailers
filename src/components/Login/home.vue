<template>
  <div class="home-page">
    <div class="home-header">
      <div class="home-decoration">
        <div class="movie-icon-film"></div>
      </div>
    </div>
    <div class="home-title">MOVIEO</div>
    <login :isLogin='true' @toRegistry="toRegistry"></login>
    <transition name="registry">
      <registry v-if="show_registry" @closeReg="closeReg"></registry>
    </transition>
  </div>  
</template>
<script>
import login from './login.vue'
import registry from './registry.vue'
export default {
  data(){
    return {
      show_registry:false,
    }
  },
  components:{
    login,
    registry,
  },
  methods:{
    toRegistry(){
      this.show_registry = true;
    },
    closeReg(){
      this.show_registry = false;
    },
  },
}
</script>
<style>
.home-page{
  position: relative;
  width: 100vw;
  height:100vh;
  font-size: 14px;
  background-color: #fff;
}

.home-header{
  position: relative;
  width: 100vw;
  height: 6rem;
}
.home-decoration{
  position: absolute;
  right: 0;
  width: 60vw;
  height: 5rem;
}
.movie-icon-film{
  width: 4.5rem;
  height: 5rem;
  background: url(../../assets/img/home-decoration.png) -0px -0px no-repeat;
  background-size: 5rem 5rem;
}
.home-title{
  font-size: 22px;
}

.registry-enter-active, .registry-leave-active {
  transition: left 1s;
}
.registry-enter, .registry-leave-to  {
  left: 100vw !important;
}
</style>

