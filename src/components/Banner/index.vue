<template>
  <div>
    <img src="../../../public/images/banner.jpg" alt class="yxd_banner" />
    <div class="yxd_yuan">
      <div class="yxd_yan" v-for="(item,index) in goodsList" :key="index">
        <img :src="item.img" alt />
        <p>{{item.name}}</p>
      </div>
    </div>
    <div class="menu">
      <!-- <router-link class="yxd_item1" v-for="(item,index) in menus" :key="index" to=`/home/details/${}`> -->
      <div class="yxd_item1" v-for="(item,index) in menus" :key="index" @click="xiao(item.name)">
        <img :src="item.imag" alt />
        <p>{{item.name}}</p>
      </div>

      <!-- </router-link> -->
    </div>
  </div>
</template>
<script>
export default {
  name: "banner",
  data() {
    return {
      goodsList: [],
      menus: []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    xiao(name) {
      this.$router.push(`/home/details/${name}`);
    },
    getData() {
      //console.log('this.$http:',this.$http);
      this.$http.get("http://localhost:8080/api/banner.json").then(res => {
        // console.log(res)
        if (res.status == 200) {
          // console.log(res.data.yan)
          this.goodsList = res.data.yan;
          //console.log(res.data.menu)
          this.menus = res.data.menu;
        }
      });
    }
  }
};
</script>
<style scoped>
/* 九宫格部分 */
.menu {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.yxd_item1 {
  margin-top: 0.88rem;
  width: 25%;
  height: 1.54rem;
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.yxd_item1 img {
  width: 0.83rem;
}
.yxd_item1 p {
  margin-top: 0.68rem;
  font-size: 0.26rem;
}
/* banner下的原厂直销 */
.yxd_yuan {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.yxd_yan p {
  margin-left: 0.07rem;
  font-size: 0.24rem;
}
.yxd_yan:nth-of-type(1) {
  margin-left: 0.56rem;
}
.yxd_yan {
  margin-top: 0.15rem;
  width: 25%;
  height: 0.26rem;
  display: flex;
  /* display: flex;
         justify-content: space-between;
        align-items: center;
        flex-direction: column; */
}
.yxd_yan img {
  height: 0.28rem;
}
/* banner 部分*/
.yxd_banner {
  width: 100%;
  height: 3.5rem;
}
</style>