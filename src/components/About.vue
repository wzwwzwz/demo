<template>
  <div id="about">
     <app-header></app-header>
     <div class="size">About</div>
     <!--  二级导航 -->
     <div class="row contant">
  <div class="col-4">
    <div class="list-group" id="list-tab" role="tablist">
       <router-link tag="li" :to="{name:'Contact'}">
        <a class="list-group-item list-group-item-action" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">
        Contact
        </a>
        </router-link>
        <router-link tag="li" :to="{name:'Phone'}">
          <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">
          Phone
          </a>
      </router-link>
    </div>
  </div>
  <div class="col-8">
    <!-- 显示二级导航的内容 -->
    <router-view></router-view>
    </div>
  </div>
</div>
  </div>
</template>




<script>

import Header from './Header'

export default {
  name: 'about',
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
.nav-size{
  width: 300px;
}
li{
  list-style-type: none;
}

.contant{
  padding: 0px 84px;
}
    
</style>
