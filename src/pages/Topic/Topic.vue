<template>
    <div class="Topic">
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
    <!--  轮播图-->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="./images/1.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./images/2.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./images/3.jpg" alt="">
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        <!-- 如果需要滚动条 -->
        <div class="swiper-scrollbar"></div>
      </div>

    <!--  第二个轮播图-->
      <div class="goods-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/12.png">
              </div>
               <div class="name">夏季爆品</div>
               <div class="nameDoc"> 媲美现煮</div>
               <div class="price">¥98</div>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/12.png">
              </div>
              <div class="name">夏季爆品</div>
              <div class="nameDoc"> 媲美现煮</div>
              <div class="price">¥98</div>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/12.png">
              </div>
              <div class="name">夏季爆品</div>
              <div class="nameDoc"> 媲美现煮</div>
              <div class="price">¥98</div>
            </a>
            <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="./images/12.png">
            </div>
            <div class="name">夏季爆品</div>
            <div class="nameDoc"> 媲美现煮</div>
            <div class="price">¥98</div>
          </a>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    data () {
      return {}
    },
    mounted(){
      new Swiper('.swiper-container', {
        loop: true, // 循环模式
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
      })
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




  .swiper-container
    height 203px
    .swiper-wrapper
      margin-top 10px
      .swiper-slide
        margin 0 10px
        img
          width: 100%
          height: 100%
  .goods-container
    width 100%
    height 100%
    .swiper-wrapper
      background pink
      width 100%
      height 100%
      .swiper-slide
        black pink
        display flex
        justify-content center
        align-items flex-start
        /*flex-wrap wrap*/
        .link_to_food
        /*  background green*/
          width 25%
          margin 0 2px
          .food_container
            margin 0 10px
            display block
            width 100%
            text-align center
            padding-bottom 10px
            font-size 0
            img
              display inline-block
              width 100%
              height 100%
          .name
            display block
            width 100%
            text-align center
            font-size 13px
            color black
            margin 2px 0
          .nameDoc
            text-align center
            font-size 13px
            color #CCC
          .price
            display block
            width 100%
            text-align center
            font-size 13px
            color black
            margin 2px 0













</style>
