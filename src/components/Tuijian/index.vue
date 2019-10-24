<template>
    <div class='yxd_tui'>
        <p class='yxd_pin'>品牌推荐</p>
         <div class='yxd_lunbo'>
             <wc-swiper v-if ='lunbo.length' class='swp'>
                
                <wc-slide v-for='(item) in lunbo' :key='item.id'>
                        <img :src="item.img" alt="" class='yxd_lunbo_img'>
                </wc-slide>
            </wc-swiper>
         </div>
    </div>
</template>
<script>
export default {
    name:'Tuijian',
    data(){
        return {
            lunbo:[],
        }
    },
     created(){
        this.getData();
    },
    methods: {
        
         getData(){
          
          //console.log('this.$http:',this.$http);
          this.$http.get('http://localhost:8080/api/banner.json')
          .then(res=>{
         // console.log(res)
           if(res.status==200){
              // console.log(res.data.yan)
            //    this.goodsList=res.data.yan;
              //console.log(res.data.tuijian)
                this.lunbo=res.data.tuijian;
           }
          })
        }
    }
}
</script>
<style  scoped>
.yxd_tui{
    background: #f9f9f9;
}
/* 品牌推荐 */
.yxd_pin{
    margin-top: .55rem;
    margin-left: .24rem;
    font-size: 0.3rem; 
    border-left: 1.5px solid #000;
    background: #fff;
    box-sizing:border-box;
    padding-left: .17rem;
}
    /* 轮播部分 */
    .yxd_lunbo{
        width: 100%;
        height: 4rem;
       border-bottom: 1px solid #e6e6e6;
    }
    .yxd_lunbo_img{
        margin-top: .31rem;
         width: 94%;
        height: 3.52rem;
        margin-left: .2rem;
       
    }
</style>