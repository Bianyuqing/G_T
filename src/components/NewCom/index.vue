<template>
  <div class="yxd_new">
    <div class="yxd_nitem">
      <p class="yxd_nitem2">新品</p>
      <router-link to="/home/new" class="yxd_newTiao">></router-link>
    </div>
    <div class="yxd_newContent">
      <div class="yxd_newConten_item" v-for="(item,index) in newContent" :key="index">
        <img :src="item.img" alt />
        <p>{{item.name}}</p>
        <p>{{item.name1}}</p>
        <p style='color:red'>￥{{item.price}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "newCom",
  data() {
    return {
      newContent: []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      //console.log('this.$http:',this.$http);
      this.$http.get("http://localhost:8080/api/banner.json").then(res => {
        // console.log(res)
        if (res.status == 200) {
          //console.log(res.data.newContent)
          this.newContent = res.data.newContent;
        }
      });
    }
  }
};
</script>
<style  scoped>
/* 新品内容图片样式设置 */
.yxd_newTiao {
  margin-right: 0.28rem;
  color: #c6c6c6;
}
.yxd_newConten_item p:nth-of-type(2) {
  margin-top: 0.15rem;
}
.yxd_newConten_item p:nth-of-type(3) {
  margin-top: 0.31rem;
}
.yxd_newConten_item p:nth-of-type(1) {
  width: 2.63rem;
  margin-top: 0.26rem;
}
.yxd_newContent {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
}
.yxd_newConten_item:nth-of-type(odd) {
  margin-top: 0.13rem;
  margin-left: 0.28rem;
}
.yxd_newConten_item:nth-of-type(even) {
  margin-right: 0.28rem;
  margin-top: 0.13rem;
}
.yxd_newConten_item {
  width: 3.33rem;
  height: 5rem;
  background: #fff;
  border-radius: 10%;
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  align-items: center;
}
.yxd_newConten_item img {
  width: 3.33rem;
  height: 3.3rem;
}
.yxd_new {
  background: #f9f9f9;
   box-sizing: border-box;
    padding-bottom: .39rem;
  border-bottom: 1px solid #e9e9e9;
}
.yxd_nitem p:nth-of-type(1) {
  margin-left: 0.44rem;
  border-left: 1px solid #000;
  padding-left: 0.18rem;
}
.yxd_nitem {
  margin-top: 0.21rem;
  width: 100%;
  height: 0.78rem;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>