<template>

<div>
   
      
        <router-view></router-view>
       
    
</div>

   
   
</template>

<script>


    export default {
        data(){
            return{

            }
        },

        components:{}
        

    
    }
</script>

<style lang="scss" scoped>
   *{
       width:100%;
       height:100%;
       
   }
   .contt{
       width:100%;
       height: 100%;
       display: flex;
       flex-direction: column;
       .main{
           width: 100%;
           height:80%;
        //    overflow: hidden;
        // flex:1;
        //    display: flex;
            >div{
                width:100%;
                min-height: 103%;
            }
   .content{
       width:100%;
       height:100%;
       display:flex;
       flex-direction: column;
       
   }
   .box{
       width:100%;
       
       .box>div{
            flex:1;
            min-height:101%;
       }
   }
   header{
       width:100%;
       height:50px;
       background:pink;
       font-size:0.3rem;
       text-align:center;
       line-height:60px;
   }
       }
   }
   .content {
       width: 100%;
       height: 100%;
       flex: 1;
       overflow: auto;
   }

 
</style>