import * as types from './mutation_types'

export default {
  setToken ({
    commit
  }, token) {
    commit(types.SET_TOKEN, token)
  },
  setEmpId ({
    commit
  }, empId) {
    commit(types.SET_EMP_ID, empId)
  },
  spinnerOpen ({
    dispatch,
    commit,
    rootState
  }, text, target = false) { // 开启spinner
    const vm = rootState.instance || this._vm
    let spinner = null
    // setTimeout(() => {
    //   dispatch('spinnerClose')
    // }, vm.common.timeout)
    if (!rootState.spinner) {
      if (target) { // spinner在容器内
        vm.$nextTick(() => {
          spinner = vm.$loading({
            target: target
          })
          commit(types.SPINNEROPEN, spinner)
        })
      } else { // 全屏overlay
        spinner = vm.$loading({
          fullscreen: true,
          text: text
        })
        commit(types.SPINNEROPEN, spinner)
      }
    }
  },
  spinnerClose ({
    commit
  }) { // 关闭spinner
    commit(types.SPINNERCLOSE)
  },
  setTypeCateList ({ // 设置类型分类列表
    commit
  }, typeCateList) {
    commit(types.SET_TYPE_CATE_LIST, typeCateList)
  },
  setCurTypeCategory ({ // 切换当前消息类型分类
    commit
  }, curTypeCategory) {
    commit(types.SET_CUR_TYPE_CATEGORY, curTypeCategory)
  },
  setCurType ({ // 切换当前消息类型
    commit
  }, curType) {
    commit(types.SET_CUR_TYPE, curType)
  },
  read ({ // 已读
    commit
  }, id) {
    commit(types.READ, id)
  },
  allRead ({ // 全部已读
    commit
  }, id) {
    commit(types.ALL_READ, id)
  },
  setTypeCategoryUnreadCount ({ // 设置类型分类未读数
    commit
  }, count) {
    commit(types.SET_TYPE_CATEGORY_UNREAD_COUNT, count)
  },
  setMessageTypeUnreadCount ({ // 设置消息类型未读数
    commit
  }, count) {
    commit(types.SET_MESSAGE_TYPEUNREAD_COUNT, count)
  },
  changeTypeCategoryUnreadCount ({ // 类型分类未读数
    commit
  }, count) {
    commit(types.CHANGE_TYPE_CATEGORY_UNREAD_COUNT,count)
  },
  changeMessageTypeUnreadCount ({ // 修改消息类型未读数
    commit
  }, count) {
    commit(types.CHANGE_MESSAGE_TYPEUNREAD_COUNT,count)
  },
  editMessageType ({
    commit
  }, msgType) {
    commit(types.EDIT_MESSAGE_TYPE, msgType)
  },
  changeGetNewMessage ({
    commit
  }) {
    commit(types.CHANGE_GET_NEW_MESSAGE)
  },
  sub ({
    commit
  }, typeId) {
    commit(types.SUB, typeId)
  },
  cancel ({
    commit
  }, typeId) {
    commit(types.CANCEL, typeId)
  },
  setEmpSub ({
    commit
  }, empSub) {
    commit(types.SET_EMP_SUB, empSub)
  },
  setTypeIds ({
    commit
  }, typeIds) {
    commit(types.SET_TYPE_IDS, typeIds)
  }
}
