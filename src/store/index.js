import Vue from 'vue'
import Vuex from 'vuex'
import per from 'vuex-persistedstate'

Vue.use(Vuex)
import state from './state'
import actions from './actions'
import mutations from './mutions'
import getters from './getter'
export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
  plugins:[per()],


})