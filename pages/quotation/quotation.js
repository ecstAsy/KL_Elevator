import publicFun from '../../utils/publicFun.js';
import Http from '../../utils/Http.js';
const App = getApp();
Page({
  data: {
    SystemInfo: null,
    isAgree: true,
    Loading: false,
    Class: 'form'
  },
  onLoad(options) {
    let that = this;
    that.setData({
      SystemInfo: App.globalData.SystemInfo
    })
  },
  bindAgreeChange(e) {
    this.setData({
      isAgree: !!e.detail.value.length
    });
  },
  formSubmit(e) {
    let that = this,
      form = e.detail.value,
      errorMsg = '';
    if (!form.username) {
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
    let url = 'users/login',
      params = {
        username: form.username,
        password: form.password
      }
    Http.Post(url, params).then(res => {
      console.log(res)
      let toast;
      if (res.code == 200) {
        toast = '登陆成功！'
      } else {
        toast = res.data
      }
      setTimeout(() => {
        that.setData({
          Loading: false
        });
        publicFun._showToast(toast);
      }, 1500)
    }).catch(() => {
      setTimeout(() => {
        that.setData({
          Loading: false
        });
        publicFun._showToast('网络错误！');
      }, 1500)
    })
  }
})