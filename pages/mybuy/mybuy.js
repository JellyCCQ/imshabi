// pages/mybuy/mybuy.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: [
      {
        order_id: 123456,
        seller:"lo",
        sumOfmoney: "100",
        sumOfnum:3,
        goods:[{
          goods_id: 1,
          title: '商品标题1',
          goods_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543513719258&di=830db36238903a2c634602d70031f73a&imgtype=0&src=http%3A%2F%2Fimg2.winxuancdn.com%2F3780%2F1201563780_0_1_800x800.jpg%3F1515031604450%26imageMogr2%2Fthumbnail%2F350x350',
          time: '2018-12-2',
          price: '70',
          num: "1"
        },{
            goods_id: 1,
            title: '商品标题2',
            goods_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543513719258&di=830db36238903a2c634602d70031f73a&imgtype=0&src=http%3A%2F%2Fimg2.winxuancdn.com%2F3780%2F1201563780_0_1_800x800.jpg%3F1515031604450%26imageMogr2%2Fthumbnail%2F350x350',
            time: '2018-12-2',
            price: '20',
            num: "1"
          }, {
            goods_id: 1,
            title: '商品标题3',
            goods_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543513719258&di=830db36238903a2c634602d70031f73a&imgtype=0&src=http%3A%2F%2Fimg2.winxuancdn.com%2F3780%2F1201563780_0_1_800x800.jpg%3F1515031604450%26imageMogr2%2Fthumbnail%2F350x350',
            time: '2018-12-2',
            price: '10',
            num: "1"
          }]
      },
      {
        order_id: 123456,
        seller: "lo",
        sumOfmoney: "90",
        sumOfnum: 2,
        goods: [{
          goods_id: 1,
          title: '商品标题1',
          goods_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543513719258&di=830db36238903a2c634602d70031f73a&imgtype=0&src=http%3A%2F%2Fimg2.winxuancdn.com%2F3780%2F1201563780_0_1_800x800.jpg%3F1515031604450%26imageMogr2%2Fthumbnail%2F350x350',
          time: '2018-12-2',
          price: '70',
          num: "1"
        }, {
          goods_id: 1,
          title: '商品标题2',
          goods_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543513719258&di=830db36238903a2c634602d70031f73a&imgtype=0&src=http%3A%2F%2Fimg2.winxuancdn.com%2F3780%2F1201563780_0_1_800x800.jpg%3F1515031604450%26imageMogr2%2Fthumbnail%2F350x350',
          time: '2018-12-2',
          price: '20',
          num: "1"
        }]
      },
      {
        order_id: 123456,
        seller: "lo",
        sumOfmoney: "70",
        sumOfnum: 1,
        goods: [{
          goods_id: 1,
          title: '商品标题1',
          goods_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543513719258&di=830db36238903a2c634602d70031f73a&imgtype=0&src=http%3A%2F%2Fimg2.winxuancdn.com%2F3780%2F1201563780_0_1_800x800.jpg%3F1515031604450%26imageMogr2%2Fthumbnail%2F350x350',
          time: '2018-12-2',
          price: '70',
          num: "1"
        }]
      }
    ]
        
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
  ordercomment:function(){
    console.log("comment")
    
  },
  deleteOrder:function(){
    console.log("delete")
  }
})