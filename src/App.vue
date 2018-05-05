<template>
  <div id="app">
    <message-template-manage-sidebar v-if="manage"></message-template-manage-sidebar>
    <sidebar v-else></sidebar>
    <home></home>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar/Sidebar'
import MessageTemplateManageSidebar from '@/components/MessageTemplateManage/Sidebar'
import Home from '@/components/Home/Home'
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      manage: false
    }
  },
  components:{
    Home,
    Sidebar,
    MessageTemplateManageSidebar
  },
  create() {
    // const empId = +this.common.getCookie('ZPSSO_USER_EMPID')
    // this.setEmpId(empId)
    // this.$route.path === '/messageTemplateManage' || this.$route.path === '/addMessageTemplate' || this.$route.path === '/categoryTypeManage' ||
    if (this.$route.path ==='/messageManage') {
      this.manage = true
    } else {
      this.manage = false
      this.$router.push('/message')
    }
  },
  methods: {
    ...mapActions(['setEmpId'])
  }
}
</script>

<style lang="stylus">
  *
    margin 0
    padding 0
    font-family "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif
  ul, li
    list-style none
  a
    text-decoration none
    color #666
  body,html
    height 100%
  #app
    min-height 100%
    position relative
</style>
