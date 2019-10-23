import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import router from "./router/index"
import  "@/vm/rem.js"
Vue.prototype.$http=Axios



Vue.config.productionTip = false
<<<<<<< HEAD


=======
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
>>>>>>> 6e03b106b3ed75df2eb0b81875b8f663d4621bf3
new Vue({
  router,
  
  render: h => h(App),
}).$mount('#app')
