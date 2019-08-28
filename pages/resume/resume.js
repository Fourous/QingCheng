// pages/resume/resume.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    resumefor:[],
    sw1:"https://qczby.oss-cn-shenzhen.aliyuncs.com/Agreement/0_1.png",
    sw2: "https://qczby.oss-cn-shenzhen.aliyuncs.com/Agreement/0_2.png",
    sw3: "https://qczby.oss-cn-shenzhen.aliyuncs.com/Agreement/0_3.png",
    sw4: "https://qczby.oss-cn-shenzhen.aliyuncs.com/Agreement/0_4.png",
    sw5: "https://qczby.oss-cn-shenzhen.aliyuncs.com/Agreement/0_5.png",
    sw6: "https://qczby.oss-cn-shenzhen.aliyuncs.com/Agreement/0_6.png",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
  //   var that=this;
  //   for(var i=1;i<7;i++){
  //     that.data.resumefor.push("https://qczby.oss-cn-shenzhen.aliyuncs.com/Agreement/0_" + i + ".png");
  //   }
  // console.log(that.data.resumefor)
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
})