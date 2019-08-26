// pages/advertise/advertise.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:null,
    imagefile:null,
    // advertiseid:0,
    // userInfo:"",
    // title:"广告",
    // time:"2018-10-27 15:18",
    // content:"广告,顾名思义,就是广而告之,即向社会广大公众告知某件事物。广告就其含义来说,有广义和狭义之分。广义广告是指不以营利为目的的广告,如政府公告,政党、宗教、教育、文化、市政、社会团体等方面的启事、声明等。狭义广告是指以营利为目的的广告,通常指的是商业广告,或称经济广告，它是工商企业为推销商品或提供服务，以付费方式,通过广告媒体向消费者或用户传播商品或服务信息的手段。商品广告就是这样的经济广告。"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  var that=this
  that.setData({
    id:options.id
  })
  console.log("id=="+that.data.id)
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
    var that=this
    that.setData({
      imagefile: "https://qczby.oss-cn-shenzhen.aliyuncs.com/forintro/adver" + that.data.id + ".png"
    })
    console.log(that.data.imagefile)
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

  }
})