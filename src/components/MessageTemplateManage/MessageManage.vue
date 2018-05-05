<template>
  <div id="message-manage">
    MessageManage
  </div>
</template>

<script>
//import AddTmp from './AddTmp'
//import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      
    }
  },
}
</script>

<style lang="stylus">
#message-manage
  padding 20px 63px 101px 30px
  .title
    padding-left 10px
    border-left 3px solid #54a5ff
    color #3693ff
    margin-bottom 20px
    .add-btn
      cursor pointer
      font-weight normal
      font-size 12px
      line-height 17px
      padding 2px 7px
      color #fff
      background #3693ff
      border 1px solid #3693ff
      border-radius 4px
      float right
      margin-left 20px
  .msg-tmp-manage
    margin-left 16px
    display flex
    justify-content space-between
    flex-wrap wrap
    .sub-title
      color #323c47
      position relative
      line-height 56px
      font-size 14px
      font-weight bold
      padding-left 14px
      border-top 1px solid #f0f0f0
      .add-type-category-btn
        cursor pointer
        height 18px
        width 18px
        background url('./add.png')
        position absolute
        top 22px
        right 30px
    .add-btn, .change-btn
      color #3693ff
      cursor pointer
      margin-right 5px
    .start-btn
      color #1caa3d
      cursor pointer
    .stop-btn
      color #ff5656
      cursor pointer
    .el-table th
      border-top 1px solid #f0f0f0
      background #f7f8fa !important
    .el-table th>.cell
      font-size 12px !important
      color #323c47 !important
      font-weight bold
    .el-table td>.cell
      font-size 12px !important
      color #666666 !important
      white-space: nowrap;
      text-overflow:ellipsis;
      overflow:hidden;
    .show-all-style
      width 100% !important
      height auto !important
      overflow-y auto !important
      max-height 587px !important
    .empty
      width 300px
    .type-category
      box-sizing border-box
      margin-bottom 30px
      overflow hidden
      transition .5s all linear
      width 300px
      height 140px
      border-radius 4px
      border 1px solid #f0f0f0
      position relative
      .category-title
        padding-left 14px
        padding-top 15px
        font-size 18px
        color #666666
        font-weight bold
      .category-detail
        margin-top 12px
        margin-bottom 18px
        padding-left 14px
        display flex
        flex-wrap wrap
        .detail
          padding-right 61px
          font-size 12px
          line-height 26px
          font-weight normal
          color #666
        .edit-input
          width 130px
          font-size 12px
          border 0
          border-bottom 1px solid #666
          outline none
          caret-color #3693ff
      .edit-btn
        cursor pointer
        width 16px
        height 16px
        top 24px
        right 51px
        position absolute
        background url('./edit.png')
      .unfold-btn
        cursor pointer
        position absolute
        right 20px
        top 24px
        width 18px
        height 14px
        background url('./arrow.png')
      .fold-btn
        cursor pointer
        position absolute
        right 20px
        top 24px
        width 18px
        height 14px
        background url('./arrow.png')
        transform rotate(180deg)
      .save-btn
        cursor pointer
        position absolute
        top 62px
        right 20px
        width 40px
        height 22px
        border-radius 2px
        background #3693ff
        font-size 12px
        line-height 22px
        font-weight normal
        color #fff
        border 0
  .add-tmp
    font-size 12px
    color #323c47
    padding-left 10px
    margin-bottom 20px
    input
      width 109px
      height 24px
      border-radius 2px
      border 1px solid #f0f0f0
      padding-left 9px
      outline none
      caret-color #3693ff
      margin-right 20px
      margin-left 4px
      &:hover
        border-color #c0c4cc
      &:nth-child(6)
        width 169px
        margin-right 114px
    .red
      color red
      vertical-align middle
    .add-btn
      width 38px
      height 20px
      background #3693ff
      border 1px solid #3693ff
      border-radius 4px
      font-size 12px
      color #ffffff
      line-height 20px
      display inline-block
      text-align center
      margin-right 20px
      cursor pointer
    .cancel-btn
      width 38px
      height 20px
      background #9b9b9b
      border 1px solid #9b9b9b
      border-radius 4px
      font-size 12px
      color #ffffff
      line-height 20px
      text-align center
      display inline-block
      cursor pointer
  .el-table__body tr:hover>td
    background-color #e5f1ff !important
</style>

