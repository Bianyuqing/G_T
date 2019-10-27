<template>
       <div class="x_d">  
           
            <header>
                <Header></Header>
            </header>

           <main>
               <div>

                        
                         <router-link to="/search1" tag="p" class="p_search">搜索商品</router-link>
        
                         <div class='home_big'>
                                <Banner></Banner>
                                <Tuijian></Tuijian>
                                <NewCom></NewCom>
                                <HotCom></HotCom>
                                <Shafa></Shafa>
                                <BedCom></BedCom>
                                <ManyCom></ManyCom>
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

import Search from "@/components/all/search"
// 引入banner部分
import Banner from '../Banner'
// 引入品牌推荐部分
import Tuijian from '../Tuijian'
// 引入新品数据
import NewCom from '../NewCom'
// 引入热卖部分
import HotCom from '../HotCom'
// 引入热卖沙发部分
import Shafa from '../Shafa'
// 引入床部分
import BedCom from '../BedCom'
// 引入更多部分
import ManyCom from '../manyCom'

    export default {
        components: {
            // Footer
             Banner,
            Tuijian,
            NewCom,
            HotCom,
            Shafa,
            BedCom,
            ManyCom,
            Header,
            Footer,
       },     
        data(){
            return{

            }
        }
    }
</script>

<style lang="scss" scoped>
body,html{
  width:100%;
  height:100%;
  font-size:0.16rem;
  box-sizing:border-box;
}







    .p_search{
         width:100%;
         height:0.7rem;
        //  border:1px solid;
         text-align:center;
         line-height:0.7rem;
         color:#ccc;
    }
.home_big{
    position: relative;
}
h2{
    width:100%;
    height:0.7rem;
    // border:1px solid;
    text-align:center;
    line-height:0.7rem;
    font-size:20px;
    font-weight:bold;
}

</style>