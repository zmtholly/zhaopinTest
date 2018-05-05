<template>
  <div id="set-subscribe">
    SetSubscribe
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
  #set-subscribe
    padding 20px 90px 116px 29px
    .container
      overflow hidden
      min-width 960px
      margin-bottom 30px
      .content
        display flex
        flex-wrap wrap
        justify-content space-around
      .subscribe, .empty
        width 22.9%
        margin-bottom 21px
        border: solid 1px #f0f0f0
        border-radius 4px
      .subscribe
        height 130px
        padding 10px
        box-sizing border-box
        .desc
          overflow hidden
          text-overflow ellipsis
          display -webkit-box
          -webkit-line-clamp 2
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
      position relative
      padding-right 50px
      font-size 18px
      font-weight bold
      color #666
      margin-bottom 9px
      .cancel-btn
        cursor pointer
        background #999
        font-size 12px
        color #fff
        position absolute
        border 1px solid #999999
        box-sizing border-box
        top 0
        right 0
        line-height 20px
        width 46px
        text-align center
        border-radius 4px
      .subscribe-btn
        cursor pointer
        font-size 12px
        color #3693ff
        position absolute
        top 0
        right 0
        line-height 18px
        width 46px
        text-align center
        box-sizing border-box
        border-radius 4px
        border: solid 1px #3693ff
    .font-size-small
      font-size 14px !important
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
