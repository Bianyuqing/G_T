import Vue from 'vue'
import VueRouter from 'vue-router'
import Content from "@/components/content/content.vue"
import Home from "@/components/all/home"
import Classify from "@/components/all/classify"
import Cart from "@/components/all/cart"
import My from "@/components/all/my"


Vue.use(VueRouter)

const routes=[
   {
    path:'/',
    redirect:'/content' 
   },
  //  {
  //   path:'/footer',
  //   component:Footer
  //  },
  {
    path:"/content",
    name:"Content",
    component: Content,
    children: [
      {
        path:"/",
        redirect:"/home"
      },
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
     }
    ]
  }
   
]
const router = new VueRouter({
    routes,
    linkActiveClass:"red",
});
export default router;