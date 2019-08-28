// pages/myteam/myteam.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openid: "",
    list: 0,
    namelist: "",
    userInfo: "",
    teamid: "",
    backgr: "https://qczby.oss-cn-shenzhen.aliyuncs.com/others/backgr.png",
    flag1: true,
    flag2: true,
    listone: [],
    listtwo: [],
    avata: "",
    userInfo: "",
    someerro1: "",
    someerro2: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'openid',
      fail: () => { wx.redirectTo({ url: '../index/index', }) },
    })
    var that = this;
    wx.getStorage({
      key: 'openid',
      success: function (res) {
        console.log(res)
        console.log(res.data)
        that.setData({
          openid: res.data
        })
        console.log(that.data.openid)
      },
    })
    wx.getStorage({
      key: 'userInfo',
      success: function (res) {
        that.setData({
          userInfo: res.data,
        })
      },
    });

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this
    console.log(that.data.openid)
    wx.request({
      url: 'https://www.qczyclub.com/userquerymap',
      method: 'POST',
      data: {
        "openid": that.data.openid,
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res);
        that.setData({
          listone: res.data.one,
          listtwo: res.data.two
        })
        if (that.data.listone.length == 0) {
          that.setData({
            someerro1: "目前还没有分销人员加入哦",
          })
        }
        if (that.data.listtwo.length == 0) {
          that.setData({
            someerro2: "目前还没有分销人员加入哦"
          })
        }
      },
      fail: function (res) {
        console.log(res);
      }
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

  },
  updown1: function () {
    var that = this
    that.setData({
      flag1: !that.data.flag1
    })
  },
  updown2: function () {
    var that = this
    that.setData({
      flag2: !that.data.flag2
    })
  }

})