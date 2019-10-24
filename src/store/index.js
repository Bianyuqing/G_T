import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import state from './state'
import actions from './actions'
import mutations from './mutions'
import getters from './getter'
export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})