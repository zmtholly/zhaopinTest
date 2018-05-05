<template>
  <div id="home">
    <!-- <button @click="oneNewMessage">有消息过来了</button> -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
//import { mapGetters, mapActions } from 'vuex'
// require('stomp')
// import Stomp from './stomp'
// import SockJS from 'sockjs-client'
  export default {
    data () {
      return {
        
      }
    },
  }
</script>

<style lang="stylus">
  #home
    width 1080px
    margin-left 200px
</style>

