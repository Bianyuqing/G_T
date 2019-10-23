<template>
  <div>
    <footer>
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
          <p>My</p>
        </router-link>
      </ul>
      <!-- <svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-fenlei"></use>
      </svg>-->
    </footer>
  </div>
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
footer {
  width: 100%;
  height: 60px;
<<<<<<< HEAD
  background: pink;
  // position: fixed;
  // bottom: 0;
=======
  background: rgb(252,252,252);
  position: fixed;
  bottom: 0;
>>>>>>> 6e03b106b3ed75df2eb0b81875b8f663d4621bf3
}
ul,
li {
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
      text-align:center;
    }
  }
}
</style>