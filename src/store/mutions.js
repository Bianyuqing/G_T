const mutations={
    WD(state,params){
        state.title=params

    },
    ADDCART(state,item){
         
        //   alert('1234567')
        var index=state.cart.some((it,key,arr)=>{
                    return it.id==item.id
                })  
              
               
                if(!index){
                    item.num=1,
                    item.yes=true,
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
}
export default mutations