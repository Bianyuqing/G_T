<template>

 <div class="x_d">  
           
            <header>
                <Header></Header>
            </header>

           <main>
               <div>
                          <content>
                                      <h6 class="h6">购物车是空的~</h6>
                                      <h6>赶紧买点宝贝慰劳下自己吧</h6>
                                      <router-link to="/home" tag="p">去逛逛</router-link>
                                      <h5><span>◎</span>已同步至好物园</h5>
                                  </content>
                                        <div class="more_goods">
                              <h4>更多精选商品</h4>
                              </div>

               </div>
           </main>

            <footer>
                <Footer></Footer>
            </footer>
           
            </div>












  <!-- <div class="cart">
       <Header></Header>
       <div class="b_main">
          <div>

       
               
            </div>
        </div>
          </div>
       </div>
        
        <Footer></Footer>
  </div> -->
</template>

<script>
import Footer from "@/components/footer/footer"
import Header from "@/components/header"
export default {
  data() {
    return {};
  },
  components:{
    Footer,
    Header
  }
};
</script>

<style lang="scss" scoped>
.cart{
  width:100%;
  height:100%;
    box-sizing:border-box;
    background:rgb(249,249,249)
}
* {
  margin: 0;
  padding: 0;
}
header {
  width: 100%;
  height: 1.24rem;
  background:white;
  h3 {
    font-size: 0.33rem;
    width: 100%;
    line-height: 1.24rem;
    text-align: center;
    font-weight:bold;
   }
}
.h6{
  font-size:0.26rem;
}
ul,
li {
  list-style: none;
}
content {
  width: 100%;
  height: 100%;
//   background:red;
  h6:nth-of-type(1) {
    font-size: 0.3rem;
    width: 100%;
    text-align: center; 
    margin-top:3.98rem;
    color:rgb(102,102,102);
    font-weight:lighter;
  }
  h6:nth-of-type(2) {
   
    width: 100%;
    text-align: center; 
    margin-top:0.26rem;
    color:rgb(153,153,153);
    font-size:0.26rem;
    font-weight:lighter;

  }
  p {
    border: 1px solid;
    width: 1.4rem;
    height: 0.6rem;
    border-radius: 0.3rem;
    font-size: 0.26rem;
    text-align: center;
    line-height: 0.6rem;
    margin: 0.1rem auto;
    color:rgb(47,47,52);
    margin-top:0.37rem;
  }
  h5{
      color:rgb(155,155,155);
      font-size:0.24rem;
      height:0.56rem;
      width:100%;
      text-align:center;
      margin-top:1.02rem;
      display:flex;
      justify-content: center;
      align-items:center;
      font-weight:normal;

      span{
          color:gold;
          font-size:0.35rem;
          margin-right:0.1rem;
      }
  }
}
.more_goods{
   margin-top:0.61rem;
   h4{
      text-align:center;
      color:rgb(51,51,51)
   }
   
}.more_goods>div{
       width:100%;
       height:100%;
    //    border:1px solid;
   }
</style>