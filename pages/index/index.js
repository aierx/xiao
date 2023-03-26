// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false
    swiperList: [],
    apiInfo:[],
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  }, 
  getApiInfo(){
    app.http('player/list', {}, 'get')
    .then(res => {
      console.log(res)
      this.setData({
        apiInfo: res
      })
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
    // this.getApiInfo()
    this.getSwiperList();
    console.log(app.getHeightAndWidthRPX())
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
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
