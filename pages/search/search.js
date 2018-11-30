// pages/search/search.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    tabTxt: ['类型', '价格', '评价'],//分类
    tab: [true, true, true],
    typeList: [{ 'id': '0', 'title': '综合' }, { 'id': '1', 'title': '文学小说' }, { 'id': '2', 'title': '经管励志' }, { 'id': '3', 'title': '人文社科' }, { 'id': '4', 'title': '科技科普' }, { 'id': '5', 'title': '生活艺术' }],
    type_id: 0,//类型
    type_txt: '',
    priceList: [{ 'id': '0', 'title': '不限' }, { 'id': '1', 'title': '0-9' }, { 'id': '2', 'title': '10-19' }, { 'id': '3', 'title': '20-29' }, { 'id': '4', 'title': '30-39' }, { 'id': '5', 'title': '40-' }],
    price_id: 0,//价格
    price_txt: '',
    commentList: [{ 'id': '0', 'title': '不限' }, { 'id': '1', 'title': '从高到低' }, { 'id': '2', 'title': '从低到高' }],
    comment_id: 0,//评价
    comment_txt: '',
    dataList: [
      {
        goods_id: 1,
        goods_title: '商品标题1',
        goods_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543513719258&di=830db36238903a2c634602d70031f73a&imgtype=0&src=http%3A%2F%2Fimg2.winxuancdn.com%2F3780%2F1201563780_0_1_800x800.jpg%3F1515031604450%26imageMogr2%2Fthumbnail%2F350x350',
        goods_comment: '0',
        goods_price: '60'
      }, {
        goods_id: 1,
        goods_title: '商品标题2',
        goods_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543513719258&di=830db36238903a2c634602d70031f73a&imgtype=0&src=http%3A%2F%2Fimg2.winxuancdn.com%2F3780%2F1201563780_0_1_800x800.jpg%3F1515031604450%26imageMogr2%2Fthumbnail%2F350x350',
        goods_comment: '0',
        goods_price: '70'
      }, {
        goods_id: 1,
        goods_title: '商品标题3',
        goods_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543513719258&di=830db36238903a2c634602d70031f73a&imgtype=0&src=http%3A%2F%2Fimg2.winxuancdn.com%2F3780%2F1201563780_0_1_800x800.jpg%3F1515031604450%26imageMogr2%2Fthumbnail%2F350x350',
        goods_comment: '0',
        goods_price: '80'
      }, {
        goods_id: 1,
        goods_title: '商品标题4',
        goods_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543513719258&di=830db36238903a2c634602d70031f73a&imgtype=0&src=http%3A%2F%2Fimg2.winxuancdn.com%2F3780%2F1201563780_0_1_800x800.jpg%3F1515031604450%26imageMogr2%2Fthumbnail%2F350x350',
        goods_comment: '0',
        goods_price: '90'
      }, {
        goods_id: 1,
        goods_title: '商品标题5',
        goods_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543513719258&di=830db36238903a2c634602d70031f73a&imgtype=0&src=http%3A%2F%2Fimg2.winxuancdn.com%2F3780%2F1201563780_0_1_800x800.jpg%3F1515031604450%26imageMogr2%2Fthumbnail%2F350x350',
        goods_comment: '0',
        goods_price: '110'
      }
    ],
  },

  // 选项卡
  filterTab: function (e) {
    var data = [true, true, true], index = e.currentTarget.dataset.index;
    data[index] = !this.data.tab[index];
    this.setData({
      tab: data
    })
  },

  //筛选项点击操作
  filter: function (e) {
    var self = this, id = e.currentTarget.dataset.id, txt = e.currentTarget.dataset.txt, tabTxt = this.data.tabTxt;
    switch (e.currentTarget.dataset.index) {
      case '0':
        tabTxt[0] = txt;
        self.setData({
          tab: [true, true, true],
          tabTxt: tabTxt,
          type_id: id,
          type_txt: txt
        });
        break;
      case '1':
        tabTxt[1] = txt;
        self.setData({
          tab: [true, true, true],
          tabTxt: tabTxt,
          price_id: id,
          price_txt: txt
        });
        break;
      case '2':
        tabTxt[2] = txt;
        self.setData({
          tab: [true, true, true],
          tabTxt: tabTxt,
          comment_id: id,
          comment_txt: txt
        });
        break;
    }
    //数据筛选
    self.getDataList();
  },

  //加载数据
  getDataList: function () {
    //调用数据接口，获取数据


  }

})
