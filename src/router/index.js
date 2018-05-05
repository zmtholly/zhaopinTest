import Vue from 'vue'
import Router from 'vue-router'
import AddSubscribe from '@/components/Subscribe/AddSubscribe'
import SetSubscribe from '@/components/Subscribe/SetSubscribe'
import Message from '@/components/Message/Message'
import MoreMsg from '@/components/Message/MoreMsg'
import MessageManage from '@/components/MessageTemplateManage/MessageManage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/addSubscribe',
      component: AddSubscribe
    },
    {
      path: '/setSubscribe',
      component: SetSubscribe
    },
    {
      path: '/message',
      component: Message
    },
    {
      path: '/moreMsg',
      component: MoreMsg
    },
    {
      path: '/messageManage',
      component: MessageManage
    },
    {
      path: '*',
      redirect: '/message'
    }
  ],
  linkActiveClass:'actived'
})
