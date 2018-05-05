import * as types from './mutation_types'

export default {
  [types.SET_TOKEN] (state, token) {
    state.token = token
  },
  [types.SET_EMP_ID] (state, empId) {
    state.empId = empId
  },
  [types.SPINNEROPEN] (state, spinner) { // 开启spinner
    state.spinner = spinner
  },
  [types.SPINNERCLOSE] (state) { // 关闭spinner
    state.spinner && state.spinner.close()
    state.spinner = null
  },
  [types.SET_TYPE_CATE_LIST] (state, typeCateList) { // 设置类型分类列表
    state.typeCateList = typeCateList
  },
  [types.SET_CUR_TYPE_CATEGORY] (state, curTypeCategory) { // 切换当前消息类型分类
    state.curTypeCategory = curTypeCategory
  },
  [types.SET_CUR_TYPE] (state, curType) { // 切换当前消息类型
    state.curType = curType
  },
  [types.READ] (state, id) { // 已读
    let type = state.curTypeCategory.list.find(t => {
      return t.typeId === id
    })
    type.total--
    let tc = state.typeCateList.find(tc => {
      return tc.tcId === type.categoryId
    })
    tc.total--
  },
  [types.ALL_READ] (state, msgs) { // 全部已读
    msgs.forEach(msg => {
      if (!msg.status) {
        let type = state.curTypeCategory.list.find(type => {
          return type.typeId === msg.typeId
        })
        type.total--
        let tc = state.typeCateList.find(tc => {
          return tc.tcId === type.categoryId
        })
        tc.total--
      }
    })
  },
  [types.SET_TYPE_CATEGORY_UNREAD_COUNT] (state, count) { // 设置类型分类未读数
    state.typeCategoryUnreadCount.unshift(count)
  },

  [types.SET_MESSAGE_TYPEUNREAD_COUNT] (state, count) { // 设置消息类型未读数
    state.messageTypeUnreadCount.unshift(count)
  },
  [types.CHANGE_TYPE_CATEGORY_UNREAD_COUNT] (state, typeCate) { // 修改类型分类未读数

    let instance = state.typeCategoryUnreadCount.find(tc => {
      return tc.tcId === typeCate.tcId
    })
    instance.total = typeCate.total
    // instance.total && (instance.total = typeCate.total)
  },
  [types.CHANGE_MESSAGE_TYPEUNREAD_COUNT] (state, msgType) { // 修改消息类型未读数
    let instance = state.messageTypeUnreadCount.find(mt => {
      return mt.typeId === msgType.typeId
    })
    instance.total = msgType.total
    // instance.total && (instance.total = msgType.total)
  },
  [types.EDIT_MESSAGE_TYPE] (state, msgType) {
    state.messageType = msgType
  },
  [types.CHANGE_GET_NEW_MESSAGE] (state) {
    state.getNewMessage = !state.getNewMessage
  },
  [types.SUB] (state, typeId) {
    state.addSub = typeId
  },
  [types.CANCEL] (state, typeId) {
    state.removeSub = typeId
  },
  [types.SET_EMP_SUB] (state, empSub) {
    state.empSub = empSub
  },
  [types.SET_TYPE_IDS] (state, typeIds) {
    state.typeIds = typeIds
  },
}
