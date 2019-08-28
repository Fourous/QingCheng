// pages/personal/scale/scale.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scanback:"https://qczby.oss-cn-shenzhen.aliyuncs.com/others/wescan.png",
    scanQR:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    wx.request({
      url: 'https://www.qczyclub.com/getQRcode',
      method: 'POST',
      data: {
        
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      success: function (res) {
        console.log(res.data)
        let urlimg = "https://api.weixin.qq.com/cgi-bin/wxaapp/createwxaqrcode?access_token="+res.data.token//小程序获取token
        
        wx.request({
          url:urlimg, 
          method: 'POST',
          data: {
            "path": "pages/index/index?openid="+"12345",
            "width": 430,
            "auto_color": false,
            "line_color": { "r": "0", "g": "0", "b": "0" }
          },
          responseType: 'arraybuffer',
          // header: {
          //   'content-type': 'application/;charset=UTF-8'
          // },
          success: function (res) {
            console.log("二维码"+res.data)
            that.setData({
              scanQR: wx.arrayBufferToBase64(res.data)
            })
          },
          fail: function (res) {
            console.log(res);
          }
        })
      },
      fail: function (res) {
        console.log(res);
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
  download: function() {
    wx.saveImageToPhotosAlbum({
      filePath: 'data:image/png;base64,' + this.data.scanQR ,
    })
    success: (res)=>{
      console.log(res)
    }
  }
})