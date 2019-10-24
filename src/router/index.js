import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/components/all/home"
import Classify from "@/components/all/classify"
import Cart from "@/components/all/cart"
import My from "@/components/all/my"
const Main =()=>import('../pase/main')
// const HelloWorld = ()=>import("@/components/HelloWorld")
// 引入menu的路由
import Details from '../components/all/details.vue';

Vue.use(VueRouter)

const routes=[
   {
    path:'/',
    redirect:'/home' 
   },
  //  {
  //   path:'/footer',
  //   component:Footer
  //  },
  {
    path:"/wdxiang/:title",
    component:Main,
    name:"wdxiang"
  },
   {
     path:'/home',
     component:Home,
     children:[
      {
        path:'/details',
        component:Details,
      }
     ]

   },
   {
    path:'/classify',
    component:Classify,
  },
  {
    path:'/cart',
    component:Cart,
  },
  {
    path:'/my',
    component:My,
  },

]
const router = new VueRouter({
    routes,
    linkActiveClass:"red",
});
export default router;