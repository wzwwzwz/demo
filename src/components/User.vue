<template>
  <div id="user">
     <app-header></app-header>
     <div class="size">User</div>
  </div>
</template>




<script>

import Header from './Header'

export default {
  name: 'user',
  data () {
    return {
    }
  },
  components:{
    "app-header":Header,

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
