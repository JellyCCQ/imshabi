// pages/userCenter/userCenter.js
const app = getApp()
var util = require('../../utils/util.js')
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    balance: 0
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  allOrder: function () {
    var islogin = this.data.hasUserInfo;
    if (islogin) {
      wx.request({
        url: 'https://jelly666.top/getdealorder/',
        data: util.json2Form({
          user: app.globalData.userInfo.nickName,
        }),
        header: { "Content-Type": "application/x-www-form-urlencoded" },
        method: 'POST',
        dataType: 'json',
        responseType: 'text',
        success: function (res) {
          var temp = res.data
          console.log(temp)
          app.globalData.toDealList = temp

        },
      })
      wx.request({
        url: 'https://jelly666.top/getfinishedorder/',
        data: util.json2Form({
          user: app.globalData.userInfo.nickName,
        }),
        header: { "Content-Type": "application/x-www-form-urlencoded" },
        method: 'POST',
        dataType: 'json',
        responseType: 'text',
        success: function (res) {
          var temp = res.data
          console.log(temp)
          app.globalData.finishedList = temp
        },
      })
      wx.navigateTo({
        url: '../orderForm/orderForm'
      })
    } else {
      wx.showToast({
        title: '请登录',
        duration: 2000,
        mask: true,
      })
    }
  },
  mypublish: function () {
    wx.navigateTo({
      url: '../mypublish/mypublish'
    })
  },
  mysell: function () {
    wx.navigateTo({
      url: '../mysell/mysell'
    })
  },
  mybuy: function () {
    wx.navigateTo({
      url: '../mybuy/mybuy'
    })
  },
  myMsg: function () {
    wx.navigateTo({
      url: '../myMsg/myMsg'
    })
  },
  feedback: function () {
    wx.navigateTo({
      url: '../feedback/feedback'
    })
  },
  about: function () {
    wx.navigateTo({
      url: '../about/about'
    })
  },
  getmoney:function(){
    wx.showModal({
      title: '确定体现吗',
      content: '额支付更方便呦~',
      showCancel: true,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})
