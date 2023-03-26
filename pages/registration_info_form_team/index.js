// pages/registration_info_form/index.js
const util = require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['男', '女'],
    index: 0,
    date: '2016-09-01',
    cardIndex: 0,
    card: ['身份证'],
    personNum: 1,
    formDatamodel: {
      usrename: 'usrename',
      sex: 'sex',
      date: 'date',
      phone: 'phone',
      cardType: 'cardType',
      cardCode: 'cardCode',
    },
    formData: [
      {
        id:util.wxuuid(),
        usrename: 'usrename1',
        sex: 'sex1',
        sexIndex: 0, 
        date: 'date1',
        dateInfo: '2016-09-01',
        phone: 'phone1',
        cardType: 'cardType1',
        cardCode: 'cardCode1',
      },
      // {
      //   usrename: 'usrename2',
      //   sex: 'sex2',
      //   sexIndex: 0, 
      //   date: 'date2',
      //   dateInfo: '2017-09-01',
      //   phone: 'phone2',
      //   cardType: 'cardType2',
      //   cardCode: 'cardCode2',
      // },
    ]
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
  bindPickerChange: function (e) {
    console.log(e)
    console.log('picker发送选择改变，携带值为', e.detail.value)
    const obj = `formData[${e.currentTarget.dataset.id}].sexIndex`
    this.setData({ 
      [obj]: e.detail.value
    }) 
  },
  bindDateChange: function (e) {
    const obj = `formData[${e.currentTarget.dataset.id}].dateInfo`
    this.setData({
      [obj]: e.detail.value
    })
  },
  toSubmit(e) {
    console.log(e)
  },
  addVisitor(){
    console.log(Object.keys(this.data.formDatamodel))
    console.log(Object.keys(this.data.formDatamodel))
    if(this.data.personNum === 5){
      return
    }
    this.setData({
      personNum: this.data.personNum + 1
    })
    let formItem = {}
    Object.keys(this.data.formDatamodel).forEach(item => {
      formItem[item] = `${this.data.formDatamodel[item]}${this.data.personNum}`
    })
    formItem.sexIndex = 0 
    formItem.dateInfo = '2016-09-01'
    formItem.id = util.wxuuid()
    // const formItem = 
    // this.data.formDatamodel
    const obj = `formData[${this.data.personNum-1}]`
    this.setData({
      [obj]: formItem
    })
  },
  deleteFormItem(e){
    this.setData({
      personNum: this.data.personNum - 1
    })
    console.log(e.currentTarget.dataset.id)
    const formData1 = this.data.formData
    formData1.splice(e.currentTarget.dataset.id,1)
    console.log(formData1)
    this.setData({
      formData: formData1
    })
  }
})