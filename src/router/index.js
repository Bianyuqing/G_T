import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/components/all/home"
import Classify from "@/components/all/classify"
import Cart from "@/components/all/cart"
import My from "@/components/all/my"
import Search from "@/components/all/search"
import Com from "@/components/search/com"
import Newgoods from "@/components/search/newgoods"
import Price from "@/components/search/price"
import Num from "@/components/search/num"


Vue.use(VueRouter)

const routes=[
   {
     path:'/home',
     component:Home,
   },
   {
       path:'/search',
        component:Search,
        children:[
          {
            path:'/com',
            component:Com,
          },
          {
            path:'/newgoods',
            component:Newgoods,
          },
          {
            path:'/num',
            component:Num,
          },
          {
            path:'/price',
            component:Price,
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
  }
]
const router = new VueRouter({
    routes,
    linkActiveClass:"red",
});
export default router;