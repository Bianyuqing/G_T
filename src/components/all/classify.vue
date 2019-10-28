<template>


 <div class="x_d">  
           
            <header>
                <Header></Header>
            </header>

           <main>
               <div>

                     <Class></Class>

               </div>
           </main>

            <footer>
                <Footer></Footer>
            </footer>
           
            </div>

</template>

<script>
import Footer from "@/components/footer/footer"
import Class from '@/pase/classfity'
import Header from "@/components/header"

    export default {
        data(){
            return{
                
            }
        },
        components:{
           Footer,
    Header,
    Class

         }
    }
</script>

<style lang="scss" scoped>

</style>