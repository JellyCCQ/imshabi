//index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    winHeight: "",//窗口高度
    currentTab: 0, //预设当前项的值
    scrollLeft: 0, //tab标题的滚动条位置
    tabList: [{ 'id': '0', 'title': '推荐' }, { 'id': '1', 'title': '文学小说' }, { 'id': '2', 'title': '经管励志' }, { 'id': '3', 'title': '人文社科' }, { 'id': '4', 'title': '科技科普' }, { 'id': '5', 'title': '生活艺术' }],
    
    dataList: [
      {
        goods_id: 1,
        goods_title: '商品标题1',
        goods_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543513719258&di=830db36238903a2c634602d70031f73a&imgtype=0&src=http%3A%2F%2Fimg2.winxuancdn.com%2F3780%2F1201563780_0_1_800x800.jpg%3F1515031604450%26imageMogr2%2Fthumbnail%2F350x350',
        goods_comment: '0',
        goods_price: '60',
        goods_buyer: "鲁迅"
      }, {
        goods_id: 1,
        goods_title: '商品标题2',
        goods_img: 'https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=a284ee4bc595d143c576e22343f18296/0b7b02087bf40ad182fac5ab5a2c11dfa9ecce58.jpg',
        goods_comment: '0',
        goods_price: '70'
      }, {
        goods_id: 1,
        goods_title: '商品标题3',
        goods_img: 'https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=a284ee4bc595d143c576e22343f18296/0b7b02087bf40ad182fac5ab5a2c11dfa9ecce58.jpg',
        goods_comment: '0',
        goods_price: '80',
        goods_buyer: "鲁迅"
      }, {
        goods_id: 1,
        goods_title: '商品标题4',
        goods_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543513719258&di=830db36238903a2c634602d70031f73a&imgtype=0&src=http%3A%2F%2Fimg2.winxuancdn.com%2F3780%2F1201563780_0_1_800x800.jpg%3F1515031604450%26imageMogr2%2Fthumbnail%2F350x350',
        goods_comment: '0',
        goods_price: '90',
        goods_buyer: "鲁迅"
      }, {
        goods_id: 1,
        goods_title: '商品标题5',
        goods_img: 'https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=a284ee4bc595d143c576e22343f18296/0b7b02087bf40ad182fac5ab5a2c11dfa9ecce58.jpg',
        goods_comment: '0',
        goods_price: '110',
        goods_buyer: "鲁迅"
      }, {
        goods_id: 1,
        goods_title: '商品标题5',
        goods_img: 'https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=a284ee4bc595d143c576e22343f18296/0b7b02087bf40ad182fac5ab5a2c11dfa9ecce58.jpg',
        goods_comment: '0',
        goods_price: '110',
        goods_buyer: "鲁迅"
      }, {
        goods_id: 1,
        goods_title: '商品标题5',
        goods_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543513719258&di=830db36238903a2c634602d70031f73a&imgtype=0&src=http%3A%2F%2Fimg2.winxuancdn.com%2F3780%2F1201563780_0_1_800x800.jpg%3F1515031604450%26imageMogr2%2Fthumbnail%2F350x350',
        goods_comment: '0',
        goods_price: '110',
        goods_buyer: "鲁迅"
      }, {
        goods_id: 1,
        goods_title: '商品标题5',
        goods_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543513719258&di=830db36238903a2c634602d70031f73a&imgtype=0&src=http%3A%2F%2Fimg2.winxuancdn.com%2F3780%2F1201563780_0_1_800x800.jpg%3F1515031604450%26imageMogr2%2Fthumbnail%2F350x350',
        goods_comment: '0',
        goods_price: '110',
        goods_buyer: "鲁迅"
      }, {
        goods_id: 1,
        goods_title: '商品标题5',
        goods_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543513719258&di=830db36238903a2c634602d70031f73a&imgtype=0&src=http%3A%2F%2Fimg2.winxuancdn.com%2F3780%2F1201563780_0_1_800x800.jpg%3F1515031604450%26imageMogr2%2Fthumbnail%2F350x350',
        goods_comment: '0',
        goods_price: '110',
        goods_buyer: "鲁迅"
      }
    ],
  },

  // 滚动切换标签样式
  switchTab: function (e) {
    this.setData({
      currentTab: e.detail.current
    });
    this.checkCor();
  },
  // 点击标题切换当前页时改变样式
  swichNav: function (e) {
    var cur = e.target.dataset.current;
    if (this.data.currentTaB == cur) { return false; }
    else {
      this.setData({
        currentTab: cur
      })
    }
  },
  //判断当前滚动超过一屏时，设置tab标题滚动条。
  checkCor: function () {
    if (this.data.currentTab >= 4) {
      this.setData({
        scrollLeft: "500rpx"
      })
    } else {
      this.setData({
        scrollLeft: 0
      })
    }
  },
  onLoad: function () {
    var that = this;
    //  高度自适应
    wx.getSystemInfo({
      success: function (res) {
        var clientHeight = res.windowHeight,
          clientWidth = res.windowWidth,
          rpxR = 750 / clientWidth;
        var calc = clientHeight * rpxR - 180;
        console.log(calc)
        that.setData({
          winHeight: calc
        });
      }
    });
  },
  //加载数据
  getDataList: function () {
    //调用数据接口，获取数据

  },
  search_click:function(){
    wx.navigateTo({
      url: '../search/search'
    })
  }

})
