// pages/teacherdetail/teacherdetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      // "../image/invitefr.jpg",
      // "../image/invitefr.jpg",
      // "../image/invitefr.jpg",
      // "../image/invitefr.jpg",
    ],
    sw:"https://qczby.oss-cn-shenzhen.aliyuncs.com/advertising/swiper1.jpg"    
  },
  // show: function () {
  //   this.setData({ flag: false })
  // },
  // hide: function () {
  //   this.setData({ flag: true })
  // },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.tid)
    var that=this
    wx.getStorage({
      key: 'openid',
      success: function (res) {
        console.log(res)
        console.log(res.data)
        that.setData({
          openid: res.data
        })
      },
    });
    // let url = "https://qczby.oss-cn-shenzhen.aliyuncs.com/advertising/swiper1.jpg"
    // wx.downloadFile({
    //   url: url,
    //   success: (res) => {
    //     let temp = res.tempFilePath
    //     console.log(res)
    //     that.setData({
    //       sw: temp
    //     })
    //     // that.imgUrls.push(temp);
    //     // console.log(temp)
    //     // console.log(that.data.resumepng)
    //   }
    // })
    // that.setData({
    //   tid:options.tid
    // })
  //   wx.request({
  //     url: 'https://www.lieyanwenhua.com/coach_comment',
  //     header: { "Content-Type": "application/x-www-form-urlencoded" },
  //     method: 'POST',
  //     data: {
  //       tid: that.data.tid
  //     },
  //     success: function(res){
  //       console.log(res)
  //       var comments= res.data.comment_user;
  //       that.setData({
  //         comments: comments
  //       })
  //     }
  //   })
  // },
  // commentcome: function () {
  //   var that = this;
  //   wx.request({
  //     url: 'https://www.lieyanwenhua.com/coach_comment',
  //     method: 'POST',
  //     data: {
  //       "tid": that.data.tid
  //     },
  //     header: {
  //       'content-type': 'application/x-www-form-urlencoded'
  //     },
  //     success: function (res) {
  //       console.log(res.data);
  //       that.setData({
  //         comments: res.data.comment_user
  //       })
  //     },
  //     fail: function (res) {
  //       console.log(res);
  //     }
  //   })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this
    console.log(that.data.openid)
    //这里每次显示的时候，通过openID请求所有数据，包括头像等信息
    wx.request({
      url: 'https://www.lieyanwenhua.com/getmyteacher',
      method: 'POST',
      data: {
        "openid": that.data.openid
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res.data);
        if(res.data==""){
          that.setData({
            bindis:0
          })
        }
        else {
          that.setData({
            bindis:1,
            teachers: res.data
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
    var that=this
// that.commentcome();
      // 在这里通过openid请求评论人物的头像和昵称信息
    // wx.request({
    //   url: 'https://www.lieyanwenhua.com/userqueryByid',
    //   method: 'POST',
    //   data: {
    //     "openid": 
    //   },
    //   header: {
    //     'content-type': 'application/x-www-form-urlencoded'
    //   },
    //   success: function (res) {
    //     console.log(res.data);
    //     that.setData({
    //       comments: res.data.comment_user
    //     })
    //   },
    //   fail: function (res) {
    //     console.log(res);
    //   }
    // })


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


  enterMenberThinking: function() {
    wx.navigateTo({
      // url: '../menberThinking/menberThinking',
      url:'../webview/webview',
    })
  },
  enterTeacherThinking: function() {
    wx.navigateTo({
      // url: '../teacherThinking/teacherThinking',
      url: '../webview/webview',
    })
  },
  enterCooperate: function() {
    wx.navigateTo({
      // url: '../enterCooperate/enterCooperate',
      url: '../webview/webview',
    })
  }
})