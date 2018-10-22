<template>
    <div class="home">
      <section class="head">
        <header class="header">
          <div class="logo">
            <img src="./images/9.png" alt="">
          </div>

          <div class="search">
            <i class="iconfont icon-duigou01"></i>
            <input type="text" placeholder="找到456788款商品"  class="xsearch">
          </div>
        </header>

        <div class="wrapper">
           <ul>
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

          <!-- 如果需要导航按钮 -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>

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
          <header>
            <a  href="javascript:;">
              <span>品牌制造商直供</span>
              <i class="iconfont icon-right"></i>
            </a>
          </header>
          <div class="goods">
            <ul>
              <li>
                <a href="javascript:;">
                  <div>
                    <h4 class="title">新秀丽制造商</h4>
                    <span class="proce1">49</span>
                    <span class="proce2">元起</span>
                  </div>
                  <img src="./images/1.jpg" alt="">
                </a>

              </li>
              <li>
                <a href="javascript:;">
                  <div>
                    <h4 class="title">新秀丽制造商</h4>
                    <span class="proce1">49</span>
                    <span class="proce2">元起</span>
                  </div>
                  <img src="./images/1.jpg" alt="">
                </a>

              </li>
              <li>
                <a href="javascript:;">
                  <div>
                    <h4 class="title">新秀丽制造商</h4>
                    <span class="proce1">49</span>
                    <span class="proce2">元起</span>
                  </div>
                  <img src="./images/1.jpg" alt="">
                </a>

              </li>
              <li>
                <a href="javascript:;">
                  <div>
                    <h4 class="title">新秀丽制造商</h4>
                    <span class="proce1">49</span>
                    <span class="proce2">元起</span>
                  </div>
                  <img src="./images/1.jpg" alt="">
                </a>

              </li>
            </ul>
          </div>
        </section>
      </section>

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
        pagination: {
          el: '.swiper-pagination',
        },
        loop: true
      })
    }

  }

</script>
<style lang="stylus" rel="stylesheet/stylus">
/*  @import stylus '../../common/stylus/mixins.styl'*/
  .home
    background pink
    .head
        backgroud green
       .header
          background pink
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
        width: 100%
        height: 40px
        background: hotpink
        display flex
        clearFix()
        li
          float left
          font-size 18px
          padding-right 2px

     .swiper-container
        width: 100%
        height: 200px
        margin: 0 auto
        position: relative
        overflow: hidde
        list-style: none
        padding: 0
        z-index: 1
        .swiper-slide
          width: 375px
          height: 100%
          position: relative
          img
            width: 100%;
            height: 100%;



      .explain
        box-sizing: border-box
        width: 100%
        height 50px
        display: flex;
        background: #fff;
        padding: 0 5px;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        flex-direction: row;
        flex-wrap: nowrap;
        -webkit-box-align: center;
        align-items: center;
        justify-content: space-around;
        font-size: 12px
        margin-bottom: 8px
        .expItem
          display: inline-block;
      .GoodSale
        background: #fff
        margin-bottom: 2px
        display: block
        header
          display: flex;

          -webkit-box-align: center;
          align-items: center;
          -webkit-box-pack: center;
          justify-content: center;
          height: 4px
        goods
          padding-bottom: 2px
          display: block;


</style>
