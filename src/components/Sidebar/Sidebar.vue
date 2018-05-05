<template>
  <div id="sidebar">
    sidebar
  </div>
</template>

<script>
  //import { mapGetters, mapActions } from 'vuex'
  export default {
    data () {
      return {
        
      }
    },
  }
</script>

<style lang="stylus">
  #sidebar
    width 200px
    background #f6f6f8
    position absolute
    height 100%
    padding-top 20px
    box-sizing border-box
    .title
      line-height 30px
      font-size 12px
      color #323c47
      padding-left 45px
      background url("./inform.png") no-repeat 12px center
    .inform-list
      line-height 28px
      &>li
        padding 12px 0
        line-height 12px
      .unread
        position relative
        top -3px
        color #ffffff
        font-size 12px
        display inline-block
        text-align center
        background #3693ff
        width 28.8px
        height 16.8px
        line-height 16.8px
        border-radius 24px
        transform scale(0.8333)
        margin 0 auto
      .list-title
        padding-left 54px
        font-size 12px
        color #666
        .name
          display inline-block
          width 85px
          white-space nowrap
          overflow hidden
          text-overflow ellipsis
        &:after
          transition 0.5s all
          content ''
          margin-right 12px
          margin-top 1px
          float right
          height 14px
          width 14px
          display block
          background url('./icon-sidebar-arrow.png')
      .sub-list
        color #666
        font-size 12px
        padding-left 64px
        &>li
          padding 12px 0
          line-height 12px
        .name
          cursor pointer
          display inline-block
          max-width 100px
          white-space nowrap
          overflow hidden
          text-overflow ellipsis
    .list-active
      background #fff
      .list-title
        color #3693ff
        &:after
          transform rotate(-180deg)
      .gray
        color #666
    .router-link-exact-active
      color #3693ff
</style>
