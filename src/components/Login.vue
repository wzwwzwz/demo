<template>
  <div id="login">
     <app-header></app-header>
     <div class="size">login</div>
  </div>
</template>




<script>

import Header from './Header'

export default {
  name: 'login',
  data () {
    return {
     
    }
  },
  components:{
    "app-header":Header
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
