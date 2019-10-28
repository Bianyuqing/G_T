const actions={
    wd({commit},params){
        console.log(params)
        commit("WD")
    },
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
export default actions