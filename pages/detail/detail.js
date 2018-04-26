// pages/list/list.js
const baseURl = `https://test-miniprogram.com/api/news`
import { formatTime } from '../../utils/util.js'

Page({
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
  }
})