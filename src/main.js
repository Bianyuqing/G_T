import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import "./rem/rem.js"
import "../public/rest/reset.css"

new Vue({
  render: h => h(App),
}).$mount('#app')
