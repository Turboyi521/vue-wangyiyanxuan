<template>
  <footer class="footer">
    <a href="javascript:;" class="footer_guide" active>
                <span class="footer_item" on>
                       <i class="iconfont icon-home"></i>
                </span>
      <span class="footer_text">首页</span>
    </a>
    <a href="javascript:;" class="footer_guide">
                <span class="footer_item">
                       <i class="iconfont icon-navicon-kcfl"></i>
                </span>
      <span class="footer_text">分类</span>
    </a>
    <a href="javascript:;" class="footer_guide">
                <span class="footer_item">
                       <i class="iconfont icon-shiwu "></i>
                </span>
      <span class="footer_text">识物</span>
    </a>
    <a href="javascript:;" class="footer_guide">
                <span class="footer_item">
                       <i class="iconfont icon-shoppingcart "></i>
                </span>
      <span class="footer_text">购物车</span>
    </a>
    <a href="javascript:;" class="footer_guide">
                <span class="footer_item">
                       <i class="iconfont icon-mine"></i>
                </span>
      <span class="footer_text">个人</span>
    </a>
  </footer>
</template>
<script>
  export default {
    data () {
      return {}
    }

  }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  /*@import stylus '../../common/stylus/mixins.styl'*/
  .footer
    display flex
    text-decoration none
    position fixed
    background #fff
    left 0
    bottom 0
    width 100%
    height 50px
    .footer_guide
      flex 1
      display flex
      justify-content center
      align-items center
      flex-direction column
      .iconfont
        font-size 22px
        &.on
          color red
      .footer_text
        margin 3px 0
        font-size 12px
        font-color black

</style>
