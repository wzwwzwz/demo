<template>
  <div id="app">
   <router-view></router-view>
   <!-- 路由复用 -->
   <router-view name="Phone"></router-view>
  </div>
</template>




<script>
export default {
  name: 'App'
}
</script>




<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 0 20px;
}
.size{
  font-size:28px;
  margin: 50px 0;
}
*{
  margin:0;
  padding:0;
}
</style>
