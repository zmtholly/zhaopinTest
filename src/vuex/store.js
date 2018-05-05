import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  token: null, // token
  empId: null, // 用户id
  spinner: null, // 当前spinner
  typeCateList: [], // 类型分类列表
  curTypeCategory: null, // 当前消息类型分类
  curType: null, // 当前消息类型
  typeCategoryUnreadCount: [], // 类型分类未读数
  messageTypeUnreadCount: [], // 消息类型未读数
  messageType: {}, // 修改的消息类型
  getNewMessage: false,
  addSub: '',
  removeSub: null,
  empSub: [],
  typeIds: [],
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
