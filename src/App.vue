<template>
  <div id="app">
    
       <Content></Content>
   

  
  </div>
</template>

<script>

import HelloWorld from './components/HelloWorld.vue'
import Content from "@/components/all/content"

export default {
  name: 'app',
  components: {
    
    Content,

    HelloWorld,
    Content,
  }
}
</script>

<style lang="scss">
body,html{
  width: 100%;
  height: 100%;
}
#app{
  width: 100%;
  height: 100%;

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
  font-size:0.55rem;

}
</style>
