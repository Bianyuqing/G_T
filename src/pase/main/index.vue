<template>
    <div>
        <div class="header">
            <p @click="wd_hui" > &lt; </p>
            <p>{{this.$route.params.title}}</p>
        </div>
        <NewCom></NewCom>
        <HotCom></HotCom>
        <Shafa></Shafa>
        <BedCom></BedCom>
        <ManyCom></ManyCom>
    </div>
</template>
<script>

// 引入新品数据
import NewCom from '../../components/NewCom'
// 引入热卖部分
import HotCom from '../../components/HotCom'
// 引入热卖沙发部分
import Shafa from '../../components/Shafa'
// 引入床部分
import BedCom from '../../components/BedCom'
// 引入更多部分
import ManyCom from '../../components/manyCom'
export default {
    methods: {
        wd_hui(){
            this.$router.go(-1)
        }
    },
    components:{
            NewCom,
            HotCom,
            Shafa,
            BedCom,
            ManyCom,
    },
    computed: {
        // ...mapState(['title'])
    },
}
</script>
<style lang="scss" scoped>
    .header{
        width: 100%;
        height: 1rem;
        display: flex;
        // justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        padding:0 .2rem ;
        // color: #;
        p{
        font-size: .3rem;
        margin-right: .1rem;

        }
        p:nth-of-type(1){
        font-size: .5rem;

        }
    }
</style>
