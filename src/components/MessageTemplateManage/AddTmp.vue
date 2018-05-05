<template>
  <div id="add-tmp">
    AddTmp
  </div>
</template>

<script>
//import { mapActions } from 'vuex'
export default {
  data () {
    return {
      
    }
  },
}
</script>

<style lang="stylus">
  #add-tmp
    position fixed
    height 100%
    width 100%
    top 0
    left 0
    z-index 1000
    background rgba(32, 32, 32, 0.6)
    .add-from
      position absolute
      width 572px
      height 600px
      background #ffffff
      border-radius 4px
      top 0
      left 0
      right 0
      bottom 0
      margin auto
      overflow auto
      .close-btn
        width 18px
        height 18px
        float right
        margin-top 23px
        margin-right 23px
        background url('./close.png')
        cursor pointer
      .title
        padding-left 10px
        border-left 3px solid #54a5ff
        color #3693ff
        margin 29px 0 20px 52px
        margin-bottom 20px
      .add-type-table
        margin-bottom 77px
        margin-left 59px
        td
          font-size 12px
          padding 0 19px 14px 19px
          vertical-align top
          line-height 26px
        tr:nth-child(-n+3) td:nth-child(1)
          position relative
        tr:nth-child(-n+3) td:nth-child(1):before
          display block
          content '*'
          height 100%
          color red
          left 9px
          line-height 29px
          position absolute
        textarea
          caret-color #3693ff
          outline none
          font-size 12px
          color #666666
          padding 5px
          border 1px solid #dcdfe6
          &:hover
            border-color #c0c4cc
        .el-input
          width 200px !important
      .btn-team
        text-align center
        .enter-btn
          cursor pointer
          display inline-block
          width 70px
          height 28px
          background #3693ff
          border-radius 4px
          line-height 28px
          margin-right 30px
          color #fff
          font-size 14px
          font-weight normal
        .cancel-btn
          cursor pointer
          display inline-block
          width 70px
          height 28px
          background #9b9b9b
          border-radius 4px
          line-height 28px
          color #fff
          font-size 14px
          font-weight normal
  .el-input__inner:focus
    caret-color #3693ff !important
    outline none !important
    border-color #dcdfe6 !important


</style>

