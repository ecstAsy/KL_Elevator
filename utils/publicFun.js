const SetTitle= data =>{
  wx.setNavigationBarTitle({
    title: data
  })
}
const _showToast = title => {
  wx.showToast({
    icon: "none",
    title: title
  })
}
module.exports = {
  SetTitle,
  _showToast
}