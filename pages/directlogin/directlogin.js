// pages/login/firstlogin/firstlogin.js
var app = getApp();
Page({


  /**
   * 页面的初始数据
   */
  data: {
    userinfo: null,
    image:null,
    index:"https://qczby.oss-cn-shenzhen.aliyuncs.com/others/login.jpg"
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
    var that = this
    let url = "https://www.qczyclub.com/welcome/adver.png"
    wx.downloadFile({
      url: url,
      success: (res) => {
        let temp = res.tempFilePath
        that.setData({
          image: temp
        })
      }
    })
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

  onGotUserInfo: function (e) {
    var that = this;
    wx.showToast({
      title: '登录',
      icon: 'loading',
      duration:3000
    })
    //获取必要的变量
    var userInfo = e.detail.userInfo;
    var appId = app.globalData.g_appID;
    var appSecret = app.globalData.g_appSecret;
    wx.login({
      success: function (res) {
        console.log(res);
        wx.setStorage({
          key: 'userInfo',
          data: userInfo
        })
        console.log(userInfo)
        var code = res.code;//获取code这个code是实时变化的
        if (code) {
          //userInfo是一个数组,这里会将这个数据发送到后台
          console.log(code)
          that.getOpenId(code, appId, appSecret, userInfo);
        }
      },
      fail: function () {
        console.log('登录失败！');
      }
    })
  },

  getOpenId: function (code, appId, appSecret, userInfo) {
    var that = this;
    var url = 'https://www.qczyclub.com/code'
    wx.request({
      url: url,
      data: {
        'code': code
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      success: function (res) {
        var openid = res.data.openid;
        if(openid){
          console.log(openid);
          wx.setStorage({
            key: 'openid',
            data: openid,
          })
          that.sqluser(openid, userInfo)
        } else {
          console.log(res)
          wx.showToast({
            title: '登陆失败，服务器故障请稍后重试',
            icon: 'none',
            duration: 1500
          })
        }
      },
      fail: function (res) {
        console.log(res,'请求openID失败');
      }
    })
  },

  sqluser: function (openid, userInfo) {
    var that = this;
    wx.request({
      url: 'https://www.qczyclub.com/userqueryByid',
      method: 'POST',
      data: {
        "openid": openid
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        // 寻找这个用户，如果没找到，就存入数据，作为注册用户使用
        if (res.data.userbyid == 0) {
          that.sqlData(openid, userInfo);
        }
        else {
          wx.switchTab({
            url: '../home/home',
          })
        }
      },
      fail: function (res) {
        console.log(res);
      }
    })
  },

  sqlData: function (openid, userInfo) {
    console.log(openid);
    console.log(userInfo);
    var that = this;
    wx.request({
      url: 'https://www.qczyclub.com/userinsert',
      method: 'POST',
      data: {
        "openid": openid,
        "nickName": userInfo.nickName,
        "gender": userInfo.gender,
        "city": userInfo.city,
        "province": userInfo.province,
        "language": userInfo.language,
        "country": userInfo.country,
        "avatarUrl": userInfo.avatarUrl,
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res);
        console.log("上传数据成功");
        wx.switchTab({
          url: '../home/home',
        })
      },
      fail: function (res) {
        console.log(res);
      }
    })
  },
})
