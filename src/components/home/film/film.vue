<template>
  <div class="movies-wrap">
    <div class="movies-list">
      <div v-for="(item,index) in movieList" :key="index">
        <movie :offset="item.offset" @getList="getList"></movie>
      </div>
    </div>
  </div>
</template>
<script>
import movie from './movie_item.vue'
import {throttle} from '../../../assets/js/utils.js' 
export default {
  data(){
    return {
      movieList:[], //控制展示多个组件的数组
      offset:0,
      pre_height:"",
      height:"",
    }
  },
  components:{
    movie,
  },
  mounted(){
    this.movieList.push({offset:this.offset});
    let getMovies = throttle(this.getNewList, 1000)
    window.addEventListener('touchmove', () => {
      getMovies();
    })
  },
  methods:{
    getList(height){
      this.pre_height = height;
      this.height = document.querySelector('.movies-list').offsetHeight;
    },
    getNewList(){
      if(this.height - document.documentElement.scrollTop - document.body.offsetHeight < this.pre_height/3){
        this.offset ++;
        if(this.offset < 9){
          this.movieList.push({offset:this.offset*5});
        }
      }
    },
  }
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

</style>

