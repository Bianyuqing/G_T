import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import  "@/vm/rem.js"
import router from "./router/index"
import store from './store'
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
