import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/components/all/home.vue"
import Classify from "@/components/all/classify"
import Cart from "@/components/all/cart"
import My from "@/components/all/my"
import Search from "@/components/all/search"
import Search1 from "@/components/search/search1"
import Footer from "@/components/footer/footer"

// import Com from "@/components/search/com"
// import Newgoods from "@/components/search/newgoods"
// import Price from "@/components/search/price"
// import Num from "@/components/search/num"

// 引入menu的路由
import Details from '@/components/all/details.vue';

Vue.use(VueRouter)

const routes=[
  {
    path:"/",
    redirect:"/home"
  },
   {
     path:'/home',
     component:Home,
     
   },
   {
    path:'/search1',

    component:Search1,
   },
   {
       path:'/search',
       name:"search",
      component:Search,
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
    path:'/home/details',
    component:Details,
  },
  {
    path:'/footer',
    component:Footer,
    children:[
        {
          path:"/",
          redirect:"/home"
        },  
    ]
  }
]
const router = new VueRouter({
    routes,
    linkActiveClass:"red",
});
export default router;