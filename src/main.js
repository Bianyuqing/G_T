import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import  "@/vm/rem.js"
<<<<<<< HEAD
import router from "./router/index"
import store from './store'
Vue.prototype.$http=Axios



Vue.config.productionTip = false


=======
>>>>>>> 9650c86bd8b7fd8743fd3387f6bf614bf39ff597
// 引入rest 
import "../public/rest/rest.css";
// 引入rem
// 引入axios 
// import Axios from 'axios';
// 引入轮播插件
import wcSwiper from 'wc-swiper'
import 'wc-swiper/style.css'
Vue.use(wcSwiper)
Vue.prototype.$http=Axios;

Vue.config.productionTip = false




new Vue({
  router,
<<<<<<< HEAD
  store,
=======
 
>>>>>>> 9650c86bd8b7fd8743fd3387f6bf614bf39ff597
  render: h => h(App),
}).$mount('#app')
