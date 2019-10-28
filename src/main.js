import Vue from 'vue'
import App from './App.vue'
import router from "./router/index"
import  "@/vm/rem.js"
Vue.config.productionTip = false
// 引入rest 
import "../public/rest/rest.css";
// 引入rem
// import "./rem.js/rem.js";
// 引入axios 
import Axios from 'axios';
// 引入轮播插件
import wcSwiper from 'wc-swiper'
import 'wc-swiper/style.css'
Vue.use(wcSwiper)
Vue.prototype.$http=Axios;
// 轮播

import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)

new Vue({
  router,
  
  render: h => h(App),
}).$mount('#app')
