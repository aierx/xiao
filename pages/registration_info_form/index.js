// pages/registration_info_form/index.js
import WxValidate from '../../utils/WxValidate'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['男', '女'],
    card: ['身份证'],
    date: '2000-01-01',
    index: 0,
    cardIndex: 0,
    form: {
      username1: '123',
      phone1: '',
      cardCode1: '',
      sex: 0,
    },
    formData: {
      username: 'liutf',
      sex: 0,
      date: '2000-01-01',
      phone: '18692206925',
      cardType: 0,
      cardCode: '430181199810110634',
    }
  },

  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    console.log(e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  select: function (e) {
    console.log(123)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.initValidate()
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
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  toSubmit(e) {
    // console.log(this.data.form)
    // console.log(e.detail.value)
    const formData = this.data.formData
    console.log(formData)
    if (!this.WxValidate.checkForm(formData)) {
      const error = this.WxValidate.errorList[0];
      console.log(error)
      // wx.showModal({
      //   content: error.msg,
      //   showCancel: false
      // })
      wx.showToast({
        title: error.msg,
        icon: 'none',
        duration: 1000
      })
      return false;
    } else {
      // 执行request请求
      const reqFormData = []
      reqFormData.push(formData)
      wx.navigateTo({
        url: `/pages/registration_info_view/index?formData=${JSON.stringify(reqFormData)}`,
      })
    }
  },
  initValidate() {
    const rules = {
      username: {
        required: true
      },
      // sex1: {
      //   required: true
      // },
      // date1: {
      //   required: true
      // },
      phone: {
        required: true,
        tel: true
      },
      cardCode: {
        required: true,
        idcard: true
      }
    }
    const message = {
      username: {
        required: '真实姓名不能为空'
      },
      // sex1: {
      //   required: '性别不能为空'
      // },
      // date1: {
      //   required: '出生日期不能为空'
      // },
      phone: {
        required: '手机号码不能为空',
        tel: '请输入正确的手机号码'
      },
      cardCode: {
        required: '证件号码不能为空',
        idcard: '请输入正确的证件号码'
      }
    }
    this.WxValidate = new WxValidate(rules, message)
  },
  handleNameBlur(e){
    console.log(this.data.formData)
    console.log(e)
    const info = e.detail.value
    console.log(this.data.form[e.currentTarget.dataset.name])
    this.setData({
      [`formData.${e.currentTarget.dataset.name}`]: info
    })
  }
})