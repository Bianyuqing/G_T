<template>
    <div class="content">
    <!-- <header>搜索</header> -->
        <HeaderCom></HeaderCom>
        <router-view></router-view>
        <Footer></Footer>
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
   .content {
       width: 100%;
       height: 100%;
       flex: 1;
       overflow: auto;
   }

</style>