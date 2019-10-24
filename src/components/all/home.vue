<template>
    <div>
        <h2>51找家具商城</h2>
         <router-link to="/search1" tag="p" class="p_search">搜索商品</router-link>
        
          <div class='home_big'>
        <Banner></Banner>
        <Tuijian></Tuijian>
        <NewCom></NewCom>
        <HotCom></HotCom>
        <Shafa></Shafa>
        <BedCom></BedCom>
        <ManyCom></ManyCom>
        <Footer></Footer>
        
    </div>
    </div>
   
</template>

<script>
import Footer from "@/components/footer/footer"

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
            Footer,
       },     
        data(){
            return{

            }
        }
    }
</script>

<style lang="scss" scoped>
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