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

        <!-- <div class="box">
=======
    <div class="content">
       
        <div class="box">
>>>>>>> 9650c86bd8b7fd8743fd3387f6bf614bf39ff597
            <div>
                <router-view></router-view>
               
            </div>
           
<<<<<<< HEAD
        </div> -->
    <!-- <div class="content"></div> -->
    <!-- <header>搜索</header> -->
        <HeaderCom></HeaderCom>
        <router-view></router-view>
        <Footer></Footer>
=======
        </div>
        
>>>>>>> 9650c86bd8b7fd8743fd3387f6bf614bf39ff597
    </div>
</div>

   
   
</template>

<script>
<<<<<<< HEAD
import Footer from "@/components/footer/footer"
import HeaderCom from "@/components/Header/Header"
=======
// import Footer from "@/components/footer/footer"
>>>>>>> 9650c86bd8b7fd8743fd3387f6bf614bf39ff597

    export default {
        data(){
            return{

            }
        },
<<<<<<< HEAD
        components:{Footer,HeaderCom}
        
=======
        // components:{
        //     Footer,
        // }
>>>>>>> 9650c86bd8b7fd8743fd3387f6bf614bf39ff597
    }
</script>

<style lang="scss" scoped>
   *{
       width:100%;
       height:100%;
       
   }
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
       
       .box>div{
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
<<<<<<< HEAD
       }
   }
   .content {
       width: 100%;
       height: 100%;
       flex: 1;
       overflow: auto;
   }

=======
 
>>>>>>> 9650c86bd8b7fd8743fd3387f6bf614bf39ff597
</style>