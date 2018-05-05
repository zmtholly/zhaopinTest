<template>
  <div id="inform">
    Message
  </div>
</template>

<script>
//import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      
    }
  },
  computed: {
    
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
        .more
          color #54a5ff
          float right
          font-size 12px
          line-height 17px
          text-decoration underline
      .content
        font-size 12px
        color #666
        line-height 1.83
        padding-bottom 25px
     .zen-col
        margin-bottom 10px
</style>
