<template>
 <div class="x_d">  
           
            <header>
                <Header></Header>
            </header>

           <main>
               <div>
                            <div class="inp">
                                        <input type="text" v-model="txt" @keydown.enter="search()" @change="change()"/>
                                        <span @click="back()">取消</span>
                                    </div>
                                            <ul class="ul" v-show="flag">
                                    <router-link to="/com" tag="li">综合</router-link>
                                    <router-link to="/num" tag="li">销量</router-link>
                                    <router-link to="/price" tag="li">价格</router-link>
                                    <router-link to="/newgoods" tag="li">上新</router-link>
                                </ul>
                                    <div class="bian_left">
                                                <div class="list" v-for="(item,key) in arr" :key="key">
                                                        <img :src="item.img"/>
                                                        
                                                            <h4>{{item.name}}{{item.name1}}</h4>
                                                            <!-- <ul>
                                                                <li><h3>￥{{item.price}}</h3></li>
                                                                <li><h5>销量：0</h5></li>
                                                            </ul>
                                                            -->
                                                            <!-- <button @click="add(item)">加入</button> -->
                                                        </div>
                                                    
                                            </div>
               </div>
           </main>

            <footer>
                <Footer></Footer>
            </footer>
           
            </div>





   
</template>

<script>


import Footer from "@/components/footer/footer"
import Header from "@/components/header"

    export default {
 
        data(){
            return{
                txt:'',
                info:[],
                arr:[],
                flag:false,
            }
        },
//       components:{
//     Footer,
//     Header
//   }
        methods:{
            search(){ 
                var that=this
                this.arr=this.info.hot.filter((item,key,arr)=>{
                     return item.name1.indexOf(this.txt)>-1
                })
                
            },
            back(){
                this.$router.back(-1)
            },
            change(){
                this.flag=true;
            },
            // add(item){
            //       var obj={id:item.id,name:item.name,name1:item.name1,price:item.price,num:1}
            //     //   var cart=this.$store.state.cart
            //     //   var index=cart.filter((item,key,arr)=>{
            //     //       return item.id=obj.id
            //     //   })
            //     //   if(index==-1){
            //         //  cart.unshift(obj)
            //     //   }else{
            //         //  cart.num++
            //     //   }
            // }
        },

        created(){
           this.$http.get('http://localhost:8080/static/banner.json#/').then((res)=>{
               console.log(res.data)
              this.info=res.data
           })
        },
        components:{
            Footer,
            Header
        }
        
    }
</script>

<style lang="scss" scoped>
*{
    margin:0;padding:0;
    
}
img{
     width:2.8rem;
     height:2.8rem;
    
}
header{
    width:100%;
    height:0.7rem;
    display:flex;
    justify-content:center;
    align-items:center;
    h2{
        font-size:0.3rem;
        font-weight:bold;
    }
}
input{
    width:70%;
    height:0.45rem;
    background:white;
    display:block;
    outline:none;
    padding-left:10px;
    border:none;
    font-size:20px;

}
.inp{
    width:100%;
    height:0.65rem;
    display:flex;
    justify-content:space-around;
    align-items:center;
    background:rgb(242,242,242);
    
}
.ul{
     width:100%;
     height:40px;
    //  border:1px solid;
     display:flex;
     list-style:none;
     align-items:center;
}
li{
   width:25%;
   height:40px;
   list-style:none;
   text-align:center;
   line-height:40px;
}
        .list{
            display:flex;
            justify-content:space-around;
            margin-top:10px;
            div{
                width:68%;
                height:100px;
            }
            p{
                width:1rem;
                height:1rem; 
                border:1px solid;
                
            }
        }
        .bian_left{
             width:100%;
             height:100%;
             flex:1;
           
             h3{
                  font-weight:lighter;
                  margin-top:0.5rem;
             }
             h5{
                 font-weight:lighter;
             }
        }

</style>