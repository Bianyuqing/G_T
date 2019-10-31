<template>
  <div class="x_d">
    <header>
      <Header></Header>
    </header>

    <main>
      <div>
        <div class="yxd_banner">
          <div class="yxd_hd">
            <router-link to="/home" class="yxd_back">＜</router-link>

            <span>{{this.$route.params.name}}{{this.$route.params.name1}}</span>
          </div>
          <div id="content">
            <div class="big">
              <div>
                <img :src="arr[i].img" alt="x" class="yxd_tu" />
              </div>

              <div>
                <p class="yxd_name">{{arr[i].name}}</p>
                <div class="yxd_share">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-fenxiang" />
                  </svg>
                  <p>分享</p>
                </div>
              </div>
              <div class="yxd_parice">￥2560.00-￥4760.00</div>
              <div class="yxd_shi">
                <p
                  style="font-weight:500;font-size:.26rem;margin-top:.6rem;margin-left:.31rem"
                >运费 免运费</p>
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
              <div class="heng"></div>
              <div class="yxd_wuyi">
                <div class="yxd_log">
                  <img src="../../../public/images/log2.jpg" alt />
                  <p style="color:#a6a6a6;font-size:.28rem">51找家具网商城</p>
                </div>
                <p class="yxd_ru">进店</p>
              </div>
              <div class="yxd_qi">
                <div v-for="(item) in qi" :key="item.id" class="yxd_qiitem">
                  <img :src="item.img" alt />
                  <p>{{item.name}}</p>
                </div>
              </div>
              <div class="yxd_ping">
                <p>宝贝评价</p>
                <p>暂无评价</p>
              </div>
              <p class="yxd_shang">商品详情</p>
               <ul class='yxd_jian'>
             
                <li>产地：</li>
                <li>马来西亚</li>
                <li>规格：双扶手单人位</li>
                <li>860*870*1000</li>
                <li>规格：双扶手单人位</li>
                <li>860*870*1000</li>
                <li>规格：双扶手单人位</li>
                <li>860*870*1000</li>
                <li>材质：</li>
                <li>马来西亚橡胶+小黄牛头皮层+高档布艺</li>
              
          </ul>
              <div class="yxd_tupian" v-for="(item) in  xiang" :key="item.id">
                <img :src="item.img" alt />
              </div>
              <div class="log1">
                <img src="../../../public/images/huang.jpg" alt />
              </div>
              <div class="log">
                <img src="../../../public/images/zjjw.jpg" alt />
              </div>
              <div class="commit">
                <p>消费提醒：贷款直接给商家，由商家承担全部售后服务</p>
              </div>
              <XianCom></XianCom>
            </div>
          </div>
        </div>
      </div>
    </main>

    <footer>
      <Shopping></Shopping>
    </footer>
  </div>
</template>

<script>
import BedTiao from "../BedTiao";
export default {
  name: "BedTiao",
  components: {
    BedTiao
  },
  data() {
    return {
      i: this.$route.params.index,
      arr: [],
      qi: [
        {
          id: 3001,
          img: require("../../../public/images/qi.jpg"),
          name: "企业认证"
        },
        {
          id: 3002,
          img: require("../../../public/images/qi.jpg"),
          name: "货代直接给商家"
        },
        {
          id: 3003,
          img: require("../../../public/images/qi.jpg"),
          name: "店铺负责发货&售后"
        },
        {
          id: 3004,
          img: require("../../../public/images/qi.jpg"),
          name: "收货后结算"
        }
      ],
      xiang: [
        {
          id: 3005,
          img: require("../../../public/images/796683f3a34372b5e20f172bc413a18.jpg")
        },
        {
          id: 3006,
          img: require("../../../public/images/a7c6ef396792e7c7704a7d05b788440.jpg")
        },
        {
          id: 3007,
          img: require("../../../public/images/cae26e7f7876c40345b5dcd0de6401f.jpg")
        },
        {
          id: 3008,
          img: require("../../../public/images/5a8aa92c81804e9b3339454ce250e81.jpg")
        },
        {
          id: 3009,
          img: require("../../../public/images/06d5d650bc73c7d9456423a1957a15a.jpg")
        },
        {
          id: 3010,
          img: require("../../../public/images/494d862c04c2fd76cc261717fd40bd5.jpg")
        }
      ]
    };
  },
  created() {
    this.getxiao();
  },
  methods: {
    getxiao() {
      this.$http.get("http://localhost:8080/api/banner.json").then(res => {
        console.log(res.data.shaFa);
        this.arr = res.data.bed;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.commit {
  width: 100%;
  height: 1.7rem;
  color: #d7d7d7;
  margin-top: 1.4rem;
  box-sizing: border-box;
  padding-left: 0.76rem;
  font-size: 0.25rem;
}
/* 底部样式 */
/* log样式 */
.log {
  width: 100%;
  height: 0.57rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.log img {
  width: 2.04rem;
  height: 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.8rem;
}
.log1 {
  margin: 0.33rem 0rem 0rem 2.97rem;
  img {
    width: 1.61rem;
  }
}
.yxd_tupian {
  margin-left: 0.26rem;
  img {
    width: 96%;
    height: 4.78rem;
  }
}
ul li {
  list-style:none;
}
.yxd_jian{
   margin-left: .15rem;
  li{
    text-align: center;
    line-height: .72rem;
      width: 3.56rem;
      height: .72rem;
      border: 1px solid #d4d4d4;
      float: left;
     
    
    
  }
  li:nth-of-type(9){
     width: 3.56rem;
      height: 1.75rem;
  }
  li:nth-of-type(10){
     width: 3.56rem;
      height: 1.75rem;
  }
}
.yxd_shang {
  width: 100%;
  height: 0.94rem;
  background: #fff;
  text-align: center;
  line-height: 0.94rem;
}
.yxd_ping {
  margin-top: 0.81rem;
  margin-bottom: 0.89rem;
  width: 100%;
  display: flex;
  p:nth-of-type(1) {
    margin-left: 0.31rem;
    margin-right: 4.7rem;
  }
  p:nth-of-type(2) {
    color: #cecece;
  }
}
.yxd_qi {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  .yxd_qiitem {
    margin-top: 0.36rem;
    font-size: 0.24rem;
    width: 33%;
    height: 0.29rem;
    color: #6d6d6d;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 0.22rem;
    }
  }
}
.heng {
  width: 100%;
  height: 0.2rem;
  background: #fafafa;
}
.yxd_log {
  display: flex;
  margin-left: 0.34rem;
  // align-items: center;
  img {
    width: 1.08rem;
  }
  p {
    margin-top: 0.16rem;
  }
}
.yxd_wuyi {
  margin-top: 0.2rem;
  border-bottom: 1px solid #f2f2f2;
  box-sizing: border-box;
  padding: 0.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.yxd_ru {
  text-align: center;
  line-height: 0.39rem;
  width: 0.89rem;
  height: 0.39rem;
  border: 1px solid #000;
  border-radius: 10px;
  margin-right: 0.3rem;
}
.yxd_hd {
  width: 100%;
  height: 0.66rem;
  margin-top: 0.46rem;
}
.yxd_gui {
  align-items: center;
  // border-bottom: 1px solid #cecece;
  // box-shadow: 1px 1px 2px #cecece;
  height: 0.85rem;
  p:nth-of-type(1) {
    margin-left: 0.27rem;
  }
  p:nth-of-type(2) {
    color: #cecece;
    margin-right: 0.39rem;
  }
}
.yxd_banner {
  display: flex;
  flex-direction: column;
}
.yxd_pei {
  // border-bottom: 1px solid #cecece;
  // box-shadow: 1px 1px 2px #cecece;
  align-items: center;
  height: 0.85rem;
  p:nth-of-type(1) {
    margin-left: 0.27rem;
  }
  p:nth-of-type(2) {
    color: #cecece;
    margin-right: 0.39rem;
  }
}
.yxd_pei {
  height: 0.9rem;
  display: flex;
  justify-content: space-between;
}
.yxd_gui {
  border-bottom: 1px solid #f5f5f7;
  box-shadow: 1px 1px 2px #f5f5f7;
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
.yxd_share {
  margin-top: 0.43rem;
  margin-right: 0.32rem;
}
.yxd_tu {
  margin: 1.77rem 0rem 1.44rem 0rem;
  width: 100%;
  height: 4.43rem;
}
.yxd_name {
  font-size: 0.3rem;
  font-weight: 600;
  margin-left: 0.3rem;
}
div:nth-of-type(2) {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // margin-left: 0.34rem;
}
</style>