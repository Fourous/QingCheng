// pages/orderteacher/orderteacher.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bgpic: null,
    tid: null,
    openid: '',
    teacherid: '',
    classsigns: null,
    userInfo:"",
    orderState: [0, 0, 0, 0],
    warming: false,
    orderArray: null,
    orderList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //先获取必要数据
    wx.getStorage({
      key: 'openid',
      success: (res)=>{this.setData({openid: res.data})
      console.log(res.data)},
    })
    wx.getStorage({
      key: 'teacherid',
      success: (res)=>{ this.setData({ teacherid: res.data }) },
    })
    var that = this;
    wx.request({
      url: 'https://www.qczyclub.com/Getime',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      method: 'post',
      data: {
        'openid': that.data.openid,
        'tid': 1
      },
      success:(res)=> {
        console.log(res)
        this.setData({
          orderList: res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 这里生成时间，将这个时间传到服务器，来判别当前时间
    var that = this;
    // var timestamp = Date.parse(new Date());
    // console.log(timestamp);
    // console.log(that.data.tid);

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
  //勾选框判定事件
  checkBoxChange: function(e) {
    let data = this.data.orderState;
    let arrNumber = e.currentTarget.id;
    data[arrNumber] = !data[arrNumber];
  },
  confirm: function(e) {
    let that = this
    let result = 0
    let orderState = this.data.orderState
    //将预约数据传入
    wx.showLoading({
      title: '预约中',
    })
    for(let i=1; i<5; i++){
      if(orderState[i-1]){
        wx.request({
          url: 'https://www.qczyclub.com/userappoint',
          method: 'post',
          data: {
            'openid': that.data.openid,
            'classid': i,
            'tid': that.data.teacherid
          },
          header: {
            'Content-Type': "application/x-www-form-urlencoded;charset=UTF-8",
          },
          success: function(res) {
            console.log(res)
            wx.hideLoading()
            if(res.data){
              wx.showToast({
                title: '预约成功!',
                icon: 'success',
                duration: 1500
              })
            }else{
              wx.showToast({
                title: '预约失败请稍后重试！',
                duration: 1000
              })
            }
          },
          fail: function() {
            wx.hideLoading()
            wx.showToast({
              title: '网络请求失败！',
              icon: 'none',
              duration: 1500
            })
          }
        })
      }
      wx.hideLoading()
      this.setData({orderState:[0,0,0,0]})
    }
  },
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