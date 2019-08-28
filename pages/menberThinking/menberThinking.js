// pages/menberThinking/menberThinking.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    commentList: 
    [{
      name: '1111',
      comment: '1111大帅b',
      isLike: false,
      imgUrl: '../image/personal1.png',
      dataid: 0
    },{
      name: '111',
      comment: '11大帅b',
      isLike: false,
      imgUrl: '../image/personal1.png',
      dataid: 1
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'openid',
      fail: () => { wx.redirectTo({ url: '../index/index', }) },
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

  },
  giveAgree: function(e) {
    let commentId = e.currentTarget.dataset.id
    let commentList = this.data.commentList
    commentList[commentId].isLike = true
    this.setData({
      'commentList': commentList
    })
  }
})