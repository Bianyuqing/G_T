<template>
    <div>
         <router-link to="/search" tag="p" class="p_search">搜索</router-link>
         <router-view/>
    </div>
</template>

<script>
import Search from "@/components/all/search"
    export default {
        components: {
    
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
         border:1px solid;
         text-align:center;
         line-height:0.7rem;
    }
</style>