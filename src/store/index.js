import Vue from "vue"
import Vuex from "vuex"
import per from 'vuex-persistedstate'

Vue.use(Vuex)
const state={

    cart:[],
   
}

const mutations={
    ADDCART(state,item){
         
        //   alert('1234567')
        var index=state.cart.some((it,key,arr)=>{
                    return it.id==item.id
                })  
              
               
                if(!index){
                    item.num=1
                    state.cart.unshift(item)
                   
                }else{
                    
                    var i=state.cart.findIndex((v) => {
                        return item.id==v.id
                    });      
                    state.cart[i].num+=1;
                }
          
    },
    addNum(state,index){
        state.cart[index].num++
    },
    SUBNUM(state,index){
        state.cart[index].num--
    },
    ADDNUM(state,index){
        state.cart[index].num+=1
    },
    // del(state,key){
    //     state.cart.splice(key,1)
    // }
}
const actions={
     addcart({commit},item){
             commit('ADDCART',item)
     },
     subnum({ commit },index){
         commit('SUBNUM',index)
     },
     addnum({ commit },index){
        commit('ADDNUM',index)
    }
}
export default new Vuex.Store({
  plugins:[per()],
       state,mutations,actions,
})