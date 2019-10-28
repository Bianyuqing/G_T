<template>
  <!-- <div class="yxd_xiang"> -->
    <div class="yxd_banner">
      <div class='yxd_hd'>
        <router-link to="/home/details/:name" class="yxd_back">＜</router-link>

        <span>{{this.$route.params.name}}</span>
      </div>
      <div id="content">
        <div class="big">
          <div>
              <img :src="arr[i].img" alt='x' class="yxd_tu" />
          </div>
         
          <div>
            <p class="yxd_name">{{arr[i].name}}</p>
            <div class='yxd_share'>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-fenxiang" />
              </svg>
              <p>分享</p>
            </div>
          </div>
          <div class="yxd_parice">￥2560.00-￥4760.00</div>
          <div class="yxd_shi">
            <p style="font-weight:500;font-size:.26rem;margin-top:.6rem;margin-left:.31rem">运费 免运费</p>
            <p style="font-size:.26rem;margin-top:.6rem;margin-right:.29rem">剩余2977</p>
          </div>
          <div class="yxd_zhi">
            <img src="../../../public/images/zan1.jpg" alt />
            <span style="color:#43ab05;font-weight:600;margin-right:.26rem">有赞担保</span>
            <span>全程护航,请放心购买</span>
          </div>
          <div class="yxd_gui">
            <p>选择：规格</p>
            <p>></p>
          </div>
          <div class="yxd_pei">
            <p>配送：快递</p>
            <P>></P>
          </div>
          <XianCom></XianCom>
        </div>
      </div>
    </div>
  <!-- </div> -->
</template>

<script>
// 引入详情页
import XianCom from "../XianCom";
export default {
  name: "xiangCom",
  components: {
    XianCom
  },
  data() {
    return {
      i: this.$route.params.index,
      arr: []
    };
  },
  created() {
    this.getxiao();
  },
  methods: {
    getxiao() {
      this.$http.get("http://localhost:8080/api/banner.json").then(res => {
        console.log(res.data.shaFa);
        this.arr = res.data.shaFa;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.yxd_hd{
  width: 100%;
  height: .66rem;
  margin-top: 0.46rem;
}
.yxd_gui {
  // border-bottom: 1px solid #cecece;
  // box-shadow: 1px 1px 2px #cecece;
  height: 0.85rem;
  p:nth-of-type(1){
    margin-left:.27rem;
  }
  p:nth-of-type(2) {
    color: #cecece;
    margin-right: .39rem;
  }
}
.yxd_banner{
    display: flex;
    flex-direction: column;
}
.yxd_pei {
  height: 0.85rem;
  p:nth-of-type(1){
    margin-left:.27rem;
  }
  p:nth-of-type(2) {
    color: #cecece;
    margin-right: .39rem;
  }
 
}
.yxd_pei {
  height: 0.9rem;
  // border-bottom: 1px solid #f5f5f7;
  // box-shadow: 1px 1px 2px #f5f5f7;
  display: flex;
  justify-content: space-between;
}
.yxd_gui {
  display: flex;
  justify-content: space-between;
}
.yxd_zhi {
  margin-top: 0.2rem;
  width: 100%;
  height: 0.8rem;
  margin-left: 0.29rem;
  img:nth-of-type(1) {
    width: 0.3rem;
    margin-right: 0.12rem;
  }
  display: flex;
  // justify-content: center;
  align-items: center;
}
.yxd_shi {
  display: flex;
  justify-content: space-between;
  color: #6e6e70;
  border-bottom: 1px solid #f5f5f7;
  box-shadow: 1px 1px 2px #f5f5f7;
  box-sizing: border-box;
  padding-bottom: 0.36rem;
}
.yxd_parice {
  font-weight: 600;
  font-size: 0.3rem;
  margin-left: 0.3rem;
}
// .yxd_banner {
//   display: flex;
//   flex-direction: column;
//   // width: 100%;
//   height: 7.05rem;
//   background: #fbfbfb;
  .yxd_share{
    margin-top: 0.43rem;
    margin-right: .32rem;
  }
  .yxd_tu {
  
     //margin: 1.77rem 0rem 1.44rem 0rem;
    width: 100%;
    height: 4.43rem;
  }
  .yxd_name {
    font-size: 0.3rem;
    font-weight: 600;
    margin-left: .3rem;
  }
  div:nth-of-type(2) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // margin-left: 0.34rem;
  
  }
// }
#content {
  flex: 1;
  overflow: auto; }

#content > .big {
  min-height: 120%; 
  }
</style>