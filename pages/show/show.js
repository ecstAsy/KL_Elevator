Page({
  data: {
    year:2018
  },
  onLoad (options){
    let that = this;
    setTimeout(()=>{
      wx.switchTab({
        url: '/pages/home/home',
      });
    },1500)
  }
})