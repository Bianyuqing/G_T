<template>
       <div>
           <h2>商品搜索</h2>
        <router-link to="/search" class="input">
            <input type="text" @keydown.enter="search()"/>
            <span  @click="back()">取消</span>
        </router-link>
         <router-view></router-view>
       </div> 
</template>

<script>
    export default {
        data(){
            return{

            }
        },
        methods:{
            back(){
                this.$router.go(-1)
            },
            search(){

            }
        }
    }
</script>

<style lang="scss" scoped>
*{
    margin:0;
    padding:0;
}
input{
    width:70%;
    height:0.6rem;
    background:white;
    display:block;
    outline:none;
    padding-left:10px;
    border:none;
    font-size:20px;

}
.input{
    width:100%;
    height:0.75rem;
    display:flex;
    justify-content:space-around;
    align-items:center;
    background:rgb(242,242,242);
    
}
h2{
    width:100%;
    height:0.7rem;
    // border:1px solid;
    text-align:center;
    line-height:0.7rem;
    font-size:20px;
    font-weight:bold;
}
span{
    color:black;
}
</style>