<template>
  <div class="shaFa_new">
    <!-- <div class="shaFa_nitem">
      <p class="shaFa_nitem2">热销-沙发</p>
      <router-link to="/home/new" class="shaFa_newTiao">></router-link>
    </div> -->
    <div class="shaFa_newContent">
      <div class="shaFa_newConten_item" v-for="(item,index) in shaFa" :key="index" @click='xiang(index,item)'>
          <!-- <router-link > -->
              <img :src="item.img" alt />
              <p>{{item.name}}</p>
              <p>{{item.name1}}</p>
              <p style='color:red'>￥{{item.price}}</p>
          <!-- </router-link>  -->
          <!-- <router-view></router-view> -->
          
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Shafa_item",
  data() {
    return {
      shaFa: []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    // 跳转详情页
    xiang(index,item){
      console.log(index);
      this.$router.push(`/xiang/${index}/${item.name} `);
    },
    getData() {
      //console.log('this.$http:',this.$http);
      this.$http.get("http://localhost:8080/api/banner.json").then(res => {
        // console.log(res)
        if (res.status == 200) {
          //console.log(res.data.newContent)
          this.shaFa = res.data.shaFa;
        }
      });
    }
  }
};
</script>
<style>
/* 新品内容图片样式设置 */
.shaFa_newTiao {
  margin-right: 0.28rem;
  color: #c6c6c6;
}
.shaFa_newConten_item p:nth-of-type(2) {
  margin-top: 0.15rem;
}
.shaFa_newConten_item p:nth-of-type(3) {
  margin-top: 0.31rem;
}
.shaFa_newConten_item p:nth-of-type(1) {
  width: 2.63rem;
  margin-top: 0.26rem;
}
.shaFa_newContent {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
}
.shaFa_newConten_item:nth-of-type(odd) {
  margin-top: 0.13rem;
  margin-left: 0.28rem;
}
.shaFa_newConten_item:nth-of-type(even) {
  margin-right: 0.28rem;
  margin-top: 0.13rem;
}
.shaFa_newConten_item {
  width: 3.33rem;
  height: 5rem;
  background: #fff;
  border-radius: 10%;
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  align-items: center;
}
.shaFa_newConten_item img {
  width: 3.33rem;
  height: 3.3rem;
}
.shaFa_new {

    margin-top: .16rem;
  background: #f9f9f9;
   box-sizing: border-box;
    padding-bottom: .39rem;
  border-bottom: 1px solid #e9e9e9;
}
.shaFa_nitem p:nth-of-type(1) {
  margin-left: 0.44rem;
  border-left: 1px solid #000;
  padding-left: 0.18rem;
}
.shaFa_nitem {
  margin-top: 0.21rem;
  width: 100%;
  height: 0.78rem;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>