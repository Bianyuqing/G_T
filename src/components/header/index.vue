<template>
  <div class="header">
    <slot name="fanhui"></slot>
    <h2>{{name}}</h2>
       
  </div>
</template>

<script>
export default {
  props:{
    "name":{}
  },
  data() {
    return {
     
    };
  }
};
</script>

<style lang="scss" scoped>
.header{
    width:100%;
    height:1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
    padding:0 .2rem ;
}
h2{
  margin-left: .2rem;
  font-size:.3rem;
}
</style>