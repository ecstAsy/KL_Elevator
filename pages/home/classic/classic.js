Page({
  data: {
    classicStr:'',
    Detail:[
      { id: 1, title: '工程名称',detail:''},
      { id: 2, title: '项目背景', detail: '' },
      { id: 3, title: '亮点', detail: '' },
      { id: 4, title: '产品', detail: '' }
    ]
  },
  onLoad: function (options) {
    let that = this,
      Detail = that.data.Detail,
      classicStr = JSON.parse(options.detail);
    Detail.map(list=>{
      if (list.title === '工程名称'){
        list.detail = classicStr.name || ''
      } else if (list.title === '项目背景') {
        list.detail = classicStr.backdrop || '';
      } else if (list.title === '亮点') {
        list.detail = classicStr.light || '';
      } else {
        list.detail = classicStr.product || '';
      }
    })
    that.setData({
      classicStr: classicStr,
      Detail: Detail
    })
  },
})