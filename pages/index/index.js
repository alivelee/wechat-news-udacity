// pages/index/index.js
var sliderWidth = 56; // 需要设置slider的宽度，用于计算中间位置

Page({
  data: {
    tabs: ["国内", "国际", "财经", "娱乐", "军事", "体育", "其他"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0
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
  },
  tabClick: function (e) {
    console.log(e)
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
    switch (e.currentTarget.id) {

    }
  }
});