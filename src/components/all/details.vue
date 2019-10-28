<template>
  <div class="de_big">
    <div class="de_backitem">
      <router-link to="/home" class="de_back">
        <img src="../../../public/images/banck.jpg" alt />
      </router-link>

      <p>{{this.$route.params.name}}</p>
    </div>
    <div id="content">
      <div class="big">
        <swiper :options="swiperOption" ref="mySwiper">
          <swiper-slide v-for="(i,n) in yd_list" :key="n">
            <p class="yd" :class="{ydd:i.f}" @click="checkout(i,n)">{{i.name}}</p>
          </swiper-slide>
        </swiper>

        <Shafa_item></Shafa_item>
      </div>
    </div>
  </div>
  <!-- slides -->
</template>

<script>
import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";
// 引入沙发组件
import Shafa_item from "../Shafa_item";
export default {
  name: "details",
  components: {
    swiper,
    swiperSlide,
    Shafa_item
  },
  methods: {
    checkout(i, n) {
      //  this.yd_list.forEach(a,b){

      //  }
      if (!i.f) {
        i.f = true;
      } else {
        i.f = false;
      }
    }
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
};
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