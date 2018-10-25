<template>
    <div class="shopCart">
      <h3 class="title">购物车</h3>
      <ul class="center">
        <li class="expItem">
        <i class="icon icon-duigou01"></i>
        <span>30天无忧退货</span>
      </li>
        <li class="expItem">
          <i class="icon icon-duigou01"></i>
          <span>30天无忧退货</span>
        </li>
        <li class="expItem">
          <i class="icon icon-duigou01"></i>
          <span>30天无忧退货</span>
        </li>
      </ul>
      <div class="cart">
        <div class="img">
          <img src="./images/cart.png" alt="">
        </div>
        <div class="txt">
          <div class="inner">
              <div class="txtCon">去添加点什么吧</div>
              <div class="txtBtn" @click="$router.push('/person')">登录</div>
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
  @import  '../../common/stylus/mixins.styl'
  body
  overfow hidden
  .shopCart
    overfow hidden
    position relative
    height 100%
    .title
      height 40px
      font-size 20px
      line-height  40px
      text-align center
      background #fff
      color #333
    .center
      display flex
      height 10px
      line-height center
      margin-top 13px
      .expItem
        flex 1
        .icon
          width: 4px
          height: 4px
          color #ccc
        span
          float left

    .cart

      position absolute
      top 198px
      bottom 0px
      left 53px
      right 0px
      margin auto
      .img
        width: 124px
        height: 124px
      .txt
        width: 400px
        height: 100px
        text-align center
        .inner
          margin-top:98px
          margin-left :-112px
          .txtCon
            font-size 20px
            color #ccc
            margin 4px
          .txtBtn
            margin: auto;
            width: 211px
            height:40px
            font-size: 16px
            line-height:40px
            color: #fff;
            background-color: #b4282d;
            border-radius: 2px

</style>
