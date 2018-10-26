<template>
  <div class="Three">
      <!--    识物页-->
    <div class="Topic" v-if="topicData">
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
          <div class="swiper-slide" v-for="(name,index) in topicData.banner" :key="index">
            <img :src="name.picUrl" alt="">
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        <!-- 如果需要滚动条 -->
        <div class="swiper-scrollbar"></div>
      </div>
      <!--  第二个轮播图-->
      <div class="srcoll-wrapper">
        <ul class="images">
          <li  v-for="(name,index) in topicData.column" :key="index">
              <img :src="name.picUrl" alt="">
              <div class="tNum">
                <span class="tNumCon">{{name.articleCount}}</span>
              </div>
              <div class="title">{{name.title}}</div>

          </li>
        </ul>
      </div>
     <!--   为你推荐-->
      <div v-if="topicData.recommend">
        <div class="recommend" v-for="(name,index) in topicData.recommend.Item.slice(0,1)" :key="index">
          <h3 class="title">为你推荐</h3>
          <div class="itemMajor">
            <a href="javascript:;">
              <img :src="name.picUrl" alt="">
            </a>
            <div class="info">
              <div class="line1">
                <div class="name">{{name.title}}</div>
                <div class="price">{{name.priceInfo}}yuan</div>
              </div>
              <div class="line2">{{name.subTitle}}</div>

            </div>
          </div>

            <div class="items"v-for="(name,index) in topicData.recommend.Item.slice(1,3)">
              <div class="topicInfo" >
                <div class="line1">
                  <div class="topicTitle">{{name.title}}</div>
                </div>
                <div class="line2">
                  <div class="cont">{{name.subTitle}}</div>
                </div>
              </div>
              <div class="topicPic">
                <img :src="name.picUrl" alt="">
                <div class="topicTag">
                  <div class="tag">丁磊的好货推荐</div>
                </div>
              </div>
            </div>


        </div>
      </div>
      <!--  十点一刻-->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="javascript:;">
              <img src="./images/0.png" alt="">
              <div class="lineTitle">
                <span class="inner">今日话题</span>
              </div>
              <div class="inner">如果生命只剩一天</div>
              <div class="desc">你会选择怎么度过</div>
              <div class="joinInfo">7人参与话题</div>
            </a>

          </div>
          <div class="swiper-slide">
            <a href="javascript:;">
              <img src="./images/0.png" alt="">
              <div class="lineTitle">
                <span class="inner">今日话题</span>
              </div>
              <div class="inner">如果生命只剩一天</div>
              <div class="desc">你会选择怎么度过</div>
              <div class="joinInfo">7人参与话题</div>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:;">
              <img src="./images/0.png" alt="">
              <div class="lineTitle">
                <span class="inner">今日话题</span>
              </div>
              <div class="inner">如果生命只剩一天</div>
              <div class="desc">你会选择怎么度过</div>
              <div class="joinInfo">7人参与话题</div>
            </a>
          </div>
        </div>



      </div>
     <!-- 严选臻品-->
      <div v-if="topicData.recommend">
        <div class="recommend" v-for="(name,index) in topicData.recommend.Item.slice(0,1)" :key="index">
          <h3 class="title">严选臻品</h3>
          <div class="itemMajor">
            <a href="javascript:;">
              <img :src="name.picUrl" alt="">
            </a>
            <div class="info">
              <div class="line1">
                <div class="name">{{name.title}}</div>
                <div class="price">{{name.priceInfo}}yuan</div>
              </div>
              <div class="line2">{{name.subTitle}}</div>

            </div>
          </div>

          <div class="items"v-for="(name,index) in topicData.recommend.Item.slice(1,3)">
            <div class="topicInfo" >
              <div class="line1">
                <div class="topicTitle">{{name.title}}</div>
              </div>
              <div class="line2">
                <div class="cont">{{name.subTitle}}</div>
              </div>
            </div>
            <div class="topicPic">
              <img :src="name.picUrl" alt="">
              <div class="topicTag">
                <div class="tag">丁磊的好货推荐</div>
              </div>
            </div>
          </div>


        </div>
      </div>
     <!-- 严选look-->
      <section class="look" v-for=" (name,index) in topicData.yxLook" :key="index">
        <h3 class="title">严选LOOK</h3>
        <a href="javascript:;">
          <img :src="name.avatar" alt="">
          <div class="authorContainer">
            <div class="author">
              <div class="authorPic">
                <img :src="name.picUrl" alt="">
              </div>
              <div class="authorName">a****0</div>
            </div>
            <div class="desc">{{name.content}}</div>
          </div>
        </a>
      </section>
      <!--更多精彩-->
      <section class="moveTopic" v-for="(name,index) in topicData.yxWeek">
         <div class="moveTit">

           <span class="inner">更多精彩</span>

         </div>
          <a href="javascript:;" class="item">
            <img :src="name.itemPicUrl" alt="">
            <div class="desc">{{name.title}}</div>
          </a>
      </section>
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
      this.$store.dispatch('getTopicData')
      new BScroll('.srcoll-wrapper',{click:true,scrollX:true}),
      new BScroll('.Three',{click:true,scrollY:true}),
      new BScroll('.srcoll-wrapper',{click:true,scrollX:true}),

      new Swiper('.swiper-container', {
          pagination: {
            el: '.swiper-pagination',
          },
          loop: true
        })

    },
    computed:{
      ...mapState(['topicData'])
    },
    watch:{
      topicData:function(val){

      }
    }
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
            margin 0 5px
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
            .lineTitle
            .inner

              text-align center
              margin 5px 0
            .desc
              margin 5px 0
            .joinInfo
              margin 5px 0
      .srcoll-wrapper
        width: 1
        margin: 0;
        padding: 0;
        .images
          width: 400%
          clearFix()
          li
            width: 120px
            height: 80px
            float left
            position relative
            margin-right 10px
            img
              width: 100%
              height: 100%
            .tNum
              position absolute
              top: 0;
              right: 0;
              width: 40px
              height: 20px
              border-radius:2px
              display block
              .tNumCon
                position: absolute;
                top: 0;
                right: 2px
                width: 80px;
                height: 20px
                line-height: 10px
                font-size: 12
                text-align: right;
                margin 9px

            .title
              color: #333;
              font-size: 14
              line-height: 1;
              text-align: center;
              height: 15px
              margin-top 3px
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

          margin-top 10px

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

      .look
        padding 10px
        background #fff
        h3
          font-size 14px
          line-height 53px
          text-align center
        a
          img
            width: 100%
            height: 100%
          .authorContainer
            padding 8px
            .author
              display flex
              align-items: center;
              .authorPic
                flex 1

                height: 28px
                border-radius: 50%;
                margin-right: 22px
                border: 1px solid #d9d9d9;
                overflow: hidden;
              .authorName
                flex 4


            .desc
              font-size: 14px
              color: #7f7f7f;
              line-height: 20px
              padding: 8px
      .moveTopic
        margin: 0 0.64rem 0.64rem;
        .moveTit
          font-size 14px
          line-height 63px
          text-align center
          color #000
          .inner
            top-border-1px(red)
        .item
          display: block;
          padding: 10px
          background: #fff;
          color: #333;
          margin-bottom:13px

          img
            width: 100%
          .desc
            margin-top:13px


</style>
