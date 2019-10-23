<template>
    <div class="cont">
        <header>搜索</header>
        <div class="main">
            <div>
                <router-view></router-view>

            </div>

        </div>
         <Footer></Footer>
        
    </div>
</template>

<script>
import Footer from "@/components/footer/footer"

    export default {
        data(){
            return{

            }
        },
        components:{
            Footer,
        }
    }
</script>

<style lang="scss" scoped>
   *{
       width:100%;
       height:100%;
       
   }
   .cont{
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
</style>