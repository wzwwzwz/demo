<template>
  <div id="contact">
     <div class="content">
       <p>请联系我们：</p>
       <p>123456789@qq.com</p>
       <router-link  :to="{name:'Address'}">Address</router-link>
       <router-link  :to="{name:'ContacPerson'}">ContacPerson</router-link>
       
     <div class="">
       <router-view></router-view>
     </div>
     </div>
     
  </div>
</template>




<script>

/*import Header from '../Header'*/

export default {
  name: 'contact',
  data () {
    return {
     
    }
  },
  /*components:{
    "app-header":Header
  }*/
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li{
list-style-type: none; 
}
.content a{
  margin: 0 10px;
}
</style>
