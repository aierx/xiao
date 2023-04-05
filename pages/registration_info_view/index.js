// pages/registration_info_view/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topCardData: {
      personal: {
        name: '个人报名',
        time: '2023年03月26日 17：00 截止',
        cost: '150.00/人',
        way: '需抽签'
      }
    },
    array: ['男', '女'],
    card: ['身份证'],
    formDataView: [],
    cost: 150,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options)
    let formDataView = []
    // 获取表单数据
    if (options?.formData) {
      const formData = JSON.parse(options.formData)
      console.log(formData)
      // const total = 1
      // formDataView = this.formatFormData(formData)
      formDataView = formData
      console.log(formDataView)
    }
    this.setData({
      cost: formDataView.length * 150
    })
    this.setData({
      formDataView: formDataView
    })

  },

  formatFormData(formData) {
    const indexList = ['1', '2', '3', '4', '5']
    let formDataView = []
    indexList.forEach(num => {
      let oneInfo = {}
      let notLast = true
      Object.keys(formData).forEach(item => {
        if (item.indexOf(num) !== -1) {
          notLast = false
          const tempItem = item
          let reg = /[0-9]+/g;
          let repItem = tempItem.replace(reg, "");
          oneInfo[repItem] = formData[item]
        }
      })
      if (!notLast) {
        formDataView.push(oneInfo)
      }
    })
    return formDataView
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  toBack() {
    wx.navigateBack({
      delta: 1
    })
  },
  toEnroll(e) {
    const cost = e.currentTarget.dataset.cost
    console.log(e.currentTarget.dataset.cost)
    wx.navigateTo({
      url: `/pages/pay/index?cost=${cost}`,
    })
  }
})