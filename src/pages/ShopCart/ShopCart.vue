<template>
    <div class="shopCart">
      <h3 class="title">购物车</h3>
      <ul class="exlain">
        <li class="expItem">
        <i class="iconfont icon-duigou01"></i>
        <span>30天无忧退货</span>
      </li>
        <li class="expItem">
          <i class="iconfont icon-duigou01"></i>
          <span>30天无忧退货</span>
        </li>
        <li class="expItem">
          <i class="iconfont icon-duigou01"></i>
          <span>30天无忧退货</span>
        </li>
      </ul>
      <div class="cart">
        <div class="img">
          <img src="./images/car1.png" alt="">
        </div>
        <div class="txt">
          <div class="inner">
            <div class="txtCon">去添加点什么吧</div>
            <div class="txtBtn">登录</div>
          </div>
        </div>
      </div>

    </div>
</template>
<script>
  export default {
    data () {
      return {}
    }

  }

</script>
<style lang="stylus" rel="stylesheet/stylus">
.shopCart
  position: relative
  height: 100%


  .title
    font-size: 0.768rem;
    line-height: 1.877333333333333rem;
    text-align: center;
    background: #fff;
    color: #333;
  .explain
    /*display: block;*/
    display flex
    z-index: 1;
    height: 5px
    padding: 0 5px;

    .expItem
      color black
      align-items: center;
      justify-content: space-between
      display: flex;
      span
        float left
  .cart
    position: absolute;
    top:525px
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    height:12px
    text-align: center;
    .img
      display: inline-block;
      width:200px
      height: 80px
      margin-bottom: 10px
      background-position: center;
      background-repeat: no-repeat;
    .txt
      font-size: 14px
      line-height: 1;
      color: #7f7f7f;
      .inner
        .txtCon
          padding-bottom 20px
        .txtBtn
          margin: auto;
          width:209px
          height:45px
          font-size: 18px
          line-height: 45px
          color: #fff;
          background-color: #b4282d;
          border-radius: 4px
</style>
