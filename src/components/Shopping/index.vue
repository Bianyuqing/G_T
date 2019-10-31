<template>
  <div class="yxd_shopping">
    <div class='yxd_ke'>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gouwuche" />
      </svg>
      <p>客服</p>
    </div>

    <div class="gou">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gouwuche" />
      </svg>
      <p>购物车</p>
    </div>

    <div class="yxd_add">加入购物车</div>
    <div class="yxd_mai">立即购买</div>
  </div>
</template>

<script>
export default {
  name: "Shopping"
};
</script>

<style lang="scss" scoped>
.yxd_ke{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-left: .32rem;
    font-size: 0.24rem;

}
.gou{
    margin-left:.54rem ;
     font-size: 0.24rem;
      display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
   margin-right: .06rem;
}
.yxd_shopping {
  display: flex;
  // justify-content: space-between;
  // justify-content: space-between;
}
.yxd_add {
  width: 2.67rem;
  height: 1.01rem;
  background: #cbcbcb;
  color: #000;
  font-weight: 600;
  text-align: center;
  line-height: 1.01rem;
}
.yxd_mai {
  width: 2.67rem;
  height: 1.01rem;
  background: #303136;
  color: #fff;
  font-weight: 600;
  text-align: center;
  line-height: 1.01rem;
}
</style>