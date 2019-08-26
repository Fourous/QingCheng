// pages/personal/orderForm/orderForm.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openid: '',
    orderList: [{},{}]
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
    wx.getStorage({
      key: 'openid',
      success: (res)=>{
        openid = res.data
        wx.request({
          url: 'https://www.qczyclub.com/',
          data: {
            'openid': openid
          },
          method: 'POST',
          header: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          },
          success: (res) => {
            this.setData({
              myOrder: res.data
            })
          },
          fail: function () {
            console.log('获取预约失败');
          }
        })  
      },
    })
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