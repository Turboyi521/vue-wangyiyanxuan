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
      <div class="wrapper" ref="wrapper">
        <ul>
          <li v-for="(name, index) in navlist" :key="index" :class="{'active':current === index}" @click="currentIndex(index)">
            <span>{{name}}</span>
          </li>
        </ul>
      </div>
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
          <div class="expItem"  v-for="(name,index) in homeData.policyDescList" :key="index">
            <i class="iconfont icon-duigou01"></i>
            <span>{{name.desc}}</span>
          </div>
        </div>
        <!--品牌制造商直供-->
      <section class="GoodSale">
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
                  <span class="title">尚硅谷尚硅谷尚硅谷尚硅谷</span>
                  <span class="proce">188元起</span>

                </div>
                <img src="./images/11.png" alt="">
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <div class="ctn">
                  <span class="title">尚硅谷尚硅谷尚硅谷尚硅谷</span>
                  <span class="proce">188元起</span>

                </div>
                <img src="./images/11.png" alt="">
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <div class="ctn">
                  <span class="title">尚硅谷尚硅谷尚硅谷尚硅谷</span>
                  <span class="proce">188元起</span>

                </div>
                <img src="./images/11.png" alt="">
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <div class="ctn">
                  <span class="title">尚硅谷尚硅谷尚硅谷尚硅谷</span>
                  <span class="proce">188元起</span>

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
      </div>
    </div>
</template>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import BScroll from 'better-scroll'
  import {mapState,mapGetters} from 'Vuex'

  export default {
    data () {
      return {
        navlist:['推荐', '居家', '配件', '服装', '电器', '洗护', '饮食', '餐厨', '婴童', '文体', '特色区'],
        current :0
      }
    },
    mounted(){
      new BScroll('.wrapper',{click:true,scrollX:true})
      new BScroll('.images',{click:true,scrollX:true})

      new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
        },
        loop: true
      })
    },
    computed:{
      ...mapState(['homeData']),
      ...mapGetters(['newHome'])

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
       ul
        width: 200%
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
        margin-bottom 4px
        ul
          overflow  hidden
          marign 0 10px
          position relative
          marign 0 10px
          height 130px
          li
            width: 40%
            height: 40%
            float left
            margin-right 3px
            position relative
            margin-bottom: 4px
            overflow hidden
            background #ccc
            a
              display block
              width: 100%
              height: 100%
              color black
              text-decoration none
              display flex
              .ctn
                position: absolute
                left 0px
                right 0px
                display block
                padding 2px 0 0 2px
                font-size 12px
                .title
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  overflow: hidden;
                  display block
                  font-size: 18px
                  margin-bottom: 10px
                .proce
                  font-size: 12px
                  margin-bottom:10px
              img
                width: 100%
                height: 100%

    .indexFloor
      width: 100%
      height: 100%
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
                  width 100%
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





</style>
