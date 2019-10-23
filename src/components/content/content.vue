<template>
<<<<<<< HEAD:src/components/all/content.vue
    <div class="cont">
        <header>搜索</header>
        <div class="main">
            <div>
                <router-view></router-view>

            </div>

        </div>
         <Footer></Footer>
=======
    <div class="content">

        <div class="box">
            <div>
                <router-view></router-view>
            </div>
           
        </div>
        <Footer></Footer>
>>>>>>> 6e03b106b3ed75df2eb0b81875b8f663d4621bf3:src/components/content/content.vue
        
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
<<<<<<< HEAD:src/components/all/content.vue
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
=======
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
>>>>>>> 6e03b106b3ed75df2eb0b81875b8f663d4621bf3:src/components/content/content.vue
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