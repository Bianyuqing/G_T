<template>
<<<<<<< HEAD
    <div class="my">
       <List></List> 
=======
    <div>
      我的
      <Footer></Footer>
>>>>>>> 9650c86bd8b7fd8743fd3387f6bf614bf39ff597
    </div>
</template>

<script>
<<<<<<< HEAD
import List from "@/components/List/List";
=======
import Footer from "@/components/footer/footer"

>>>>>>> 9650c86bd8b7fd8743fd3387f6bf614bf39ff597
    export default {
        data(){
            return{
                
            }
        },
<<<<<<< HEAD
        components:{List}
        
=======
        components:{
            Footer,
        }
>>>>>>> 9650c86bd8b7fd8743fd3387f6bf614bf39ff597
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