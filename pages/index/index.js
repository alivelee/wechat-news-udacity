const sliderWidth = 56; // 需要设置slider的宽度，用于计算中间位置
const baseURl = `https://test-miniprogram.com/api/news`

import { formatTime } from '../../utils/util.js'
Page({
  data: {
    tabs: [{
      name:'国内',
      shortName:'gn'
    }, {
      name: '国际',
      shortName: 'gj'
    },{
      name:'财经',
      shortName:'cj'
    }, {
      name: '娱乐',
      shortName: 'yl'
    }, {
      name: '军事',
      shortName: 'js'
    }, {
      name: '体育',
      shortName: 'ty'
    }, {
      name: '其他',
      shortName: 'other'
    }],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    category: 'gn'
  },
  onLoad() {
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          sliderLeft: (res.windowWidth / this.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / this.data.tabs.length * this.data.activeIndex
        });
      }
    });
    this.getNews(this.data.category)
  },
  getNews(category,cb) {
    category && wx.request({
      url: baseURl + '/list',
      data: {
        type:category
      },
      success: res => {
        const { result } = res.data
        const processData = result.map(item => {
          return {
            ...item,
            date: formatTime(new Date(item.date))
          }
        })
        this.setData({
          content: processData
        })
        console.log(result)
      },
      complete: () => {
        cb && cb()
      }
    })
  },
  linkToDetail(e) {
    console.log(e)
    wx.navigateTo({
      url: `/pages/detail/detail?id=${e.currentTarget.id}`,
    })
  },
  onPullDownRefresh() {
    this.getNews(this.data.category, () => {
      wx.stopPullDownRefresh()
    })
  },
  tabClick: function (e) {
    console.log(e)
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
    this.setData({
      category: e.target.dataset.name
    })
    this.getNews(e.target.dataset.name)
  }
});