<template>
  <div id="app">
   
      <Content></Content>
      <!-- <router-view name="search"></router-view> -->
  </div>
</template>

<script>
import Content from "@/components/content/content"

export default {
  name: 'app',
  components: {
    Content,
  }
}
</script>

<style  lang="scss" scoped>
body,html{
  width:100%;
  height:100%;
  font-size:0.16rem;
  box-sizing:border-box;
}
#app{
  width:100%;
  height:100%;
  .content{
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    .b_main{
      width:100%;
      flex:1;
      overflow:auto;
      >div{
        width:100%;
        min-width:101%;
      }
    }
  }
}

*{
  margin:0;padding:0;
}
.red{
  color:rgb(211, 49, 49);
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  font-size:0.25rem;
  text-align:center;
}
</style>
