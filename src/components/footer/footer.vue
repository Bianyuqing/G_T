<template>
  
    <footer>
  <div class="footer">
    
      <ul>
        <router-link to="/home" tag="li">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-zhuye" />
          </svg>
          <p>首页</p>
        </router-link>
        <router-link to="/classify" tag="li">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-fenlei" />
          </svg>
          <p>分类</p>
        </router-link>
        <router-link to="/cart" tag="li">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gouwuche" />
          </svg>
          <p>购物车</p>
        </router-link>
        <router-link to="/my" tag="li">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xiazai" />
          </svg>
          <p>我的</p>
        </router-link>
      </ul>
      </div>
    </footer>
 
   
  
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.footer {
  width: 100%;
  height: 60px;
  background: pink;
  // position: fixed;
  // bottom: 0;
  background: rgb(252,252,252);
  position: fixed;
  bottom: 0;
  height: 1.1rem;
  background: #fdfdfb;
  // position: fixed;
  // bottom: 0;
}
ul,li {
  list-style: none;
}
ul {
  display: flex;
  height: 100%;
  li {
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    // border:1px solid;
    p {
      // color: green;
      font-size: 0.14rem;
      color: green;
      font-size: .24rem;
      text-align:center;
      margin-top: .1rem;
    }
  }
}
</style>