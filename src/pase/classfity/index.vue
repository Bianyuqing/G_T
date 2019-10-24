<template>
  <div class="wd-fen">
    <div>
      <div>
        <input type="text" placeholder="搜索商品" />
      </div>

      <div>
        <ul>
          <li v-for="(v,i) in arr" :key="i" @click="wdhuan(v,i)" :class="{'wd-huan':v.zhuang}"  >
            <p>{{v.title}}</p>
          </li>
        </ul>
        <div class="ding">
          <div class="d-d1">
            <div v-for="(v,i) in arr" :key="i" class="d-d2" ref="xuan">
              <p>{{v.title}}</p>
              <div class="d-d3">
                <!-- <router-link to="/wdxiang"+v.title></router-link> -->
                <div v-for="(v2,i2) in v.list" :key="i2" class="d-d4" @click="wd(v.title)">
                  <img :src="v2.imgurl" alt />
                  <p class="wd_p">{{v2.title}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  data() {
    return {
      arr: []
    };
  },
  components:{
  },

  methods: {
    //  ...mapActions(['wd']),
    wd(a){
      
        this.$router.push(`/wdxiang/${a}`)
     
    },
    wdhuan(v,i) {
      this.arr.map((v3, i) => {
        v3.zhuang = false;
      });
      console.log(v);
      v.zhuang = !v.zhuang;
      let a=document.getElementsByClassName("d-d2");

      // a[0].style.backgroundColor = "red";
      // console.log(a[i].style)
      // this.$refs.xuan[i].style.scrollMarginTo
      
    }
  },
  created() {
    this.$http.get(" http://localhost:8080/a.json").then(res => {
      console.log(res);
      this.arr = res.data.classfiy;
    });
  }
};
</script>
<style lang="scss"  scoped>
.wd_p{
  margin-top:.2rem;
}
.wd-huan {
  background: #fff;
  border-left: 2px solid red;
}
.ding {
  width: 80%;
  height: 9.2rem;
  overflow: auto;
  display: flex;
  // border: 1px solid #000;

  .d-d1 {
    width: 100%;
    min-height: 101%;
    // display: flex;
    // flex-wrap: wrap;
    .d-d2 {
      width: 100%;
      > p {
        box-sizing: border-box;
        padding-left: 0.4rem;
      }
      .d-d3 {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
      }

      .d-d4 {
        width: 30%;
        height: 2.45rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        > img {
          display: block;
          width: 1rem;
          height: 1rem;
        }
      }
    }
  }
}
.wd-fen {
  width: 100%;
  height: 100%;
  // display: flex;
  box-sizing: border-box;
  font-size: 0.3rem;
  overflow: auto;
  > div {
    width: 100%;
    height: 101%;
    > div:nth-child(1) {
      width: 100%;
      height: 1.1rem;
      input {
        width: 100%;
        height: 100%;
        border: none;
        text-align: center;
        line-height: 100%;
        font-size: 0.2rem;
      }
    }
    > div:nth-child(2) {
      width: 100%;
      // height: 100%;
      display: flex;
      box-sizing: border-box;
      > ul {
        width: 30%;
        height: 9.3rem;
        background: #f8f8fa;
        color: #474749;
        position: relative;
        li {
          height: 0.9rem;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          box-sizing: border-box;
          padding-left: 0.34rem;
        }
      }
      > div {
        width: 80%;
      }
    }
  }
}
</style>