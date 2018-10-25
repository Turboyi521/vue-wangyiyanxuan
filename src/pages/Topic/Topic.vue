<template>
  <div class="Three">
    <div class="Topic">
      <div class="header">
        <div class="row">
          <!--   左-->
          <div class="home"  @click="$router.push('/home')">
            <i class="iconfont icon-duigou01"></i>
          </div>
          <!--   中-->
          <div class="logo">
            <img src="./images/9.png" alt="">
          </div>
          <!--   右-->
          <div class="right">
            <div class="search"  @click="$router.push('/shopCart')">
              <a href="javascript"  >
                <i class="iconfont icon-duigou01"></i>
              </a>
            </div>
            <div class="car">
              <i class="iconfont icon-duigou01"></i>
            </div>
          </div>
        </div>
      </div>
      <!--  第一个轮播图-->
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
        <div class="images">
          <div class="imagesList">
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

      <div class="recommend">
        <h3 class="title">为你推荐</h3>
        <div class="itemMajor">
          <a href="javascript:;">
            <img src="./images/6.jpg" alt="">
          </a>
          <div class="info">
            <div class="line1">
              <div class="name">哇啊啊啊啊</div>
              <div class="price">45yuan</div>
            </div>
            <div class="line2">下下下下下下</div>

          </div>
        </div>
        <div class="items">
          <div class="topicInfo">
            <div class="line1">
              <div class="topicTitle">今年世界杯喝什么</div>
            </div>
            <div class="line2">
              <div class="cont">救救急UI及UI记记账救救急UI及UI记记账</div>
            </div>
          </div>
          <div class="topicPic">
            <img src="./images/1.png" alt="">
            <div class="topicTag">
              <div class="tag">丁磊的好货推荐</div>
            </div>
          </div>
        </div>
        <div class="items">
          <div class="topicInfo">
            <div class="line1">
              <div class="topicTitle">今年世界杯喝什么</div>
            </div>
            <div class="line2">
              <div class="cont">救救急UI及UI记记账救救急UI及UI记记账</div>
            </div>
          </div>
          <div class="topicPic">
            <img src="./images/1.png" alt="">
            <div class="topicTag">
              <div class="tag">丁磊的好货推荐</div>
            </div>
          </div>
        </div>
      </div>
      <div class="topicShow">
        <h3 class="title">十点一刻</h3>
        <div class="ShowSwiper">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
               <a href="javascript:;">
                 <div class="lineTitle">

                   <span class="inner">今日话题</span>

                 </div>
                 <div class="inner">如果生命只剩一天</div>
                 <div class="desc">你会选择怎么度过</div>
                 <div class="joinInfo">7人参与话题</div>
               </a>
              </div>

            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
            <!-- 如果需要滚动条 -->

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
  import {mapState} from 'Vuex'

  export default {
    data () {
      return {}
    },

    mounted(){
      new BScroll('.images',{click:true,scrollX:true}),
        new BScroll('.Three',{click:true,scrollY:true})

      new Swiper('.swiper-container', {
          pagination: {
            el: '.swiper-pagination',
          },
          loop: true
        }),
      this.$store.dispatch('getTopicData')
    },


  }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import  '../../common/stylus/mixins.styl'
  .Three
    height: 600px
    .Topic
      overflow hidden
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
        .images
          background pink
          width 100%
          height 100%
          .imagesList
            width: 200%
            black pink
            display flex
            justify-content center
            align-items flex-start
            /*flex-wrap wrap*/
            display flex
            .link_to_food
              flex 1
              .food_container
                margin 0 10px
                display block
                width 75%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 60%
                  height 100%
                  text-align center
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





      .recommend
        padding 10px
        background #fff
        h3
          font-size 14px
          line-height 53px
          text-align center
        .itemMajor
          border 1px solid blue
          margin-bottom 6px
          position relative
          img
            height 200px
          .info
            box-sizing: border-box;
            padding 8px
            color black
            width: 100%
            .line1
              margin-bottom: 10px
              align-items: center;
              position  relative
              font-size 16px
              height 25px
              .name
                float  left
              .price
                float right
            .line2
              margin-top 4px
              font-size 12px
              margin-left 3px
              color #ccc



        .items
          border 1px solid blue
          margin-top 10px
          background-color red
          display flex
          .topicInfo
            flex 1
            height 60px
            margin 0 5px
            flex-direction: column;
            justify-content: center;
            overflow: hidden;
            position: relative;
            display inline-block
            width: 133px
            height: 122px
            .line1
              display inline-block
              margin-bottom: 4px
              line-height: 22px
              .topicTitle
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                font-size: 16px
                margin-right: 4px
                color black
                font-size 16px
            .line2

              margin: 0;
              color #CCC
              font-size 12px
              display inline-block
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;


          .topicPic
            flex 1
            float right
            position: relative;
            width:100%
            height: 100%
            overflow: hidden;
            img
              width: 100%;
            .topicTag
              position: absolute;
              top: 7px
              left: 14px
              font-size: 12px;
              .tag
                padding: 0 2px
                font-size: 12px
                line-height: 14px;
                border: 1px solid #d9d9d9;
                border-radius: 2px
                color: #333;
                background-color: rgba(255,255,255,0.9);





      .topicShow
        padding 10px
        background #fff
        h3
          font-size 14px
          line-height 53px
          text-align center
        .ShowSwiper
          width: 375px
          .swiper-container
            .swiper-wrapper
              .swiper-slide
                background url("./images/0.png")
                a
                  position relative
                  display block
                  width: 150px
                  height: 150px
                  text-align: center;
                  color: #333;
                  padding: 5px

                  font-size 16px
                .lineTitle
                  .inner
                    color red
                    text-align center
                    margin 5px 0
                  .desc
                    margin 5px 0
                  .joinInfo
                    margin 5px 0















</style>
