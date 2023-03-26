// pages/registration _instructions/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [],
    scrollViewHeight: 600,
    scrollViewWidth: 400,
    registrationType:'team',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options)
    this.setData({
      registrationType : options.type
    })
    this.getSwiperList();
    this.getHeightAndWidthRPX();
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
  getSwiperList(){
    const demo = [
      {
        businessId: 0,
        dateAdd: "2020-02-05 18:29:30",
        id: 54095,
        linkType: 0,
        paixu: 0,
        picUrl: "/images/123.jpg",
        shopId: 0,
        status: 0,
        statusStr: "显示",
        title: "3",
        type: "new",
        userId: 21807,
      },
      {
        businessId: 0,
        dateAdd: "2020-02-05 18:29:30",
        id: 54094,
        linkType: 0,
        paixu: 0,
        picUrl: "/images/123.jpg",
        shopId: 0,
        status: 0,
        statusStr: "显示",
        title: "3",
        type: "new",
        userId: 21807,
      },
      {
        businessId: 0,
        dateAdd: "2020-02-05 18:29:30",
        id: 54092,
        linkType: 0,
        paixu: 0,
        picUrl: "/images/123.jpg",
        shopId: 0,
        status: 0,
        statusStr: "显示",
        title: "3",
        type: "new",
        userId: 21807,
      },
      {
        businessId: 0,
        dateAdd: "2020-02-05 18:29:30",
        id: 54091,
        linkType: 0,
        paixu: 0,
        picUrl: "/images/123.jpg",
        shopId: 0,
        status: 0,
        statusStr: "显示",
        title: "3",
        type: "new",
        userId: 21807,
      }
    ]
    this.setData({
      swiperList: demo,
    })
  },
  toForm(e){
    console.log(e)
    let url = {
      'team':'/pages/registration_info_form_team/index',
      'personal':'/pages/registration_info_form/index'
    }
    wx.navigateTo({
      url: `${url[e.currentTarget.dataset.type]}`,
    })
  },
  getHeightAndWidthRPX(){
    const data = app.getHeightAndWidthRPX()
    this.setData({
      scrollViewHeight: data.scrollViewHeight,
    })
    this.setData({
      scrollViewWidth: data.scrollViewWidth,
    })
  }
})