App({
  onLaunch: function () {
    let that = this;
    that.AppUpData();
  },
  AppUpData(){//小程序版本更新提醒
    if (wx.canIUse('getUpdateManager')){
      const updateManager = wx.getUpdateManager();
      updateManager.onCheckForUpdate(res=>{
        res.hasUpdate && updateManager.onUpdateReady(()=>{
          wx.showModal({
            title: '更新提示',
            content: '新版本已经准备好，是否重启应用？',
            success:res=>{
              res.confirm && updateManager.applyUpdate()
            }
          })
        })
        res.hasUpdate && updateManager.onUpdateFailed(() => {
          // 新的版本下载失败
          wx.showModal({
            title: '已经有新版本了哟~',
            content: '新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~',
          })
        })
      })
    }else{
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }
  },
  globalData: {
    userInfo: null,
    SystemInfo: { Width: "", Height: "", screenHeight: "" }
  }
})