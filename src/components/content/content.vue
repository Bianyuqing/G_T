<template>
<<<<<<< HEAD
<div>
    <div class="contt">
      
        <!-- <div class="main">
            <div>
                <router-view></router-view>

            </div>

        </div>
         <Footer></Footer> -->
          <!-- <div class="content">  -->

        <div class="box">
            <div>
                <router-view></router-view>
            </div>
           
        </div>
=======
    <div class="content">
    <!-- <header>搜索</header> -->
        <HeaderCom></HeaderCom>
        <router-view></router-view>
>>>>>>> ba70dae86eb7a97ff0e1cf04b76a9dbee1274bae
        <Footer></Footer>
    </div>
</div>

   
   
</template>

<script>
import Footer from "@/components/footer/footer"
import HeaderCom from "@/components/Header/Header"

    export default {
        data(){
            return{

            }
        },
        components:{Footer,HeaderCom}
        
    }
</script>

<style lang="scss" scoped>
   *{
       width:100%;
       height:100%;
       
   }
<<<<<<< HEAD
   .contt{
       width:100%;
       height: 100%;
       display: flex;
       flex-direction: column;
       .main{
           width: 100%;
           height:80%;
        //    overflow: hidden;
        // flex:1;
        //    display: flex;
            >div{
                width:100%;
                min-height: 103%;
            }
   .content{
       width:100%;
       height:100%;
       display:flex;
       flex-direction: column;
       
   }
   .box{
       width:100%;
       
       div{
            flex:1;
            min-height:101%;
       }
   }
   header{
       width:100%;
       height:50px;
       background:pink;
       font-size:0.3rem;
       text-align:center;
       line-height:60px;
   }
       }
   }
=======
   .content {
       width: 100%;
       height: 100%;
       flex: 1;
       overflow: auto;
   }
>>>>>>> ba70dae86eb7a97ff0e1cf04b76a9dbee1274bae

</style>