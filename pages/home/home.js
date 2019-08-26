// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls:[
      // "../image/top1.png",
      // "../image/top2.png",
      // "../image/top3.png",
      // "../image/top4.png",
    ],
    openid:"",
    teacherid: null
  },
  switchTab: function (e) {
    this.setData({
      currentTab: e.detail.current
    });
    this.checkCor();
  },
  // 点击标题切换当前页时改变样式
  switchNav: function (e) {
    var cur = e.target.dataset.current;
    this.setWinHeight(cur);
    if (this.data.currentTaB == cur) { return false; }
    else {
      this.setData({
        currentTab: cur
      })
    }
  },
  //判断当前滚动超过一屏时，设置tab标题滚动条。
  checkCor: function () {
    if (this.data.currentTab > 3) {
      this.setData({
        scrollLeft: 300
      })
    } else {
      this.setData({
        scrollLeft: 0
      })
    }
  },
  // url: '../fourpeople/fourpeople',
  // url: '../onepeople/onepeople',
  // url: '../group/group',
  to_four_people:function(){
    let that = this
    wx.request({
      url: 'https://www.qczyclub.com/getmyteacher',
      data: {
        'openid': this.data.openid
      },
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      success: (res) => {
        if (res.data.tid) {
          console.log(res)
          wx.setStorage({
            key: 'teacherid',
            data: res.data.tid
          })
          that.setData({
            teacherid: res.data.tid
          })
          wx.navigateTo({
            url: '../mytable/mytable',
          })
        } else {
          console.log(res)
          wx.showToast({
            title: '还未选择教练！请进入训练场选择！',
            duration: 1500,
            icon: 'none'
          })
        }
      }
    })
  },
  to_one_people:function(){
    wx.navigateTo({
      url: '../studycardetail/studycardetail',
    })
  },
  to_group:function(){
    wx.navigateTo({
      // url: '../carpackage/carpackage',
      // url: '../packagenew/packagenew',
      url:'../threenewpack/threenewpack'
    })

  },
  // 这里是指向加入我们得入口
  toColumn1: function () {
    wx.navigateTo({
      url: '../fourcolumn1/fourcolumn1',
    })
  },
  toColumn2: function () {
    wx.navigateTo({
      url: '../fourcolumn2/fourcolumn2',
    })
  },
  toColumn3: function () {
    wx.navigateTo({
      url: '../fourcolumn3/fourcolumn3',
    })
  },
  toColumn4: function () {
    wx.navigateTo({
      url: '../fourcolumn4/fourcolumn4',
    })
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
    //请求个人数据注入缓存
    let that = this
    wx.getStorage({
      key: 'openid',
      success: function(res) {
        let openid = res.data
        console.log(openid)
        that.setData({
          openid: res.data
        })
        //获取教练
        wx.request({
          url: 'https://www.qczyclub.com/getmyteacher',
          data: {
            'openid': openid
          },
          method: 'POST',
          header: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          },
          success: (res) => {
            if (res.data.tid) {
              console.log(res)
              wx.setStorage({
                key: 'teacherid',
                data: res.data.tid
              })
              that.setData({
                teacherid: res.data.tid
              })
            } else {
              console.log(res)
            }
          },
          fail: function () {
            console.log('获取教师id失败');
          }
        })
      },
    })

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let arr = []
    for(let i=1; i<5; i++){
      wx.request({
        url: 'https://www.qczyclub.com/adverget',
        data: {
          'adverid': i
        },
        header: {
          'Content-Type' :"application/x-www-form-urlencoded;charset=UTF-8"
        },
        method: 'POST',
        success: (res) =>{
          arr.push(res.data.adver.image1)
          this.setData({
            imgUrls: arr
          })
        },
      })
    }
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
  /**
   * 轮播广告位
   */
  showad:function(e){
    console.log(e);
    var id= e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../advertise/advertise?id='+ id,
    })
    // wx.showToast({
    //   title: '广告位招标！',
    // })

  },
  groupcom:function() {
    wx.navigateTo({
      url: '../withUs/withUs',
    })
  }
})