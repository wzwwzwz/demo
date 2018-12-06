<template>
  <div id="home">
     <app-header></app-header>
     <button class="btn btn-primary" @click="gotoup">跳转到上一级</button>
     <button class="btn btn-primary" @click="gotoreplace1">replace跳转1</button>
     <button class="btn btn-primary" @click="gotoreplace2">replace跳转2</button>
     <button class="btn btn-primary" @click="gotopush1">push跳转1</button>
     <button class="btn btn-primary" @click="gotopush2">push跳转2</button>
     <div class="container" style="width:100%;margin-top: 50px;">
       <img class="img-responsive" style="width:100%" src="../assets/3.jpg">
       <img class="img-responsive" style="width:100%" src="../assets/1.jpg" >
       <img class="img-responsive" style="width:100%" src="../assets/2.jpg" >
     </div>
  </div>

</template>




<script>

import Header from './Header'

export default {
  name: 'home',
  data () {
    return {
     
    }
  },
  components:{
    "app-header":Header
    
  },
  methods:{
    gotoup(){
      this.$router.go(-1)
    },
    gotoreplace1(){
      this.$router.replace('User')
    },
    gotoreplace2(){
      this.$router.replace({name:"User"})
    },
    /*push可以传多个参数类型*/
    gotopush1(){
      this.$router.push({name:"Login"})
    },
    gotopush2(){
      this.$router.push('Admin') 
    },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
