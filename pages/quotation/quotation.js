import publicFun from '../../utils/publicFun.js';
const App = getApp();
Page({
  data: {
    SystemInfo:null,
    isAgree:true,
    Loading:false,
    Class:'form'
  },
  onLoad (options) {
    let that = this;
    that.setData({
      SystemInfo: App.globalData.SystemInfo
    })
  },
  bindAgreeChange (e) {
    this.setData({
      isAgree: !!e.detail.value.length
    });
  },
  formSubmit(e){
    let that = this,
        form = e.detail.value,
        errorMsg = '';
    if (!form.account) {
      errorMsg = '请输入用户名！'
    } else if (!form.password) {
      errorMsg = '请输入密码！'
    }
    if (errorMsg) {
      publicFun._showToast(errorMsg);
      return false
    }
    that.setData({
      Loading: true
    })
    setTimeout(() => {
      that.setData({
        Loading: false
      })
      publicFun._showToast('哎呀走丢了！');
    }, 2000)
  }
})