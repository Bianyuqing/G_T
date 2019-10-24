import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
var state={

    cart:[],
   
}
var actions={
         
}
var mutations={
    addCart(state,obj){
         state.cart.unshift(obj)
    },
    // addNum(state,index){
    //     state.cart[index].num+=1
    // },
    // jian(state,index){
    //     state.cart[index].num-=1
    // },
    // jia(state,index){
    //     state.cart[index].num+=1
    // },
    // del(state,key){
    //     state.cart.splice(key,1)
    // }
}

export default new Vuex.Store({
       state,mutations,actions,
})