<template>
  <div class="index-warp">
    <div class="index-header">
      <div class="index-menu">
        <div class="menu-item">
          <router-link to='/home/film'>电影</router-link>
          </div>
        <div class="menu-item">
          <router-link to='/home/pic'>图片</router-link>
        </div>
      </div>
    </div>
    <div class="index-container">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {

    }
  },
  methods:{
    getTest(){
      this.$http.get('/api/test1').then((res) => {
        console.log(res);
      })
    },
  },
  mounted(){
    this.getTest();
  },
}
</script>
<style>
.index-header{
  position: fixed;
  box-sizing: border-box;
  width: 100vw;
  height: 2.8rem;
  background-color: #f25353;
  padding-top: 1.8rem;
  z-index: 2;
}
.index-menu{
  display: flex;
  justify-content: center;
  height: 1rem;
  font-size: 14px;
}
.menu-item{
  position: relative;
  width: 33.3vw;
}
.index-menu a{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  display: block;
  text-align: center;
  text-decoration:none;
  width: 20vw;
  color: #fff;
  height: .6rem;
  line-height:  .6rem;
}
.index-menu .router-link-exact-active{
  border-radius: 25px;
  background-color: #F96161;
  box-shadow: 0px 0px 35px #D94242;

}
.index-container{
  position: absolute;
  top: 2.6rem;
  width: 100vw;
  min-height:6rem; 
  z-index: 1;
}
</style>

