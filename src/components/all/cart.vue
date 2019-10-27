<template>
  <div class="x_d">
    <header>
      <Header></Header>
    </header>

    <main>
      <div>
        <content>
          <div v-if="!cart" class="kong">
            <h6 class="h6">购物车是空的~</h6>
            <h6>赶紧买点宝贝慰劳下自己吧</h6>
            <router-link to="/home" tag="p">去逛逛</router-link>
            <h5>
              <span>◎</span>已同步至好物园
            </h5>
          </div>
          <div class="cart_goods">
            <div class="top">
              <h3>51找家具网商城</h3>
              <p>编辑</p>
            </div>
            <ul v-for="(item,key) in cart" :key="key">
              <li>
                <div class="Bian_left">
                  <div class="yes">
                    <div v-show="yes" @click="yes1()"></div>
                  </div>
                  <img :src="item.img" />
                </div>

                <div class="small">
                  <h3>{{item.name}}</h3>
                  <div class="down">
                    <h4>￥{{item.price}}</h4>
                    <div>
                      <p class="sub" @click="subnum(key)">-</p>
                      <p class="num">{{item.num}}</p>
                      <p class="add" @click="addnum(key)">+</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div class="allcheck"> 
              <div class="all_left">
                  <div class="yes">
                      <div v-show="yes" @click="yes1()"></div>
                  </div>
                  <h6>全选</h6>
              </div>
              <div class="all_right">
                  <div class="count_left">
                    <h3  class="big">合计<span>:￥3320.<small>00</small></span></h3>
                    <h4>不含运费</h4>
                  </div>
                  <div class="count_right">
                    <h3>结算</h3>
                  </div>
             </div>
            
            </div>
           
          </div>
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
</template>

<script>
import { mapState, mapActions } from "vuex"
import Footer from "@/components/footer/footer"
import Header from "@/components/header"

export default {
  data() {
    return {
      yes:true
    };
  },
  components: {
    Footer,
    Header
  },
  methods:{
    yes1(){
        //  this.yes=!this.yes
     },
     ...mapActions([ 'subnum' ,'addnum']),
     

  },
  computed: {
    ...mapState(["cart"])
 
  }
};
</script>

<style lang="scss" scoped>
.cart {
  box-sizing: border-box;
  background: rgb(249, 249, 249);
}
* {
  margin: 0;
  padding: 0;
}

ul,
li {
  list-style: none;
}
content {
  width: 100%;
  height: 100%;

  .kong {
    h5 {
      color: rgb(155, 155, 155);
      font-size: 0.24rem;
      height: 0.56rem;
      width: 100%;
      text-align: center;
      margin-top: 1.02rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: normal;
    }
    .h6 {
      font-size: 0.26rem;
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
      color: rgb(47, 47, 52);
      margin-top: 0.37rem;
    }
    span {
      color: gold;
      font-size: 0.35rem;
      margin-right: 0.1rem;
    }
    h6:nth-of-type(1) {
      font-size: 0.3rem;
      width: 100%;
      text-align: center;
      margin-top: 3.98rem;
      color: rgb(102, 102, 102);
      font-weight: lighter;
    }
    h6:nth-of-type(2) {
      width: 100%;
      text-align: center;
      margin-top: 0.26rem;
      color: rgb(153, 153, 153);
      font-size: 0.26rem;
      font-weight: lighter;
    }
  }
}

.cart_goods {
  background: rgb(245, 245, 245);
}

.more_goods {
  margin-top: 0.61rem;
  h4 {
    text-align: center;
    color: rgb(51, 51, 51);
  }
}
.more_goods > div {
  width: 100%;
  height: 100%;
}
.cart_goods {
  width: 100%;
  height: 100%;
  // border:1px solid;
  ul {
    width: 100%;
    height: 100%;
    margin-top: 0.24rem;
    li {
      width: 7rem;
      height: 2.3rem;
      background: white;
      border-radius: 0.06rem;
      display: flex;
      justify-content: space-around;
      margin: 0 auto;
      margin-bottom: 0.23rem;

      align-items: center;
      .yes_content {
        display: block;
        position: absolute;
        top: 3px;
        left: 0px;
        width: 30px;
        height: 30px;
        // border:2px solid #fff;
        border-radius: 50%;
      }
      img {
        width: 2rem;
        height: 2rem;
        border-radius: 0.12rem;
      }
      .small {
        width: 50%;
        height: 2rem;

        h3 {
          margin-top: 8px;
          color: rgb(126, 126, 127);
        }
        h4 {
          font-size: 0.27rem;
          font-weight: bold;
        }
        .down {
          margin-top: 0.94rem;
          display: flex;
          align-items: center;
          justify-content: space-around;
        }
        div {
          display: flex;
          .num {
            width: 0.58rem;
            height: 0.58rem;
            background: rgb(242, 243, 245);
            text-align: center;
            line-height: 0.58rem;
            color: black;
            margin-right: 0.05rem;
          }
          .add {
            width: 0.58rem;
            height: 0.58rem;
            background: rgb(242, 243, 245);
            text-align: center;
            line-height: 0.58rem;
            color: black;
          }
          .sub {
       

            width: 0.58rem;
            height: 0.58rem;
            background: rgb(242, 243, 245);
            text-align: center;
            line-height: 0.58rem;
            color: black;
            margin-right: 0.05rem;
          }
        }
      }
      .check {
        width: 0.33rem;
        height: 0.33rem;
        border: 1px solid;
        background: black;
        border-radius: 50%;
      }
    }
  }
}
.Bian_left {
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 40%;
}
.yes {
  width: 0.3rem;
  height: 0.3rem;
  border: 1px solid #000;
  position: relative;
  border-radius: 50%;
  background: black;
}
.yes > div {
  content: "";
  display: inline-block;
  width: 9px;
  height: 4px;
  border: 2px solid white;
  transform: rotate(-45deg);
  border-color: transparent transparent white white;
  position: absolute;
  top: 0px;
  left: 0.03rem;
}
.goods-ischecked {
  flex: none !important;
  width: 20px;
  height: 20px;
  border: 1px solid #333;
  margin-right: 26px;
  position: relative;
}
.top{
  width:100%;
  height:0.94rem;
  // border:1px solid;
  background:white;
  display:flex;
  justify-content: space-between;
  line-height:0.94rem;
  p{
    margin-right:0.25rem;
  }
  h3{
    font-weight:normal;
    margin-left:0.25rem;
  }
}

.allcheck{
    width:100%;
    height:0.88rem;
    border-bottom:1px solid;
    position:absolute;
    bottom:1.14rem;
    background:white;
    display:flex;
    justify-content: space-between;
    align-items:center;
    .all_left{
      width:1.08rem;
      height:0.32rem;
      // border:1px solid;
      display:flex;
      justify-content: space-between;
      margin-left:0.25rem;
      align-items:center
    }
    .all_right{
      width:4.2rem;
      height:0.85rem;
      // border:1px solid;
      display:flex;
      align-items:center;
      justify-content: space-between;
      margin-right:0.25rem;

        .count_left{
          width:2.99rem;
          height:0.7rem;
          // border:1px solid;
         h4{
           margin-left:0.8rem;
           margin-top:0.08rem;
           font-size:0.23rem;
         }
         h3{
           display:flex;
           margin-top:0.06rem;
            span{
              font-weight:bold;
            }
         }
      }
      .count_right{

         h3{
            width:1.82rem;
            height:0.68rem;
            // border:1px solid;
            border-radius:0.4rem;
            background:rgb(57,57,59);
            font-size:0.34rem;
            text-align:center;
            color:white;
            line-height:0.68rem;
           
          }
      }
    }
}
.big{
    font-weight:bold;
}
</style>