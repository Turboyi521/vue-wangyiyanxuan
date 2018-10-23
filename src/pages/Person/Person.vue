<template>
    <div class="person">
      <div class="header">
        <div class="row">
          <!--   左-->
          <div class="home">
            <i class="iconfont icon-duigou01"></i>
          </div>
          <!--   中-->
          <div class="logo">
            <img src="./images/9.png" alt="">
          </div>
          <!--   右-->
          <div class="right">
            <div class="search">
              <a href="javascript">
                <i class="iconfont icon-duigou01"></i>
              </a>
            </div>
            <div class="car">
              <i class="iconfont icon-duigou01"></i>
            </div>
          </div>
        </div>
      </div>
      <section class="cont">
        <div class="logo">
          <img src="./images/1.png" alt="">
        </div>
        <div class="button">
          <div class="box1">
            <i class="icon  icon-home"> </i>
            <span class="txt">手机号码登录</span>
          </div>
          <div class="box2">
            <i class="icon  icon-home"> </i>
            <span class="txt">邮箱账号注册</span>
          </div>
        </div>
        <div class="quickLogin">
          <span>手机号快速注册</span>
          <i class="icon  icon-home"> </i>
        </div>

      </section>
      <section class="otherLogin">
        <div class="itemOther">
          <i class="icon  icon-weixin"> </i>
          <span>微信</span>
        </div>
        <div class="itemOther">
          <i class="icon  icon-weixin"> </i>
          <span>微信</span>
        </div>
        <div class="itemOther">
          <i class="icon  icon-weixin"> </i>
          <span>微信</span>
        </div>

      </section>
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
  .header
    position relative
    height 100%
    background pink
    display flex
    .row
      width: 367px
      display flex
      background #CCC
      height:40px
      padding-left:4px
      padding-right: 4px
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .home
        width:40px
        height: 40px
        display: inline-block;
        vertical-align: middle;
        /*background red*/
        margin-0 5px
        background-position: 0px -48px;
        .iconfont
          width: 40px
          height:40px
          display: block;
          background:url('./images/10.png')
          background-position: 42px 242px;
      .logo
        img
          flex 1
          width 100px
          height 40px
      .right
        box-sizing: border-box;
        text-align: center;
        .search
          margin-right: 8px
          float: left;

          .iconfont
            width: 40px
            height:40px
            display: block;
            background:url('./images/10.png')
            background-position: 0px -48px;
        .cart
          float: left;




  .cont
    width: 750px
    height 400px
    .logo
      width: 50%
      height: 50%
      text-align center
      img
        width: 50%
        height 36%
        margin-top 61px


    .button
      width: 100%
      height 100px
      .box1
        width: 260px
        height 46 px
        background  #b4282d;
        margin-left 66px
        .icon
          text-align center
          width: 8px
          height: 8px
        .txt
          font-size 14px
          font-color #fff
          line-height 46px
          text-align center
      .box2
        margin-top 10px
        width: 260px
        height 46 px
        background  #fff
        margin-left 66px

        .icon
          text-align center
          width: 8px
          height: 8px
        .txt
          font-size 14px
          font-color #fff
          line-height 46px
          text-align center
    .quickLogin
      margin-top 20px
      color: #333;
      font-size: 14px
      width: 750
      height 30px
      text-align: center;
      span
        margin-left -386px
        txt
          line-height 30px
          text-align center


  .otherLogin
    position: absolute;
    width: 100%;
    height: 60px
    left: 0;
    bottom:30px;
    text-align: center;
    .itemOther
      height: 20px
      border-right: 1px solid #979797;
      display: inline-block;
      text-align: center;
      color: #979797;
      padding: 0px 30px
      font-size 14px
      .icon
        width: 8px
        height: 8px
        background red
</style>
