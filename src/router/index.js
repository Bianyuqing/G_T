import Vue from 'vue'
import VueRouter from 'vue-router'
import Content from "@/components/content/content.vue"
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
<<<<<<< HEAD
    redirect:'/home' 
=======
    redirect:'/content' 
>>>>>>> ba70dae86eb7a97ff0e1cf04b76a9dbee1274bae
   },
  //  {
  //   path:'/footer',
  //   component:Footer
  //  },
<<<<<<< HEAD
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

=======
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
   
>>>>>>> ba70dae86eb7a97ff0e1cf04b76a9dbee1274bae
]
const router = new VueRouter({
    routes,
    linkActiveClass:"red",
});
export default router;