import Vue from 'vue'
import App from './App.vue'
<<<<<<< HEAD

Vue.config.productionTip = false

new Vue({
=======
import router from "./router/index"
import  "@/vm/rem.js"
Vue.config.productionTip = false

new Vue({
  router,
  
>>>>>>> 727129f6534dce4d12815408662c5d964132bceb
  render: h => h(App),
}).$mount('#app')
