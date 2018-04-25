// pages/list/list.js
const baseURl = `https://test-miniprogram.com/api/news`
import { formatTime } from '../../utils/util.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: baseURl + '/detail',
      data: {
        id: options.id
      },
      success: res => {
        let { result } = res.data;
        console.log(result)
        
        this.setData({
          date: formatTime(new Date(result.date)),
          img: result.firstImage,
          title: result.title,
          source: result.source,
          readCount: result.readCount,
          content: result.content
        })
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