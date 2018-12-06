<template>
  <div id="admin">
     <app-header></app-header>
     <div class="size">admin</div>
  </div>
</template>




<script>

import Header from './Header'

export default {
  name: 'admin',
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
