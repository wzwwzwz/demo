import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

/*引入路由组件*/
import Home from '@/components/Home'
import Admin from '@/components/Admin'
import User from '@/components/User'
import Login from '@/components/Login'
import About from '@/components/About'

/*引入二级路由组件*/
import Contact from '@/components/about/Contact'
import Phone from '@/components/about/Phone'

/*引入三级路由组件*/
import Address from '@/components/about/contact/Address'
import ContacPerson from '@/components/about/contact/ContacPerson'

/*使用路由*/
Vue.use(Router)


/*路由配置*/
export default new Router({
	mode:'history',
  /*滚动行为*/
  scrollBehavior (to, from, savedPosition) {
    //return 期望滚动到哪个的位置
    //return { reselector:'.img'}
    if(savedPosition){
      return savedPosition
    }else{
      return {x:0,y:0}
    }
  },
  routes: [
    /*当用户输入错误时，默认跳转路径*/
    {
      path: '*',
      redirect:"/"
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/User',
      name: 'User',
      /* component: User,*/
      /*将component改成components*/
      components:{
        /*默认是user界面*/
        default:User,
        'Phone':Phone
      }
    },
    {
      path: '/Admin',
      name: 'Admin',
      component: Admin,
      /*路由独享守卫：直接调用方法*/
      beforeEnter:(to,from,next)=>{
        alert("抱歉！请先登录");
        next('/Login');
      }
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/About',
      name: 'About',
      component: About,
      redirect:"/Contact",     /*路由重定向，默认路径*/
      children:[
        {
          path: '/Contact',
          name: 'Contact',
          component: Contact,
          redirect:'/Address',
          children:[
            {
              path: '/Address',
              name: 'Address',
              component: Address
             },
             {
              path: '/ContacPerson',
              name: 'ContacPerson',
              component: ContacPerson
             },
          ]
        },
        {
          path: '/Phone',
          name: 'Phone',
          component: Phone
        },
      ]
    },
  ],
  
})


