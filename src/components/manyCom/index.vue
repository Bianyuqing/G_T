<template>
  <div class="many_new">
    <div class="many_nitem">
      <p class="many_nitem2">更多精选产品</p>
      
    </div>
    <div class="many_newContent">
      <div class="many_newConten_item" v-for="(item,index) in many" :key="index">
        <img :src="item.img" alt />
        <p>{{item.name}}</p>
        <p>{{item.name1}}</p>
        <p style='color:red'>￥{{item.price}}</p>
      </div>
    </div>
    <div class="many_dian">
        <span></span>
        <p>店铺信息</p>
        <span></span>
    </div>
    <div class="log">
        <img src="../../../public/images/zjjw.jpg" alt="">
    </div>
    <div class="commit">
        <p>消费提醒：贷款直接给商家，由商家承担全部售后服务</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "manyCom",
  data() {
    return {
      many: []
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
          this.many = res.data.many;
        }
      });
    }
  }
};
</script>
<style scoped>
.commit{
  width: 100%;
  height:1.7rem;
  color:#d7d7d7;
  margin-top: 0.4rem;
  box-sizing: border-box;
  padding-left: .76rem;
  font-size: 0.25rem;
}
/* 底部样式 */
/* log样式 */
.log{
    width: 100%;
    height: .57rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.log  img{
   width: 2.04rem;
   height: 0.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -28px;
}
.many_dian span:nth-of-type(1){
      width: 2.74rem;
      height: 0.03rem;
      background: #ebebeb;
      display: inline-block;
      box-shadow: 2px 1px 2px #ebebeb;
      position: absolute;
      bottom:32px;
      left:226px;
}
.many_dian span:nth-of-type(2){
      width: 2.74rem;
      height: 0.03rem;
      background: #ebebeb;
      display: inline-block;
      box-shadow: 2px 1px 2px #ebebeb;
      position: absolute;
      bottom:32px;
      left:14px;
}
.many_dian p:nth-of-type(1){
     margin-left: 3.27rem;
}
.many_dian{
    position: relative;
    height: .79rem;
    margin-top: .46rem;
}
/* 新品内容图片样式设置 */
.many_newTiao {
  margin-right: 0.28rem;
  color: #c6c6c6;
}
.many_newConten_item p:nth-of-type(2) {
  margin-top: 0.15rem;
}
.many_newConten_item p:nth-of-type(3) {
  margin-top: 0.31rem;
}
.many_newConten_item p:nth-of-type(1) {
  width: 2.63rem;
  margin-top: 0.26rem;
}
.many_newContent {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
}
.many_newConten_item:nth-of-type(odd) {
  margin-top: 0.13rem;
  margin-left: 0.28rem;
}
.many_newConten_item:nth-of-type(even) {
  margin-right: 0.28rem;
  margin-top: 0.13rem;
}
.many_newConten_item {
  width: 3.33rem;
  height: 5rem;
  background: #fff;
  border-radius: 10%;
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  align-items: center;
}
.many_newConten_item img {
  width: 3.35rem;
  height: 3.3rem;
}
.many_new {
  background: #f9f9f9;
   box-sizing: border-box;
    padding-bottom: .39rem;
  border-bottom: 1px solid #e9e9e9;
}
.many_nitem{
    box-sizing:border-box;
  padding-left: 2.64rem;
  border-bottom: 1px solid #f0f0ed;
}
.many_nitem {
  margin-top: 0.21rem;
  width: 100%;
  height: 0.78rem;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
