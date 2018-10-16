const App = getApp();
import PublicFun from '../../utils/publicFun.js';
import Http from '../../utils/Http.js';
Page({
  data: {
    SystemInfo:null,
    Tab:['关于我们','新闻中心','产品解决方案','经典工程'],
    CityArray: ['苏州', '杭州', '上海', '重庆','成都'],
    CityIndex:0,
    ActiveId:0,
    searchValue:'',
    companyAbout:'',
    companyNews:'',
    Solution:'',
    Classic:''
  },
  onLoad(options){
    let that = this;
    that._getSystemInfo();
    that.companyInfo(that);
    that.newsInfo(that);
    that.solutionInfo(that);
    that.classicInfo(that);
  },
  handleTab(e) {//导航点击切换
    this.setData({
      ActiveId: e.currentTarget.dataset.id
    })
    PublicFun.SetTitle(`${this.data.Tab[e.currentTarget.dataset.id]}`)
  },
  switchTab(e){//导航滑动切换
    this.setData({
      ActiveId: e.detail.current
    })
    PublicFun.SetTitle(`${this.data.Tab[e.detail.current]}`)
  },
  handleViewNewsDetail(e){//跳转新闻详情页
  let that = this,
    News = that.data.companyNews,
      _id = e.currentTarget.dataset.id;
  let newsList = News.filter(list => list.id === _id);
  let newsListStr = JSON.stringify(newsList[0]);
    wx.navigateTo({
      url: `newsDetail/newsDetail?detail=${newsListStr}`,
    })
  },
  viewClassic(e){//跳转经典工程页
    let that = this,
      Classic = that.data.Classic,
      _id = e.currentTarget.dataset.id;
    let classic = Classic.filter(list=> list.id === _id )
    let classicStr = JSON.stringify(classic[0]);
    wx.navigateTo({
      url: `classic/classic?detail=${classicStr}`,
    })
  },
  _getSystemInfo() {
    let that = this,
      SystemInfo = App.globalData.SystemInfo;
    SystemInfo.Width = wx.getSystemInfoSync().windowWidth;
    SystemInfo.Height = wx.getSystemInfoSync().windowHeight;
    SystemInfo.screenHeight = wx.getSystemInfoSync().screenHeight;
    App.globalData.SystemInfo = SystemInfo
    that.setData({
      SystemInfo: SystemInfo
    })
  },
  clearInput(){
    this.setData({
      searchValue:''
    })
  },
  searchInput(e){
    this.setData({
      searchValue: e.detail.value
    })
  },
  bindPickerChange(e) {
    this.setData({
      CityIndex: e.detail.value
    })
  },
  companyInfo(that){
    let info_url = 'about',
        info_params;
    Http.Get(info_url, info_params)
      .then(res=>{
        if (res.statusCode === 200){
          that.setData({
            companyAbout: res.data[0]
          })
        }else{
          PublicFun._showToast('网络错误！');
        }
      })
      .catch(err=>{
        PublicFun._showToast('网络错误！');
      })
  },
  newsInfo(that){
    let news_url = 'news',
        news_params;
    Http.Get(news_url,news_params)
      .then(res=>{
        if (res.statusCode === 200){
          that.setData({
            companyNews: res.data
          })
        }else{
          PublicFun._showToast('网络错误！');
        }
        
      })
      .catch(err=>{
        PublicFun._showToast('网络错误！');
      })
  },
  solutionInfo(that) {
    let news_url = 'solution',
      news_params;
    Http.Get(news_url, news_params)
      .then(res => {
        if (res.statusCode === 200) {
          that.setData({
            Solution: res.data
          })
        } else {
          PublicFun._showToast('网络错误！');
        }

      })
      .catch(err => {
        PublicFun._showToast('网络错误！');
      })
  },
  classicInfo(that) {
    let news_url = 'classic',
      news_params;
    Http.Get(news_url, news_params)
      .then(res => {
        if (res.statusCode === 200) {
          that.setData({
            Classic: res.data
          })
        } else {
          PublicFun._showToast('网络错误！');
        }

      })
      .catch(err => {
        PublicFun._showToast('网络错误！');
      })
  }
})