<template>
  <footer class="footer_guide border-1px">
    <span class="guide_item" @click="goTo('/home')" :class="{on: $route.path==='/home'}">
      <span class="item_icon">
        <i class="iconfont icon-home"></i>
      </span>
      <span>首页</span>
    </span>
    <a href="javascript:;" class="guide_item" @click="goTo('/list')" :class="{on: $route.path==='/list'}">
      <span class="item_icon">
        <i class="iconfont icon-friend"></i>
      </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goTo('/topic')" :class="{on: $route.path==='/topic'}">
      <span class="item_icon">
        <i class="iconfont icon-shiwu"></i>
      </span>
      <span>识物</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goTo('/shopCart')" :class="{on: $route.path==='/shopCart'}">
      <span class="item_icon">
        <i class="iconfont icon-shoppingcart"></i>
      </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goTo('/person')" :class="{on: $route.path==='/person'}">
      <span class="item_icon">
        <i class="iconfont icon-mine"></i>
      </span>
      <span>个人</span>
    </a>
  </footer>
</template>
<script>
  export default {
    methods: {
      goTo (path) {
        // 通过路由导航跳转路由
        this.$router.replace(path)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color red
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>
