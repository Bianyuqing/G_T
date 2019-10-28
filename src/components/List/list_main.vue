<template>
  <div class="liebiao">
    <Header :name="text">
      <template slot=fanhui>
          <span class="wd_fanhui" @click="wd_hui">&lt;</span>
          <!-- &lt; -->
      </template>
    </Header>
      <div class="wd_main">
            <div>
                <div class="wh df dac dja">
                      <p v-for="(v,i) in list" :key='i' :class="{wd_hei:index==i}" @click="wd_xuan(i)">{{v.name}} <span :class="{wd_xia:index==i}"></span></p>
                </div>
                <div>
                    <img src="" alt="">
                </div>
              
            </div>
        </div>
   
  </div>
</template>
       
<script>
import Header from "@/components/header";
export default {
  data() {
    return {
      list: [],
      index: this.$route.params.index*1+1,
      text: "订单列表"
    };
  },
  components: {
    Header
  },
  created() {
    this.getList();
  },
  methods: {
      wd_hui(){
          this.$router.go(-1)
      },
      wd_xuan(i){
          this.index=i
      },
    getList() {
      this.$http.get("http://localhost:8080/api/leibiao.json").then(res => {
        console.log(res);
        if (res.status == 200) {
          this.list = res.data.leibiia;
        }
      });
    }
  }
};
</script>
<style lang="scss">
.wd_xia {
  border: 1px solid #000;
}
.wd_hei {
  color: #000;
}
.wh {
  width: 100%;
  height: 0.8rem;
  color: #717171;
  p {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 0.35rem;
  }

  // border: 1px solid #000;
}
.wh2 {
  color: #292929;
}
.df {
  display: flex;
}
.dfc {
  flex-direction: column;
}
.djc {
  justify-content: center;
}
.dja {
  justify-content: space-around;
}
.djb {
  justify-content: space-between;
}
.dac {
  align-items: center;
}
.liebiao {
  // border: 1px solid #000;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.wd_main {
  width: 100%;
  flex: 1;
  overflow: auto;
  > div {
    width: 100%;
    height: 101%;
  }
}
</style>