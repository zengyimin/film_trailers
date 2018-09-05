<template>
  <div>这是首页首页</div>
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

</style>

