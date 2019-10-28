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
  },
  
  data() {
    return {
      f: false,
      swiperOption: {
        slidesPerView: 4, // 一瓶屏显示几个slide
        spaceBetween: 5 //slide之间的间距
      },
      yd_list: [
        { name: "全部", f: true },
        { name: "现代", f: true },
        { name: "北欧", f: true },
        { name: "新中式", f: true },
        { name: "美式", f: true },
        { name: "中式", f: true }
      ]
    };
  }
    }
</script>

<style lang="scss" scoped>
// 头尾固定
.de_big{
  display: flex;
  flex-direction: column;
}
#content {
  flex: 1;
  overflow: auto; }

#content > .big {
  min-height: 186%; }
// 导航
.de_backitem {
  margin-top: 0.8rem;
  width: 100%;
  height: 0.48rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e9e9e9;
  box-sizing: border-box;
  padding-bottom: 0.4rem;
}
.de_back {
  margin-left: 0.31rem;
  img {
    width: 0.27rem;
    height: 0.38rem;
  }
}
.yd {
  margin-top: 0.3rem;
  box-sizing: border-box;
  padding-bottom: 6px;
  padding-left: 1px;
  padding-right: 1px;
  border-bottom: 2px solid #000;
  text-align: center;
}
.ydd {
  box-sizing: border-box;
  padding-bottom: 6px;
  padding-left: 1px;
  padding-right: 1px;
  border-bottom: none;
  text-align: center;
}
</style>