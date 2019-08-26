// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    firstChoiceState: 0,
    winHeight: '',
    currentTab: 0,
    currentclass: 1,
    scrollLeft: 0,
    flag: true,
    id: 0,
    clientHeight: "",
    name: '',
    tel: '',
    address: '',
    qq: '',
    id: '',
    openid: "",
    off: "",
    packname:"",
    fir:true,
    c1OrC2: 0,
    identityCard: null,
  },
  // 滚动切换标签样式
  switchTab: function (e) {
    // 通过Tab定于套餐号码
    this.setData({
      currentTab: e.detail.current
    });
    this.checkCor();
    console.log("当前tab"+this.data.currentTab);
  },
  // 点击标题切换当前页时改变样式
  switchNav: function (e) {
    var that=this
    var cur = e.target.dataset.current;
    // this.setWinHeight(cur);
    if (this.data.currentTaB == cur) { return false; }
    else {
      this.setData({
        currentTab: cur,
        currentclass: Number(cur) + 1
      })
      console.log(this.data.c1OrC2 + this.data.currentclass)
    }
  },
  name: function (e) {
    this.setData({
      name: e.detail.value
    })
  },
  tel: function (e) {
    this.setData({
      tel: e.detail.value
    })
  },
  address: function (e) {
    this.setData({
      address: e.detail.value
    })
  },
  qq: function (e) {
    this.setData({
      qq: e.detail.value
    })
  },
  teamname: function (e) {
    this.setData({
      teamname: e.detail.value
    })
  },
  identityCard: function(e) {
    this.setData({
      identityCard: e.detail.value
    })
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          clientHeight: res.windowHeight
        });
      }
    });
    wx.request({
      url: 'https://www.qczyclub.com/packdetailall',
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: (res) => {
        console.log(res.data);
        that.setData({
         goods: res.data
        })
        console.log(that.data.off);
      }
    })
   
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this;
    wx.getStorage({
      key: 'userInfo',
      success: function (res) {
        console.log("cheng");
        that.setData({
          userInfo: res.data
        })
        console.log("jia");
      },
    });
    wx.getStorage({
      key: 'openid',
      success: function (res) {
        console.log(res)
        console.log(res.data)
        that.setData({
          openid: res.data
        })
        console.log(that.data.openid)
      },
    });
    
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
  confirm:function(){
    // 这里签署协议
    var that=this
    that.setData({
      fir:!that.data.fir
    })
  },
  goto:function(){
    //  去协议
    wx.navigateTo({
      url: '../resume/resume',
    })
  },
  navigateToQuestion: function (e) {
    wx.navigateTo({
      url: '../question/question'
    })
  },
  navigateToGood: function (e) {
    var that = this
    var type = e.currentTarget.dataset.type - 1;
    var id = e.currentTarget.dataset.id - 1;
    that.data.goods[type].good[id].flag = !that.data.goods[type].good[id].flag
    console.log(type);
    console.log(id);
    that.setData({
      goods: that.data.goods
    })
  },
//选择c1 c2
  choiceC: function(e) {
    let choice = e.currentTarget.id;
    this.setData({
      c1OrC2: choice,
      firstChoiceState: 1
    })
  },

  navigateToAd: function (e) {
    //console.log(e);
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../advertise/advertise?id=' + id,
    })
  },
  swiperchange: function (e) {
    var that = this
    console.log(e.detail.current)
    that.setData({
      'currentTab': e.detail.current
    })
  },
  toHome : function () {
    wx.redirectTo({
      url: '../home/home',
    })
  },
  //报名请求接口
  nexttap: function () {
    let currentclass = this.data.currentclass
    var that = this
    that.setData({
      id:that.data.currentTab
    })
    let boolresult = Boolean(this.data.identityCard && this.data.tel && this.data.name)
    if(!that.data.fir){
      if (!boolresult) {
        console.log(1)
        wx.showToast({
          title: '请正确填写信息',
          icon: 'none'
        })
      } else {
        wx.request({
          url: 'https://www.qczyclub.com/testform',
          data: {
            openid: that.data.openid
          },
          method: 'POST',
          header: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          success: (res) => {
            if (!res.data) {
              wx.showToast({
                title: '您已经报名,请勿重复报名',
                icon: 'none'
              })
            } else {
              let userForm = {
                'faddress': this.data.address,
                "fidcard": this.data.identityCard,
                "fname": this.data.name,
                "fpack": this.data.c1OrC2 + currentclass,
                "fqq": this.qq,
                "fteacher": "",
                "ftel": this.data.tel,
                "fwechat": "",
                "openid": this.data.openid
              }
              //支付
              let body, money
              if (currentclass == 1) {
                body = '普通班'
                money = 1
              } else if (currentclass == 2) {
                body = '舒适班'
                money = 2
              } else if (currentclass == 3) {
                body = 'VIP班'
                money = 3
              } else {
                body = '全包班'
                money = 4
              }
              console.log(body, money)
              wx.request({
                url: 'https://www.qczyclub.com/wxPay',
                data: {
                  openid: this.data.openid,
                  money: money,
                  body: body
                },
                header: {
                  "Content-Type": 'application/x-www-form-urlencoded;charset=UTF-8'
                },
                method: 'POST',
                success: (res) => {
                  console.log(res)
                  let data = res.data
                  wx.requestPayment({
                    timeStamp: data.timeStamp,
                    nonceStr: data.nonceStr,
                    package: data.package,
                    signType: 'MD5',
                    paySign: data.paySign,
                    success: (res)=>{
                      wx.request({
                        url: 'https://www.qczyclub.com/forminsert',
                        data: userForm,
                        method: 'POST',
                        success: (res) => {
                          console.log(res)
                          wx.showToast({
                            title: '报名成功',
                            duration: 2500
                          })
                        }
                      })
                    }
                  })
                }
              })
            }
          }
        })
    // 这里判断重复报名
      }
    } else {
      wx.showToast({
        title: '请同意协议',
      })
    }
  }
})