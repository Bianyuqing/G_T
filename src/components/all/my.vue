<template>
    <div class="my">
       <List></List> 
    </div>
</template>

<script>
import List from "@/components/List/List";
    export default {
        data(){
            return{
                
            }
        },
        components:{List}
        
    }
</script>

<style lang="scss" scoped>
    .my {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        flex: 1;
       overflow: auto;

    }
</style>