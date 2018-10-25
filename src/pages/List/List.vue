<template>
    <div class="list">
      <!--上方-->
       <header class="search">
         <div class="inner">
           <div class="ipt">
             <i class="icon icon-duigou01"></i>
             <input  placeholder="搜索商品, 共9723款好物">
           </div>
         </div>
       </header>
      <!--下方滑动-->
      <section class="main">
        <div class="leftMenu">
          <div class="inner">
            <ul>
              <li class="item "  >
                <a href="javascript:;">推荐专区</a>
              </li>
              <li class="item ">
                <a href="javascript:;">推荐专区</a>
              </li>
              <li class="item ">
                <a href="javascript:;">推荐专区</a>
              </li>
              <li class="item ">
                <a href="javascript:;">推荐专区</a>
              </li>
              <li class="item ">
                <a href="javascript:;">推荐专区</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="rightMenu">
          <div class="wrap">
            <div class="banner">
              <img src="./images/1.jpg" alt="">
            </div>

            <section class="bellow">
              <ul class="list">
                <li class="item">
                    <a href="javascript:;">
                  <img src="./images/0.png" alt="">
                  <span>清凉</span>
                </a>
                </li>
                <li class="item">
                  <a href="javascript:;">
                    <img src="./images/0.png" alt="">
                    <span>清凉</span>
                  </a>
                </li>
                <li class="item">
                  <a href="javascript:;">
                    <img src="./images/0.png" alt="">
                    <span>清凉</span>
                  </a>
                </li>
                <li class="item">
                  <a href="javascript:;">
                    <img src="./images/0.png" alt="">
                    <span>清凉</span>
                  </a>
                </li>
                <li class="item">
                  <a href="javascript:;">
                    <img src="./images/0.png" alt="">
                    <span>清凉</span>
                  </a>
                </li>
                <li class="item">
                  <a href="javascript:;">
                    <img src="./images/0.png" alt="">
                    <span>清凉</span>
                  </a>
                </li>
                <li class="item">
                  <a href="javascript:;">
                    <img src="./images/0.png" alt="">
                    <span>清凉</span>
                  </a>
                </li>
                <li class="item">
                  <a href="javascript:;">
                    <img src="./images/0.png" alt="">
                    <span>清凉</span>
                  </a>
                </li>
                <li class="item">
                  <a href="javascript:;">
                    <img src="./images/0.png" alt="">
                    <span>清凉</span>
                  </a>
                </li>
                <li class="item">
                  <a href="javascript:;">
                    <img src="./images/0.png" alt="">
                    <span>清凉</span>
                  </a>
                </li>
                <li class="item">
                  <a href="javascript:;">
                    <img src="./images/0.png" alt="">
                    <span>清凉</span>
                  </a>
                </li>
                <li class="item">
                  <a href="javascript:;">
                    <img src="./images/0.png" alt="">
                    <span>清凉</span>
                  </a>
                </li>


              </ul>
            </section>
          </div>
        </div>
      </section>
    </div>
</template>
<script>

  export default {
    data () {
      return {}
    },
    mounted(){
      this.$store.dispatch('getNavData')

    }


  }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .list
    overflow hidden
    .search
      background pink
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 40px
      .inner
        padding 10px
        height 20px
        display flex
        .ipt
          width: 100%
          text-align center
          .icon
            width: 4px
            height: 4px
            background  red
          input
            text-align center
            font-size 20px
            font-size black
    .main
      border-top 2px solid  #CCC
      height 700px
      background green
      margin-top 40px
      .leftMenu
        float left
        top 53px
        left 0
        bottom 0
        width 78px
        height 500px
        border-right 2px solid #CCC
        .inner
          width: 100%;
          a
            font-color black
          .item
            width: 100%;
            height:  64px
            line-height: 64px
            text-align: center;
      .rightMenu
        float left
        height 500px
        width: 280px
        overflow hidden
        .wrap
          padding 10px
          height: 800px
          .banner
            img
              width: 100%
              height: 100%

          .bellow
            width: 300px
            height: 300px
            .list
              clearFix()
              .item
                float left
                margin-right: 3px
                width: 91px
                a
                  span
                    display: block;
                    height: 8px
                    line-height:8px;
                    text-align: center;
                    font-size:12px
                img
                  width: 100%
                  height: 100%




</style>
