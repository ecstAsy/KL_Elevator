Page({
  data: {
    URL:[
      'https://www.cketrip.com/G5245/index.html',
      'https://www.cketrip.com/G5249/index.html'
    ],
    webUrl:''
  },
  onLoad: function (options) {
     let that = this,
         URL = that.data.URL;
    if (options.id === 0 || options.id === 2 || options.id === 4){
       that.setData({
         webUrl:URL[0]
       })
    }else{
      that.setData({
        webUrl: URL[1]
      })
    }
  }
})