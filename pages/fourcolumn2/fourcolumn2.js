// pages/fourcolumn2/fourcolumn2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    png1:"https://qczby.oss-cn-shenzhen.aliyuncs.com/forintro/intro1.png",
    png2:"https://qczby.oss-cn-shenzhen.aliyuncs.com/forintro/intro2.png"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'openid',
      fail: () => { wx.redirectTo({ url: '../index/index', }) },
    })
    wx.showToast({
      title: '加载中.....',
      icon: 'loading',
      duration: 2000
    })
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

  }
})