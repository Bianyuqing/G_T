import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import  "@/vm/rem.js"
import router from "./router/index"
import store from './store'
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
      error:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3139343920,2560270781&amp;fm=26&amp;gp=0.jpg",
      loading:"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&amp;quality=100&amp;size=b4000_4000&amp;sec=1572526437&amp;di=c3b81c8b6bd61357daf04a61d266e78e&amp;src=http://img.zcool.cn/community/01e5b9554116a0000001e71b366b39.jpg"
})
Vue.prototype.$http=Axios



Vue.config.productionTip = false


// 引入rest 
import "../public/rest/rest.css";
// 引入rem
// 引入axios 
// import Axios from 'axios';
// 引入轮播插件
import wcSwiper from 'wc-swiper'
import 'wc-swiper/style.css'
Vue.use(wcSwiper)





new Vue({
  router,
  store,
 
  render: h => h(App),
}).$mount('#app')
