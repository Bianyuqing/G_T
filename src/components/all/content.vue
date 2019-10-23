<template>
    <div>
        <header>搜索</header>
        <router-view></router-view>
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
   header{
       width:100%;
       height:50px;
       background:pink;
       font-size:0.3rem;
       text-align:center;
       line-height:60px;
   }
</style>