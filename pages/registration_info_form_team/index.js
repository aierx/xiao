// pages/registration_info_form/index.js
const util = require('../../utils/util')
import WxValidate from '../../utils/WxValidate'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['男', '女'],
    card: ['身份证'],
    index: 0,
    date: '2000-01-01',
    cardIndex: 0,
    personNum: 1,
    formDatamodel: {
      username: 'username',
      sex: 'sex',
      date: 'date',
      phone: 'phone',
      cardType: 'cardType',
      cardCode: 'cardCode',
    },
    formData: [
      {
        // id: util.wxuuid(),
        username: 'liutf',
        sex: 0,
        date: '2000-01-01',
        phone: '18692206925',
        cardType: 0,
        cardCode: '430181199810110634',
      },
    ],
    form: {
      username: '',
      phone: '',
      cardCode: '',
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
    console.log(util.wxuuid())
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
  toSubmit(e) {
    const formData = this.data.formData
    let error = ''
    formData.forEach(data => {
      if(!this.WxValidate.checkForm(data)){
        error = this.WxValidate.errorList[0];
        return
      }
    })
    if(error){
      wx.showToast({
        title: error.msg,
        icon: 'none',
        duration: 1000
      })
      return false;
    }else {
      // 执行request请求
      wx.navigateTo({
        url: `/pages/registration_info_view/index?formData=${JSON.stringify(formData)}`,
      })
    }
  },
  addVisitor() {
    if (this.data.personNum === 5) {
      wx.showModal({
        content: '最多添加五位成员！',
        showCancel: false
      })
      return
    }
    this.setData({
      personNum: this.data.personNum + 1
    })
    let formItem = {
      // id: util.wxuuid(),
      username: 'liutf',
      sex: 0,
      date: '2000-01-01',
      phone: '18692206925',
      cardType: 0,
      cardCode: '430181199810110634',
    }
    formItem.id = util.wxuuid()
    const obj = `formData[${this.data.personNum - 1}]`
    this.setData({
      [obj]: formItem
    })
  },
  deleteFormItem(e) {
    this.setData({
      personNum: this.data.personNum - 1
    })
    const formData1 = this.data.formData
    console.log(formData1)
    if (formData1.length > 0) {
      formData1.forEach((data, index) => {
        if (data.id === e.currentTarget.dataset.id) {
          formData1.splice(index, 1)
        }
      })
    }
    console.log(formData1)
    this.setData({
      formData: formData1
    })
  },
  initValidate() {
    const rules = {
      username: {
        required: true
      },
      phone: {
        required: true,
        tel: true
      },
      cardCode: {
        required: true,
        idcard: true
      },
    }
    const message = {
      username: {
        required: '真实姓名不能为空'
      },
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
  handleBlur(e) {
    console.log(e) // e.currentTarget.dataset.index
    const obj = `formData[${e.currentTarget.dataset.index}].${e.currentTarget.dataset.name}`
    console.log(this.data.formData)
    this.setData({
      [obj]: e.detail.value
    })
  }
})