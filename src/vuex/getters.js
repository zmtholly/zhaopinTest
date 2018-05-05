export default {
  token: state => state.token,
  empId: state => state.empId,
  spinner: state => state.spinner, // 当前spinner状态
  typeCateList: state => state.typeCateList, // 类型分类列表
  curTypeCategory: state => state.curTypeCategory, // 当前消息类型分类
  curType: state => state.curType, // 当前消息类型
  typeCategoryUnreadCount: state => state.typeCategoryUnreadCount, // 类型分类未读数
  messageTypeUnreadCount: state => state.messageTypeUnreadCount, // 消息类型未读数
  messageType: state => state.messageType, // 修改的消息类型
  getNewMessage: state => state.getNewMessage,
  addSub: state => state.addSub,
  removeSub: state => state.removeSub,
  empSub: state => state.empSub,
  typeIds: state => state.typeIds
}
