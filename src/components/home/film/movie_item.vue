<template>
  <div>
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
</template>
<script>
export default {
  data(){
    return {
      moviesList:[],
      pre_height: '',
    }
  },
  props:['offset'],
  mounted(){
    this.getLists();
  },
  methods:{
    getLists(){
      console.log(this.offset);
      this.$http.get('/api/movie/getList?offset=' + this.offset).then((res) => {
        this.moviesList = res.data.data;
        this.$nextTick(() => {
          this.pre_height = document.querySelector('.movies').offsetHeight;
          this.$emit('getList', this.pre_height); //告诉父组件已经获得数据并且获得元素的高了
        })
      });
    },
  },
}
</script>
<style>
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


