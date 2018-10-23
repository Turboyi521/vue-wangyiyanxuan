<template>
    <div class="home">

        <header class="header">
          <div class="logo">
            <img src="./images/9.png" alt="">
          </div>

          <div class="search">
            <i class="iconfont icon-duigou01"></i>
            <input type="text" placeholder="找到456788款商品"  class="xsearch">
          </div>
        </header>
       <!-- 横向滑动-->
        <div class="wrapper">
           <ul class="content">
             <li>
             <span>推荐</span>
           </li>
             <li>
               <span>推荐</span>
             </li>
             <li>
               <span>推荐</span>
             </li>
             <li>
               <span>推荐</span>
             </li>
             <li>
               <span>推荐</span>
             </li>
             <li>
               <span>推荐</span>
             </li>
             <li>
               <span>推荐</span>
             </li>
             <li>
               <span>推荐</span>
             </li>
             <li>
               <span>推荐</span>
             </li>
             <li>
               <span>推荐</span>
             </li>
             <li>
               <span>推荐</span>
             </li>
             <li>
               <span>推荐</span>
             </li>
             <li>
               <span>推荐</span>
             </li>

           </ul>
        </div>
        <!--轮播图-->
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
      <!--  服务政策-->
        <div class="explain">
          <div class="expItem">
            <i class="iconfont icon-duigou01"></i>
            <span>网易自营品牌</span>
          </div>
          <div class="expItem">
            <i class="iconfont icon-duigou01"></i>
            <span>网易自营品牌</span>
          </div>
          <div class="expItem">
            <i class="iconfont icon-duigou01"></i>
            <span>网易自营品牌</span>
          </div>
        </div>
        <!--品牌制造商职工-->
        <section class="GoodSale">
      <!--    文字-->
          <header class="header">
            <a  href="javascript:;">
              <span>品牌制造商直供</span>
              <i class="iconfont icon-right"></i>
            </a>
        </header>
          <div class="goods">
            <ul>
              <li>
                <a href="javascript:;">
                  <div class="ctn">
                    <h4>海外制造商</h4>
                      <span class="proce">45元起</span>
                  </div>
                  <img src="./images/11.png" alt="">
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <div class="ctn">
                    <h4>海外制造商</h4>
                    <span class="proce">45元起</span>
                  </div>
                  <img src="./images/11.png" alt="">
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <div class="ctn">
                    <h4>海外制造商</h4>
                    <span class="proce">45元起</span>
                  </div>
                  <img src="./images/11.png" alt="">
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <div class="ctn">
                    <h4>海外制造商</h4>
                    <span class="proce">45元起</span>
                  </div>
                  <img src="./images/11.png" alt="">
                </a>
              </li>
            </ul>

          </div>
        </section>
      <!--新品首发   -->
        <div class="indexFloor">
          <div class="move">
          <a href="">
            <span>新品首发</span>
            <div class="all">
              <h2>查看全部</h2>
              <i class="iconfont icon-duigou01"></i>

            </div>
          </a>
        </div>
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
    </div>
</template>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import BScroll from 'better-scroll'
  export default {
    data () {
      return {}
    },
    mounted(){
      new BScroll('.wrapper',{click:true,scrollX:true})

      new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
        },
        loop: true
      })
    }

  }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import  '../../common/stylus/mixins.styl'
  .home
    overflow hidden
    .header
      width 40px
      height 50px
      position relative
      .logo
        position absolute
        left 0px
        top 0px
        img
          width 85px
          padding-top 15px
          padding-left 8px
      .search
        position absolute
        left 100px
        top 10px
        .xsearch
          width 200px
          border-radius 8px
          height 20px
          float right
          padding 10px
          out-line none

    .wrapper
      .content
        width: 200%
        display flex
        height: 30px
        li
          float left
          padding 6px 8px
          span
            font-color black
    .swiper-container
        width 100%
        height 200px
        margin 0 auto
        position relative
        overflow hidde
        list-style none
        padding 0
        z-index 1
        .swiper-slide
          width 375px
          height 100%
          position relative
          img
            width 100%;
            height 100%;
    .explain
        box-sizing border-box
        width 100%
        height 50px
        display flex
        background #fff
        padding 0 5px
        -webkit-box-orient horizontal
        -webkit-box-direction normal
        flex-direction row
        flex-wrap nowrap
        -webkit-box-align center
        align-items center
        justify-content space-around
        font-size 12px
        margin-bottom 8px
        .expItem
          display inline-block;


    .GoodSale
      background #fff
      margin-top 4px
      width: 100%
      height: 100%
      .header
        width: 100%

        display flex
        height 40px
        font-size 20px
        justify-content center
        align-items center
        a
          width: 50%
          color #000
          display flex
      .goods
        width:100%
        ul
          background #fff
          overflow hidden
          li
            width: 40%
            float left
            background #ccc
            margin 10px 10px
            .ctn
              font-size 20px
              color #000
          img
            width: 100%
            height: 100%

    .indexFloor
      width: 100%
      height: 100%
  /*    background lightseagreen*/
      .move
        background lightseagreen
        height 106px
        margin-bottom 20px
        display flex
        justify-content center
        align-items center

        span
          font-size 26px
          padding 2px
        .all
          background #ccc
          font-size 20px
          margin 10px
          font-color black


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
