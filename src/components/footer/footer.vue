<template>
    <div>
        <footer>
            <ul>
               <router-link to="/home" tag="li">
                   <svg class="icon" aria-hidden="true">
                   <use xlink:href="#icon-shouye"></use>
                   </svg>
                    <p>首页</p>
               </router-link>
               <router-link to="/classify" tag="li">
                    <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-fenlei"></use>
                    </svg>
                     <p>分类</p>
               </router-link>
               <router-link to="/cart" tag="li">
                    <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-gouwuche"></use>
                    </svg>
                   <p>购物车</p>
               </router-link>
               <router-link to="/my" tag="li">
                    <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-xiazai"></use>
                    </svg>
                    <p>My</p>
               </router-link>
            </ul>
            <!-- <svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-fenlei"></use>
</svg> -->
        </footer>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                
            }
        }
    }
</script>

<style lang="scss" scoped>
*{
    margin:0;
    padding:0;
}
footer{
    width:100%;
    height:60px;
    background:pink;
    position:fixed;
    bottom:0;
}
    ul,li{
        list-style:none;
    }
    ul{
       display:flex;
       height:60px;
    //    border:1px solid;
       li{
           width:25%;
           border:1px solid;
           text-align:center;
           line-height:60px;
       p{
           font-size:0.36rem;
           border:1px solid;
           color:green;
          margin-bottom:100px;
       }
       }
    }
    
</style>