<template>
   
  <div class="cart">
        <header>
            <h3>购物车</h3>
        </header>
        <content>
            <h6>购物车是空的~</h6>
            <h6>赶紧买点宝贝慰劳一下自己吧</h6>
            <router-link to="/home" tag="p">去逛逛</router-link>
            <h5><span>◎</span>已同步至好物园</h5>
        </content>
        <div class="more_goods">
            <h4>更多精选商品</h4>
            <div>
               
            </div>
        </div>
  </div>
</template>

<script>
import Footer from '../footer/footer'
export default {
  data() {
    return {};
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
  height: 0.66rem;
  background:white;
}
h3 {
  font-size: 0.2rem;
  width: 100%;
  line-height: 0.66rem;
  text-align: center;
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
    margin-top:0.54rem;
    color:rgb(102,102,102);
    font-size:0.16rem;
  }
  h6:nth-of-type(2) {
    font-size: 0.12rem;
    width: 100%;
    text-align: center; 
    margin-top:0.14rem;
    color:rgb(153,153,153);
    font-size:0.16rem;
  }
  p {
    border: 1px solid;
    width: 1rem;
    height: 0.4rem;
    border-radius: 0.2rem;
    font-size: 0.2rem;
    text-align: center;
    line-height: 0.4rem;
    margin: 0.1rem auto;
    color:rgb(47,47,52);
  }
  h5{
      color:rgb(155,155,155);
      font-size:0.12rem;
      height:0.56rem;
      width:100%;
      text-align:center;
      margin-top:0.54rem;
      display:flex;
      justify-content: center;
      align-items:center;
      span{
          color:gold;
          font-size:0.3rem;
          
      }
  }
}
.more_goods{
   margin-top:0.32rem;
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