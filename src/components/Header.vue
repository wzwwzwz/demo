<template>
  <div id="Header" class="container">
    <div class="row clearfix">
      <div class="col-md-8 column row">
        <ul>
          <LI class=" "><router-link :to="{name:'Home'}">Home</router-link></LI>
          <LI class=" "><router-link :to="{name:'Admin'}">Admin</router-link></LI>
          <LI class=" "><router-link :to="{name:'User'}">User</router-link></LI>
          <LI class=" "><router-link :to="{name:'About'}">About</router-link></LI>
        </ul>
      </div>
      <div class="col-md-4 column">
        <LI><router-link :to="{name:'Login'}">login</router-link></LI>
      </div>
    </div>
  </div>


 
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul{
  margin-bottom: 20px;
  display: flex;
}
li{
  list-style-type: none; 
  /* display: inline-block; */
  margin: 0 10px;
  flex: 1;
}&hover{
  cursor: pointer;
}

</style>
