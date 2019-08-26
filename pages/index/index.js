//index.js
//获取应用实例
const   app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    image: "https://qczby.oss-cn-shenzhen.aliyuncs.com/others/indexadver.jpg",
    i:3,
    userInfo:""
  },

  toindex: function () {
    wx.redirectTo({
      url: '../directlogin/directlogin',
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var that = this
    // let url = "https://qczby.oss-cn-shenzhen.aliyuncs.com/others/index.png"
    // wx.downloadFile({
    //   url: url,
    //   success: (res) => {
    //     let temp = res.tempFilePath
    //     that.setData({
    //       image: temp
    //     })
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this
   

  },
  run:function(){
    var that=this;
    setTimeout(() => {this.run()}, 3000)
    this.setData({
      i:this.data.i-1
    })
    if(this.data.i ==1)
    {
      wx.redirectTo({
        url: '../directlogin/directlogin',
      })
    }
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that =this;
    that.run();

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
  // toad: function(e){
  //   var id= e.currentTarget.dataset.id;
  //   wx.navigateTo({
  //     url: '../advertise/advertise?id='+id,
  //   })
  // }
})