<template>
  <div class="list">
      <div class="pansi">
        <div class="panst"></div>
        <div class="pantan"></div>
      </div>

      <div class="kaifei">
        <div class="feilai">登录手机号，同步全渠道订单和优惠劵</div>
        <button class="btn">登录</button>
      </div>

      <div class="maisie">
        <div>
          <p>0</p>
          <p>积分</p>
        </div>
        <div>
          <p>0</p>
          <p>卡</p>
        </div>
        <div>
          <p>0</p>
          <p>优惠价/码</p>
        </div>
      </div>

      <div class="nan-dingdan">
        <div>
          <p>我的订单</p>
          <p>查看全部订单></p>
        </div>
        <div>
            <ul v-for="(item,key) in navtype" :key="key">
                <li>
                    <svg class="icon" aria-hidden="true">
                        <use :xlink:href="`#icon-${item.icon}`" />
                    </svg>
                </li>
               <li>{{item.name}}</li>
            </ul>
          
        </div>
      </div>

      <div class="nan-kaofei">
          <ul v-for="(item,key) in list" :key="key">
              <li>
                  <svg class="icon" aria-hidden="true">
                    <use :xlink:href="`#icon-${item.icon}`"></use>
                  </svg>
              </li>
              <li>{{item.name}}</li>
          </ul>
      </div>
    </div>
</template>

<script>

export default {
  name: "List",
  data(){
      return{
           navtype:[
                 {id:1,name:'待付款',url:'',icon:'daifukuan'},
                 {id:2,name:'待发货',url:'',icon:'daifahuo'},
                 {id:3,name:'待收货',url:'',icon:'daishouhuo'},
                 {id:4,name:'待评价',url:'',icon:'daipingjia'},
                 {id:5,name:'退款/售后',url:'',icon:'gerenzhongxin_tuikuanshouhou'}
             ],
             list:[
                 {id:1,name:"客服聊天",url:"",icon:"liaotian"},
                 {id:2,name:"收货地址",url:"",icon:"shouhuodizhi"},
                 {id:3,name:"个人信息",url:"",icon:"gerenxinxi"},
                 {id:4,name:"账号设置",url:'',icon:"zhanghaoshezhi"}
             ]
      }
  }
};
</script>

<style lang="scss" scoped>
.icon {
  width: 1em;
  height: .38rem;;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.list {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: auto;
  background: #f8f8f6;
  .pansi {
    width: 100%;
    height: 3.5rem;
    background: url("../../../public/image/beijingtu.png");
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .panst {
      width: 1.25rem;
      height: 1.25rem;
      border-radius: 50%;
      background: #fff;
    }
    .pantan {
      width: 50%l;
      height: 0.35rem;
      font-size: 0.3rem;
      margin-top: 0.2rem;
      font-weight: bold;
    }
  }
  .kaifei {
    width: 100%;
    height: 1rem;
    border-bottom: 1px solid #f8f8f6;
    display: flex;
    justify-items: center;
    align-items: center;
    justify-content: space-between;
    align-items: center;
    .feilai {
      width: 4.3rem;
      font-size: 0.23rem;
      font-weight: bold;
      margin-left: 0.3rem;
    }
    .btn {
      width: 1.05rem;
      height: 0.65rem;
      background: black;
      color: #fff;
      border: none;
      outline: none;
      font-size: 0.23rem;
      margin-right: 0.3rem;
    }
  }
  .maisie {
    width: 7rem;
    height: 1.5rem;
    background: #fffffd;
    margin-top: 0.2rem;
    margin-left: 0.3rem;
    display: flex;
    justify-items: center;
    align-items: center;
    justify-content: space-between;
    font-size: 0.24rem;
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      p:nth-of-type(1) {
        font-weight: bold;
      }
      p:nth-of-type(2) {
        margin-top: 0.3rem;
        color: #9a9a98;
      }
    }
    div:nth-of-type(1) {
      margin-left: 0.9rem;
    }
    div:nth-of-type(3) {
      margin-right: 0.65rem;
    }
  }
  .nan-dingdan {
    width: 7rem;
    height: 2.75rem;
    background: #fff;
    margin-top: 0.2rem;
    margin-left: 0.3rem;
    box-sizing: border-box;
    padding-left: 0.4rem;
    div:nth-of-type(1){
      display: flex;
      height: 0.9rem;
      border-bottom: 1px solid #f4f4f2;
      justify-items: center;
      align-items: center;
      justify-content: space-between;
      p:nth-of-type(1) {
        font-weight: bold;
        font-size: 0.28rem;
      }
      p:nth-of-type(2) {
        margin-right: 0.4rem;
        color: #a7a7a5;
        font-size: 0.24rem;
      }
    }
    div:nth-of-type(2){
        height: 1.85rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: .24rem;
        ul{
            width: 20%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        li:nth-of-type(2){
            margin-top: .2rem;
        }
    }
  }
  .nan-kaofei{
      width: 7rem;
      height: 1.65rem;
      background: #fff;
      margin-top: .2rem;
      margin-left: .3rem;
      display: flex;
      justify-items: center;
      align-items: center;
      ul{
          display: flex;
          flex-direction: column;
          width: 25%;
          justify-content: center;
          align-items: center;
          li:nth-of-type(2){
              margin-top: .45rem;
              font-size: .2rem;
          }
      }

  }
}
</style>