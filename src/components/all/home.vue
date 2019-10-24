<template>
<<<<<<< HEAD
    <div class='home_big'>
        <Banner></Banner>
        <Tuijian></Tuijian>
        <NewCom></NewCom>
        <HotCom></HotCom>
        <Shafa></Shafa>
        <BedCom></BedCom>
        <ManyCom></ManyCom>
        
=======
    <div>
        ddd
>>>>>>> ba70dae86eb7a97ff0e1cf04b76a9dbee1274bae
    </div>
</template>

<script>
import "../../rem.js/rem.js";

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
  },
            
         
        data(){
            return{

            }
        }
    }
</script>

<style lang="scss" scoped>
.home_big{
    position: relative;
}
</style>