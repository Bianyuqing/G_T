<template>
<div class="x_d">            
     <header>
         <Header></Header>
    </header>

    <main>
        <div>

            <div class="my">
                    <List></List> 

            </div>

        </div>
    </main>

    <footer>
        <Footer></Footer>
    </footer>
           
</div>
</template>

<script>
import List from "@/components/List/List";
import Footer from "@/components/footer/footer"
import Header from "@/components/header"

    export default {
        data(){
            return{
                
            }
        },
       components:{
           List,
            Footer,
            Header
        }
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