// pages/directive_rules/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollViewHeight: 600,
    scrollViewWidth: 400,
    navList: ['线路1', '线路2'],
    nav_type: 0,
    data: [
      {
        url:'/images/fuyangluxian.png',
        content: `线路1城市定向赛报名须知

        日期：2022年11月14日 时间：上午8点 地点：纽约市中央公园
        
        欢迎参加城市定向赛！这是一个探索城市、挑战自我定向能力的活动。以下是关于比赛如何进行以及如何报名的一些重要信息。
        
        比赛细节： 城市定向赛是一项10公里赛事，将在中央公园举行。比赛对所有水平的跑步者开放，没有先前的定向经验要求。比赛将于上午8点开始，参赛者将有2个小时的时间完成比赛路线。
        
        报名： 要报名参加城市定向赛，请访问我们的网站www.cityorientingrace.com。报名费为每人25美元，包括比赛T恤和完赛奖章。报名截止日期为2022年11月7日，因此请提前注册以确保您的名额。
        
        领取比赛包： 比赛包可以于2022年11月12日至13日在中央公园领取。更多具体细节，可以在比赛日期临近时通过我们的网站获得。
        
        比赛日： 比赛当天，请携带有效的照片ID和注册确认邮件的复印件。请根据当天的天气情况进行适当的着装，穿舒适的跑步鞋。 比赛路线沿途设有饮水站。
        
        比赛结束后，还请留步参加我们的后续庆祝活动，届时会为参赛者提供食物、饮料以及音乐服务。
        非常感谢您的提醒，以下是一份城市定向赛报名须知的样例：
        
        城市定向赛报名须知
        
        日期：2022年11月14日 时间：上午8点 地点：纽约市中央公园
        
        欢迎参加城市定向赛！这是一个探索城市、挑战自我定向能力的活动。以下是关于比赛如何进行以及如何报名的一些重要信息。
        
        比赛细节： 城市定向赛是一项10公里赛事，将在中央公园举行。比赛对所有水平的跑步者开放，没有先前的定向经验要求。比赛将于上午8点开始，参赛者将有2个小时的时间完成比赛路线。
        
        报名： 要报名参加城市定向赛，请访问我们的网站www.cityorientingrace.com。报名费为每人25美元，包括比赛T恤和完赛奖章。报名截止日期为2022年11月7日，因此请提前注册以确保您的名额。
        
        领取比赛包： 比赛包可以于2022年11月12日至13日在中央公园领取。更多具体细节，可以在比赛日期临近时通过我们的网站获得。
        
        比赛日： 比赛当天，请携带有效的照片ID和注册确认邮件的复印件。请根据当天的天气情况进行适当的着装，穿舒适的跑步鞋。 比赛路线沿途设有饮水站。
        
        比赛结束后，还请留步参加我们的后续庆祝活动，届时会为参赛者提供食物、饮料以及音乐服务。`
      },
      {
        url:'/images/fuyangluxian2.png',
        content: `线路2城市定向赛报名须知

        日期：2022年11月14日 时间：上午8点 地点：纽约市中央公园
        
        欢迎参加城市定向赛！这是一个探索城市、挑战自我定向能力的活动。以下是关于比赛如何进行以及如何报名的一些重要信息。
        
        比赛细节： 城市定向赛是一项10公里赛事，将在中央公园举行。比赛对所有水平的跑步者开放，没有先前的定向经验要求。比赛将于上午8点开始，参赛者将有2个小时的时间完成比赛路线。
        
        报名： 要报名参加城市定向赛，请访问我们的网站www.cityorientingrace.com。报名费为每人25美元，包括比赛T恤和完赛奖章。报名截止日期为2022年11月7日，因此请提前注册以确保您的名额。
        
        领取比赛包： 比赛包可以于2022年11月12日至13日在中央公园领取。更多具体细节，可以在比赛日期临近时通过我们的网站获得。
        
        比赛日： 比赛当天，请携带有效的照片ID和注册确认邮件的复印件。请根据当天的天气情况进行适当的着装，穿舒适的跑步鞋。 比赛路线沿途设有饮水站。
        
        比赛结束后，还请留步参加我们的后续庆祝活动，届时会为参赛者提供食物、饮料以及音乐服务。
        非常感谢您的提醒，以下是一份城市定向赛报名须知的样例：
        
        城市定向赛报名须知
        
        日期：2022年11月14日 时间：上午8点 地点：纽约市中央公园
        
        欢迎参加城市定向赛！这是一个探索城市、挑战自我定向能力的活动。以下是关于比赛如何进行以及如何报名的一些重要信息。
        
        比赛细节： 城市定向赛是一项10公里赛事，将在中央公园举行。比赛对所有水平的跑步者开放，没有先前的定向经验要求。比赛将于上午8点开始，参赛者将有2个小时的时间完成比赛路线。
        
        报名： 要报名参加城市定向赛，请访问我们的网站www.cityorientingrace.com。报名费为每人25美元，包括比赛T恤和完赛奖章。报名截止日期为2022年11月7日，因此请提前注册以确保您的名额。
        
        领取比赛包： 比赛包可以于2022年11月12日至13日在中央公园领取。更多具体细节，可以在比赛日期临近时通过我们的网站获得。
        
        比赛日： 比赛当天，请携带有效的照片ID和注册确认邮件的复印件。请根据当天的天气情况进行适当的着装，穿舒适的跑步鞋。 比赛路线沿途设有饮水站。
        
        比赛结束后，还请留步参加我们的后续庆祝活动，届时会为参赛者提供食物、饮料以及音乐服务。`
      }
    ]
  },
  changeType: function (e) {
    let {
      index
    } = e.currentTarget.dataset;
    if (this.data.nav_type=== index || index === undefined) {
      return false;
    } else {
      this.setData({
        nav_type: index
      })
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
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
  getHeightAndWidthRPX(){
    const data = app.getHeightAndWidthRPX()
    this.setData({
      scrollViewHeight: data.scrollViewHeight,
    })
    this.setData({
      scrollViewWidth: data.scrollViewWidth,
    })
  },
})