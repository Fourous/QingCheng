// pages/withUs/withUs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    applyState: true,
    grouppg:"https://qczby.oss-cn-shenzhen.aliyuncs.com/others/index.png"
  },
  Toapply: function() {
    this.setData({
      applyState: false,
      bindChecked:[]
    })
  },
  checkSex: function(e) {
    this.setData({
      bindChecked: e.detail.value
    })
  },
  apply: function() {
    let check = this.data.bindChecked
  },
  changeInput: function(e) {
    let form = e.detail.value
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  formcommit:function(){
    wx.showToast({
      title: '提交成功',
    })
    var pages = getCurrentPages();
    var tempPage = pages[pages.length - 2];
    wx.navigateBack({

    })
  }
})