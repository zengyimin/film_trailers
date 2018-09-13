<template>
  <div class="movies-wrap">
    <div class="movies-list">
      <div  v-for="(item,index) in moviesList" :key="index" class="movies">
        <div class="movies-pic">
          <img :src="item.trailer_img" alt="avator">
        </div>
        <div class="movies-title">
          <div class="movies-title-decor"></div>
          <p>{{item.name}}</p>
        </div>
        <div class="movie-rate">豆瓣评分:{{item.rate}}分</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      moviesList:"",
    }
  },
  mounted(){
    this.$http.get('/api/movie/getList?offset=1').then((res) => {
      this.moviesList = res.data.data;
    })
  },
}
</script>
<style>
.movies-wrap{
  font-size: 14px;
}
.movies-wrap header{
  position: fixed;
  height: .8rem;
  font-size: 14px;
  line-height: .8rem;
  text-align: left;
  padding-left: .4rem;
}
.movies{
  width: 100vw;
  height: 5.4rem;
  margin-top: .2rem;
}
.movies-pic, .movies-pic img{
  width: 100vw;
  height: 4rem;
}
.movies-title{
  position: relative;
}
.movies-title,.movie-rate{
  width: 100vw;
  height: .7rem;
  line-height: .7rem;
  text-align: left;
  padding-left: .4rem;
}
.movies-title-decor{
  position: absolute;
  left: .4rem;
  top: 50%;
  transform: translateY(-50%);
  width: .1rem;
  height: .4rem;
  background-color: #886cff;
}
.movies-title p{
  margin-left: .2rem;
}
</style>

