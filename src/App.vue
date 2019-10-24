<template>
  <div id="app">
       <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  
}
</script>

<style>
*{
  margin:0;padding:0;
}
.red{
  color:rgb(211, 49, 49);
}
body,html{
  width: 100%;
  height: 100%;
}
#app{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  font-size:.38rem;
  text-align:center;
}
</style>
