Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 首页被选中的导航索引
    currentIndexNav: 0,
    // 首页导航数据
    navList: [],
    // 轮播图数据
    swiperList: [],
    // 视频列表数据
    videosList: []
  },

  /**
   * 点击导航事件
   */
  activeNav(e) {
    this.setData({
      currentIndexNav: e.target.dataset.index
    })
  },

  /**
   * 获取首页的导航数据
   */
  getNavList() {
    let that = this;
    wx.request({
      url: 'https://raw.githubusercontent.com/djzhao627/resources/master/mini_bilibili/api/navList.json',
      success(res) {
        if (res.data.code === 0) {
          that.setData({
            navList: res.data.data.navList
          })
        }
      }
    })
  },
  
  /**
   * 获取轮播图数据
   */
  getSwiperList() {
    let that = this;
    wx.request({
      url: 'https://raw.githubusercontent.com/djzhao627/resources/master/mini_bilibili/api/swiperList.json',
      success(res) {
        if (res.data.code === 0) {
          that.setData({
            swiperList: res.data.data.swiperList
          })
        }
      }
    })
  },

  /**
   * 获取首页视频列表数据
   */
  getVideosList() {
    let that = this;
    wx.request({
      url: 'https://raw.githubusercontent.com/djzhao627/resources/master/mini_bilibili/api/videosList.json',
      success(res) {
        if (res.data.code === 0) {
          that.setData({
            videosList: res.data.data.videosList
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取首页导航数据
    this.getNavList();
    // 获取轮播图数据
    this.getSwiperList();
    // 获取视频列表数据
    this.getVideosList();
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
    
  }
})