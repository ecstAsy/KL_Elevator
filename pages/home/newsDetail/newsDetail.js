Page({
  data: {
    newsDetail:''
  },
  onLoad (options) {
    let that = this;
    that.setData({
      newsDetail: JSON.parse(options.detail)
    })     
  },
})