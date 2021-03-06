// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

/*import './css/bootstrap.min.css'*/      /*引入公共样式*/


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


/*全局守卫*/
/*router.beforeEach((to,from,next)=>{
  if(to.path == "/Login"){
  	next();
  }else{
  	alert("抱歉！请先登录");
    next('/Login');
  }
})*/
