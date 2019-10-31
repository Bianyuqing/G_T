<template>
    <div class='hot_big'>
        <div class="hot_hd">
            <p class='yxd_hot'>热卖</p>
            <router-link to='/home/hot' class='yxd_hotTiao'>
                >
            </router-link>
        </div>
        <div class="hot_Content">
            <div class="hotItem" v-for='(item,index) in hot' :key='index' @click='hotTiao(index,item)'>
                <img :src="item.img" alt="">
                <p>{{item.name}}</p>
                <p>{{item.name1}}</p>
                <p style='color:red'>￥{{item.price}}</p>
           
            </div>
        </div>
        

    </div>
</template>
<script>
import HotTiao from '../HotTiao';
export default {
    name:'hotCom',
    components:{
        HotTiao
    },
    data(){
        return {
            hot:[],
        }
    },
     created(){
        this.getData();
    },
    methods: {
       hotTiao(index,item){
         // alert(index)
          this.$router.push(`/HotTiao/${index}/${item.name}/${item.name1}`)
        },
        
         getData(){
          
          //console.log('this.$http:',this.$http);
          this.$http.get('http://localhost:8080/api/banner.json')
          .then(res=>{
         // console.log(res)
           if(res.status==200){
              // console.log(res.data.yan)
            //    this.goodsList=res.data.yan;
              //console.log(res.data.hot)
                this.hot=res.data.hot;
           }
          })
        }
    }
}
</script>
<style scoped>
.hot_big{
    background: #f9f9f9;
    box-sizing: border-box;
    padding-bottom: .39rem;
    border-bottom: 1px solid #e9e9e9;
}
/* 新品内容图片样式设置 */
.yxd_hotTiao{
    margin-right: .28rem;
    color:#c6c6c6;
}
.hotItem  p:nth-of-type(2){
    margin-top: .15rem;
}
.hotItem  p:nth-of-type(3){
    margin-top: .31rem;
}
.hotItem  p:nth-of-type(1){
    width: 3rem;
    margin-top: 0.26rem;
}
.hot_Content{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
}
.hotItem:nth-of-type(odd){
    margin-top: 0.13rem;
    margin-left: .28rem;
}
.hotItem:nth-of-type(even){
    margin-right: .28rem;
     margin-top: 0.13rem;
}
.hotItem{
    width: 3.33rem;
    height: 5rem;
    background: #fff;
    border-radius: 10%;
     display: flex;
    /* justify-content: center; */
    flex-direction: column;
    align-items: center;
}
.hotItem img{
    width:  3.33rem;
    height: 3.3rem;
}

.hot_hd p:nth-of-type(1){
    margin-left: .44rem;
    border-left: 1px solid #000;
    padding-left: .18rem;
}
.hot_hd {
    
    margin-top: 0.21rem;
    width: 100%;
    height: 0.78rem;
    background: #fff;
 display:flex;
 justify-content: space-between;
 align-items: center;
}
    
</style>