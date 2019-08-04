// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 视频信息
    videoInfo: {},
    // 推荐视频列表
    otherVideoList: [],
    // 评论数据
    commentData: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let videoId = options.id;
    this.getCurrentVideo(0);
    this.getOtherVideoList(0);
    this.getCommentData(0);
  },

  /**
   * 根据视频ID获取视频内容
   * @param {} videoId 视频id
   */
  getCurrentVideo(videoId) {
    let that = this;
    wx.request({
      url: 'https://raw.githubusercontent.com/djzhao627/resources/master/mini_bilibili/api//videoDetail'+ videoId +'.json',
      success(res) {
        if (res.data.code === 0) {
          that.setData({
            videoInfo: res.data.data.videoInfo
          })
        }
      }
    })
  },

  /**
   * 获取推荐视频列表
   * @param {} videoId 当前视频ID 
   */
  getOtherVideoList(videoId) {
    let that = this;
    wx.request({
      url: 'https://raw.githubusercontent.com/djzhao627/resources/master/mini_bilibili/api/otherVideoList'+ videoId +'.json',
      success(res) {
        if (res.data.code === 0) {
          that.setData({
            otherVideoList: res.data.data.othersList
          })
        }
      }
    })
  },

  /**
   * 获取评论数据
   * @param {*} videoId 
   */
  getCommentData(videoId) {
    let that = this;
    wx.request({
      url: 'https://raw.githubusercontent.com/djzhao627/resources/master/mini_bilibili/api/commentData'+ videoId +'.json',
      success(res) {
        if (res.data.code === 0) {
          that.setData({
            commentData: res.data.data.commentData
          })
        }
      }
    })
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