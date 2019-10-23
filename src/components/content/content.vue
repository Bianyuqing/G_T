<template>
    <div class="content">

        <div class="box">
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
</style>