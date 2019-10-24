<template>
 <div class="x_d">  
           
            <header>
                <Header></Header>
            </header>

           <main>
               <div>

                            <div class="de_backitem">
                                        <router-link to='/home' class='de_back'>
                                            <img src="../../../public/images/banck.jpg" alt="">
                                        </router-link>
                                        <p>沙发</p>
                                    </div>

               </div>
           </main>

            <footer>
                <Footer></Footer>
            </footer>
           
            </div>










    <!-- <div class='de_big'>
         <Header></Header>
          <div class="b_main">
          <div>
                               
          </div>
       </div>
        
        <Footer></Footer>
         
    </div> -->
</template>

<script>
import Footer from "@/components/footer/footer"
import Header from "@/components/header"

    export default {
        name:'details',
         components:{
    Footer,
    Header
  }
    }
</script>

<style lang="scss" scoped>
.de_backitem{
    margin-top: 0.8rem;
    width: 100%;
        height: 0.48rem;
        display: flex;
        align-items: center;
}
.de_back{
    margin-left: .31rem;
    img{
        width: 0.27rem;
        height: 0.38rem;
    }
   
}
 .de_big{
    
     position: absolute;
     width: 100%;
    //  height: 100%;
     background: #fff;
      p{
        margin-left: .38rem;
    }
 }
</style>