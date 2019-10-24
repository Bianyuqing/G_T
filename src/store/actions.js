const actions={
    wd({commit},params){
        console.log(params)
        commit("WD")
    }
}
export default actions