<template>
  <div id="app">
   <Content></Content>
  </div>
</template>

<script>
import Content from "@/components/all/content"

export default {
  name: 'app',
  components: {
    Content,
  }
}
</script>

<style>
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
  font-size:0.55rem;
  text-align:center;
}
</style>
