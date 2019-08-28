// pages/teacherPage/teacherPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openid:'',
    trainingid: null,
    coachList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'openid',
      fail: () => { wx.redirectTo({ url: '../index/index', }) },
    })
    this.setData({trainingid: options.id})
    wx.request({
      url: 'https://www.qczyclub.com/getcoachbycarid',
      method: 'POST',
      data:{'carid': options.id},
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success:(res)=>{
        this.setData({
          'coachList': res.data
        })
        console.log(this.data)
      },
      fail: function () {
        console.log('fail')
      }
    })
  },
  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.getStorage({
      key: 'openid',
      success: (res) => {this.setData({openid: res.data})},
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
  bindCoach: function(e) {
    let tid = e.currentTarget.dataset.id
    wx.request({
      url: 'https://www.qczyclub.com/bindmyteacher',
      method: 'POST',
      data: { 
        'openid': this.data.openid ,
        'tid': tid
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: (res) => {
        if(res.data == 1){
          wx.showToast({
            title: '成功选择教练',
            duration: 1500
          })
        } else if(res.data == 2){
          wx.showToast({
            title: '已经选择教练请勿重复操作',
            icon: 'none',
            duration: 1500
          })
        } else {
          wx.showToast({
            title: '选择教练失败！',
            icon: 'none',
            duration: 1500
          })  
        } 
      },
      fail: function () {
        console.log('fail')
      }
    })
  }
})