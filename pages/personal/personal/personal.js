// pages/personal/personal/personal.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userdata:null,
    Customer_call:'15207167639',
    openid:'',
    teacher:"",
    nickname:"",
    userInfo:"",
    userinfoback:"https://qczby.oss-cn-shenzhen.aliyuncs.com/others/backgr.png"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'openid',
      fail: () => { wx.redirectTo({ url: '../index/index', }) },
    })
    var that=this;
    wx.getStorage({
      key: 'userInfo',
      success: function (res) {
        that.setData({
          userInfo: res.data,
        }) 
      },
    });
    wx.getStorage({
      key: 'openid',
      success: function(res) {
        that.setData({
          openid:res.data
        })
        let openid = res.data
        console.log(openid)
        wx.request({
          url: 'https://www.qczyclub.com/userqueryByid',
          method: 'POST',
          data: {
            'openid': openid
          },
          header: {
            'content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
          },
          success: function (res) {
            console.log(res);
            that.setData({
              nickname: res.data.userbyid.nickName
            })
          },
          fail: function (res) {
            console.log(res);
          }
        })
      },
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this;
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that=this;
    wx.request({
      url: 'https://www.qczyclub.com/userqueryByid',
      method: 'POST',
      data: {
        'openid': that.data.openid
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      success: function (res) {
        console.log(res);
        if(res.data.userbyid.nickName==""){
          that.setData({
            nickname: "萌新"
          })
        }else{
          that.setData({
            nickname: res.data.userbyid.nickName
          })
        }
        console.log(that.data.nickname);
      },
      fail: function (res) {
        console.log(res);
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
  ToOrder: function(){
    wx.navigateTo({
      url: '../myOrder/myOrder',
    })
  },
  ToScale: function () {
    wx.navigateTo({
      url: '../scale/scale',
    })
  },
  ToMyTeam: function() {
    wx.navigateTo({
      url: '../myTeam/myTeam',
    })
  },
  TOchteacher:function(){
    wx.navigateTo({
      url: '../chteacher/chteacher',
    })
  },
  Tofeedback:function(){
    wx.navigateTo({
      url: '../feedback/feedback',
    })
  },
  Toaffair:function(){
    wx.navigateTo({
      url: '../../mycir/mycir',
    })
    // wx.showToast({
    //   title: '敬请期待！',
    //   icon: 'loading'
    // })
  },
  Toround:function(){
   /* wx.navigateTo({
      url: '../myround/myround',
    })*/
    wx.showToast({
      title: '敬请期待！',
      icon:'loading'
    })
  },
  Tostore:function(){
    wx.showToast({
      title: '敬请期待！',
      icon: 'loading'
    })
  },
  Tofun:function(){
    // wx.navigateTo({
    //   url: '../../myteam/myteam',
    // })
    wx.showToast({
      title: '敬请期待！',
      icon: 'loading'
    })
  },
  Tocustom:function(){
    
    wx.navigateTo({
      url: '../../problems/problems',
    })
  },
  Toback:function(){
    wx.redirectTo({
      url: '../../directlogin/directlogin',
    })
  },
  toOrderform:function() {
    wx.navigateTo({
      url: '../orderForm/orderForm',
    })
  },
  tobindteacher:function(){
    wx.navigateTo({
      url: '../../bindteacher/bindteacher',
    })
  },
  Toteacherorder:function(){
    //这里是跳转到教练的课表页面
    wx.navigateTo({
      url: '../../teacherindex/teacherlogin/teacherlogin',
    })
  },
  changenickname:function(){
    var that=this;
    console.log(that.data.nickname);
    wx.navigateTo({
      url: '../changeone/changeone?nickname=' + that.data.nickname,
    })
  },
  ToStudent:function(){
    wx.showModal({
      title: '青橙管家提醒您',
      content: '该功能还在开发中，尽请期待吧',
    })
  }

})