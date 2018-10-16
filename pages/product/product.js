const App = getApp();
Page({
  data: {
    Tab: ['商户住宅', '商户客梯', '别墅梯', '货梯', '观光梯', '扶梯'],
    ActiveId: 0,
    SystemInfo:'',
    Loading:false,
    Class:'show',
    Product:[],
    ProductData:[
      {
        id:0,
        img: 'https://www.cketrip.com/Canny/product/a.jpg',
        name:'KLK2“蓝豹”高速电梯'
      }, {
        id: 1,
        img: 'https://www.cketrip.com/Canny/product/b.png',
        name:'观光电梯'
      }, {
        id: 2,
        img: 'https://www.cketrip.com/Canny/product/c.png',
        name:'医疗电梯'
      }, {
        id: 3,
        img: 'https://www.cketrip.com/Canny/product/d.jpg',
        name:'家用电梯'
      }, {
        id: 4,
        img: 'https://www.cketrip.com/Canny/product/e.jpg',
        name:'KLKS“新凌燕”乘客电梯'
      }
    ]
  },
  onLoad (options) {
    let that = this,
      ProductData = that.data.ProductData;
    that.setData({
      SystemInfo: App.globalData.SystemInfo
    })
    that.showLoading(that, ProductData);
    
  },
  showLoading(that, ProductData){
    that.setData({
      Loading: true,
      Product:[]
    })
    setTimeout(()=>{
      that.setData({
        Loading:false,
        Product: ProductData
      })
    },1500)
  },
  handleTab(e) {//导航点击切换
  let that = this,
    ProductData = that.data.ProductData;
    that.setData({
      ActiveId: e.currentTarget.dataset.id
    })
    that.showLoading(that, ProductData);
  },
  switchTab(e) {//导航滑动切换
  let that = this,
    ProductData = that.data.ProductData;
    that.setData({
      ActiveId: e.detail.current
    })
    that.showLoading(that, ProductData);
  },
  handleViewProductDetail(e){
    wx.navigateTo({
      url: `productShow/productShow?id=${e.currentTarget.dataset.id}`,
    })
  }
})