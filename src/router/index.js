import Vue from 'vue'
import VueRouter from 'vue-router'
// import Content from "@/components/content/content.vue"
// import Home from "@/components/all/home"
// import Classify from "@/components/all/classify"
// import Cart from "@/components/all/cart"
// import My from "@/components/all/my"
const Main =()=>import('../pase/main')
const Lei =()=>import('@/components/List/list_main.vue')
// const HelloWorld = ()=>import("@/components/HelloWorld")
import Home from "@/components/all/home.vue"
import Classify from "@/components/all/classify"
import Cart from "@/components/all/cart"
import My from "@/components/all/my"
import Search from "@/components/all/search"
import Search1 from "@/components/search/search1"

// import Com from "@/components/search/com"
// import Newgoods from "@/components/search/newgoods"
// import Price from "@/components/search/price"
// import Num from "@/components/search/num"

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
    path:'/leibiao/:index',
    component:Lei
  },
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
    path:'/search1',

    component:Search1,
   },
   {
       path:'/search',
       name:"search",
      component:Search,
        // children:[
        //   {
        //     path:'/com',
        //     component:Com,
        //   },
        //   {
        //     path:'/newgoods',
        //     component:Newgoods,
        //   },
        //   {
        //     path:'/num',
        //     component:Num,
        //   },
        //   {
        //     path:'/price',
        //     component:Price,
        //   }
        // ]
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