import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/components/all/home"
import Classify from "@/components/all/classify"
import Cart from "@/components/all/cart"
import My from "@/components/all/my"
// 引入menu的路由
import Details from '../components/all/details.vue';
import Xiang from '../components/all/xiangCom.vue';

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
     path:'/home',
     component:Home,
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
  {
    path:'/home/details/:name',
    component:Details,
  },
   {
        path:'/xiang/:index/:name',
        component:Xiang,
  }
]
const router = new VueRouter({
    routes,
    linkActiveClass:"red",
});
export default router;