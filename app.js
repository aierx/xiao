// app.js
App({
  data:{
    scrollViewHeight: 600,
    scrollViewWidth:400,
  },
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  },
  getHeightAndWidthRPX(){
    let data = null
    wx.getSystemInfo({
      success: function (res) {
        const screenHeight = res.windowHeight
        const screenWidth = res.windowWidth
        const oneWidthRPX = screenWidth / 750
        const heightRPX = screenHeight / oneWidthRPX
        data = {
          scrollViewWidth: 750,
          scrollViewHeight: heightRPX
        }
      }
    })
    return data
  },
  http: function (url, data='', method="GET") { //封装http请求
    const apiUrl = 'http://192.168.3.10:10086/' //请求域名
    // console.log(this.globalData)
    // const currency = {
    //   openid: this.globalData.openid
    // }
    return new Promise((resolve, reject) => {
      wx.request({
        url: apiUrl + url,
        // data: Object.assign(currency,data),
        data: data,
        method: method,
        success: function (res) {
          if(res.data.code != 200){
            wx.showModal({
              title: '提示',
              content: res.data.message,
              success: function (res) {
                if (res.confirm) {
                  console.log('用户点击确定')
                } else if (res.cancel) {
                  console.log('用户点击取消')
                }
              }
            })
          }
          resolve(res.data)
        },
        fail: function (res) {
          reject(res);
        },
        complete: function () {
          console.log('complete');
        }
      })
    })
  },
})
