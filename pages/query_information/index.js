// pages/query_information/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [],
    hiddenmodalput:true,
    hiddenmodalputMatch:true,
    currentType: '',
  },

  modalinput:function(e){
    console.log(e.currentTarget.dataset.type)
    this.setData({
      currentType: e.currentTarget.dataset.type
    })
    //registrationInfo  match
    if(e.currentTarget.dataset.type==='registrationInfo'){
      this.setData({
        hiddenmodalput: !this.data.hiddenmodalput
      })
    }else if(e.currentTarget.dataset.type==='match'){
      this.setData({
        hiddenmodalputMatch: !this.data.hiddenmodalputMatch
      })
    }
    
  },
  cancel: function(e){
    if(e.currentTarget.dataset.type==='registrationInfo'){
      this.setData({
        hiddenmodalput: !this.data.hiddenmodalput
      })
    }else if(e.currentTarget.dataset.type==='match'){
      this.setData({
        hiddenmodalputMatch: !this.data.hiddenmodalputMatch
      })
    }
   },
   confirm: function(e){
    if(e.currentTarget.dataset.type==='registrationInfo'){
      this.setData({
        hiddenmodalput: !this.data.hiddenmodalput
      })
    }else if(e.currentTarget.dataset.type==='match'){
      this.setData({
        hiddenmodalputMatch: !this.data.hiddenmodalputMatch
      })
    }

   },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getSwiperList();
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
  downLoadImg() {
    // if(!this.data.imgUrl){
    //   console.log('图片获取失败，请稍后再试')
    //   return;
    // }
    wx.showLoading({
      title: '加载中...',
    })
    //图片保存到本地
    wx.downloadFile({
      // url: this.data.imgUrl,//图片地址
      url: 'http://192.168.3.10:80/images/123.jpg',//图片地址
      success (downres) {
        // 保存图片到相册
        wx.saveImageToPhotosAlbum({
          filePath: downres.tempFilePath,
          success(res) {
            wx.hideLoading()
            console.log('保存成功')
          },
          fail(err){
            wx.hideLoading()
            if (err.errMsg === "saveImageToPhotosAlbum:fail:auth denied" || err.errMsg === "saveImageToPhotosAlbum:fail auth deny" || err.errMsg === "saveImageToPhotosAlbum:fail authorize no response") {
              // 这边微信做过调整，必须要在按钮中触发，因此需要在弹框回调中进行调用
              wx.showModal({
                title: '提示',
                content: '请授权保存到相册',
                showCancel: false,
                success() {
                  wx.openSetting({
                    success(openres) {
                      console.log("openres", openres)
                      if (openres.authSetting['scope.writePhotosAlbum']) {
                        console.log('获取权限成功，再次点击图片即可保存')
                      } else {
                        console.log('获取权限失败，无法保存到相册哦~')
                      }
                    },
                    fail(failerr) {
                      console.log("failerr", failerr)
                    }
                  })
                }
              })
            }
          }
        })
      },
      fail() {
        wx.hideLoading()
        console.log('下载失败，请稍后再试')
      }
    })
  },
})