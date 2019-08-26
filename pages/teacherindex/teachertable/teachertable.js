// pages/orderteacher/orderteacher.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bgpic: null,
    tid: null,
    openid: '',
    classsigns: null,
    coachOrder: [],
    avatarUrl: '',
    userInfo: {},
    coachInfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
      tid: options.tid
    })
    console.log(options.tid)
    var that = this;
    wx.request({
      url: 'https://www.qczyclub.com/teachermap',
      method: 'POST',
      data: {
        "tid": options.tid,
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        console.log(res.data);
        that.setData({
          coachOrder: res.data
        })
      }
    })
    wx.request({
      url: 'https://www.qczyclub.com/getcoachname',
      method: 'POST',
      data: {
        "tid": options.tid,
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: (res)=>{
        console.log(res);
        this.setData({
          coachInfo: res.data
        })
      }
    })
    wx.getStorage({
      key: 'openid',
      success: function (res) {
        console.log(res)
        console.log(res.data)
        that.setData({
          openid: res.data
        })
        console.log(that.data.openid)
      }
    })
    wx.getStorage({
      key: 'userInfo',
      success: (res)=>{
        this.setData({
          avatarUrl: res.data.avatarUrl
        })
      },
    })
    console.log(that.data.tid);
    let url = "https://www.qczyclub.com//welcome/welcome.png"
    wx.downloadFile({
      url: url,
      success: (res) => {
        let temp = res.tempFilePath
        that.setData({
          bgpic: temp
        })
      }
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
  yuyue: function (e) {
    console.log(e)
    var that = this;
    var weekI = e.currentTarget.dataset.weeki;
    var classI = e.currentTarget.dataset.classi;
    var sta = that.data.classsigns[weekI].classsigns[classI].userstate ? 0 : 1;
    that.data.classsigns[weekI].classsigns[classI].userstate = sta;
    if (sta == 0) {
      that.data.classsigns[weekI].classsigns[classI].num++;
      console.log(that.data.classsigns[weekI].classsigns[classI].num);
      that.setData({
        classsigns: that.data.classsigns
      })
      wx.showToast({
        title: '取消预约',
      })
    } else {
      that.data.classsigns[weekI].classsigns[classI].num--;
      console.log(that.data.classsigns[weekI].classsigns[classI].num);
      that.setData({
        classsigns: that.data.classsigns
      })
      wx.showToast({
        title: '预约成功',
      })
    }

  }
})