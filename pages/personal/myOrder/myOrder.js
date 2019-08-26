// pages/personal/myOrder/myOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openid:"",
    teacherid: '',
    myOrder: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    wx.getStorage({
      key: 'openid',
      success: function (res) {
        console.log(res.data)
        that.setData({
          openid: res.data,
        })
      },
    });
    wx.getStorage({
      key: 'teacherid',
      success: (res) => {
        this.setData({
          'teacherid': res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that=this
    console.log(that.data.openid)
    if (that.data.openid == "") {
      wx.showToast({
        title: '请求服务器失败重新进入',
      })
    }
    wx.request({
      url: 'https://www.qczyclub.com/userappointmap',
      data: {
        'openid': that.data.openid
      },
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      success: (res) => {
       console.log(res.data)
        that.setData({
          myOrder: res.data
        })
      },
      fail: function () {
        console.log('获取预约失败');
      }
    })  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log()
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