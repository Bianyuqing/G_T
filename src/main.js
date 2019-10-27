import Vue from 'vue'
import App from './App.vue'
import store from '@/store'
import router from "./router/index"
import  "@/vm/rem.js"
// 引入rest 
import "../public/rest/rest.css";
// 引入rem
import "./rem.js/rem.js";
// 引入axios 
import Axios from 'axios';
// 引入轮播插件
import wcSwiper from 'wc-swiper'
import 'wc-swiper/style.css'
Vue.use(wcSwiper)
Vue.prototype.$http=Axios;

Vue.config.productionTip = false;




new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
