import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import router from "./router/index"
import  "@/vm/rem.js"
Vue.prototype.$http=Axios



Vue.config.productionTip = false


new Vue({
  router,
  
  render: h => h(App),
}).$mount('#app')
