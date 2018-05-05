<template>
  <div id="inform">
    MoreMsg
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
  #inform
    padding 20px 36px 101px 30px
    .title
      min-width 960px
      font-size 20px
      font-weight bold
      .read-btn
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
    .container
      min-width 960px
      margin-top 14px
      .subtitle
        padding-left 10px
        border-left 3px solid #54a5ff
        color #54a5ff
        margin-bottom 18px
      .content
        font-size 12px
        color #666
        line-height 1.83
        padding-bottom 25px
     .zen-col
        margin-bottom 10px
    .el-pagination
      margin-top 30px
      float right
    .number, .btn-prev, .btn-next
      background #dee3e6 !important
    .active
      background #acb3ba !important
    .el-icon-more
      background #fff !important
</style>
