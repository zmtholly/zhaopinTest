<template>
  <div id="add-subscribe">
    addSubscribe
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
  #add-subscribe
    padding 20px 29px
    .font-size-small
      font-size 14px !important
    .recommend-line-container
      min-width 928px
      padding 0 16px
      .recommend-line
        bottom 0
        height 1px
        width 100%
        background #ddd
        margin-top -21px
        margin-bottom 30px
    .no-subscribe
      font-size 16px
      color #666
      height 391px
      padding-top 303px
      text-align center
      background url('./no-subscribe.png') no-repeat  center 74px
    .add-btn
      display inline-block
      font-size 14px
      color #ffffff
      line-height 20px
      padding 3px 17px
      background #4fa0ff
      border-radius 4px
      margin 40px auto 0
      cursor pointer
    .sub-container
      margin-bottom 0 !important
    .container
      overflow hidden
      min-width 960px
      margin-bottom 30px
      .content
        padding 0 16px
        display flex
        flex-wrap wrap
        justify-content space-between
      .subscribe, .empty
        width 22.9%
        margin-bottom 21px
        border: solid 1px #f0f0f0
        border-radius 4px
      .subscribe
        height 110px
        padding 10px
        padding-bottom 16px
        box-sizing border-box
        .desc
          overflow hidden
          text-overflow ellipsis
          display -webkit-box
          -webkit-line-clamp 3
          line-height 19px
          -webkit-box-orient vertical
        &:hover
          box-shadow 0 0 8px 0 rgba(126, 191, 255, 0.37)
          .subscribe-btn
            color #ffffff
            background #3693ff
          .cancel-btn
            background #fff
            color #999
      .empty
        border 0
        height 0
        margin-bottom 0
    .title
      padding-left 10px
      border-left 3px solid #54a5ff
      color #54a5ff
      margin-bottom 18px
    .el-pagination
      float right
    .number, .btn-prev, .btn-next
      background #dee3e6 !important
    .active
      background #acb3ba !important
    .el-icon-more
      background #fff !important
    .subscribe-title
      padding-right 50px
      position relative
      font-size 18px
      font-weight bold
      color #666
      margin-bottom 9px
      .cancel-btn
        position absolute
        top 0
        right 0
        cursor pointer
        background #999
        border 1px solid #999999
        box-sizing border-box
        font-size 12px
        color #fff
        width 46px
        line-height 20px
        text-align center
        border-radius 4px
      .subscribe-btn
        position absolute
        top 0
        right 0
        cursor pointer
        font-size 12px
        color #3693ff
        border-radius 4px
        width 46px
        line-height 18px
        text-align center
        box-sizing border-box
        border: solid 1px #3693ff
    .inofrm-org
      display inline-block
      font-size 12px
      line-height 17px
      padding 2px 11px
      color #999
      border 1px solid #999
      border-radius 38px
    .message
      margin-top 12px
      font-size 12px
      color #999
</style>
