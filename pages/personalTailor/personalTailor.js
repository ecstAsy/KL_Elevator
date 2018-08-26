import publicFun from '../../utils/publicFun.js';
const App = getApp();
Page({
  data: {
    SystemInfo:null,
    Loading:false,
    Class: 'form',
    Form:[
      {
        name: '姓名',
        info:'Name'
      }, {
        name: '联系方式',
        info: 'Phone'
      }, {
        name: '电梯类别',
        info: 'ElevatorType'
      }, {
        name: '轿厢尺寸',
        info: 'SedanSize'
      }, {
        name: '开门尺寸',
        info: 'OpenSize'
      }, {
        name: '出图数量',
        info: 'Num'
      }
    ],
    ElevatorTypes:[
      '商户住宅', '商户客梯', '别墅梯', '货梯', '观光梯', '扶梯'
    ],
    ElevatorTypeIndex: '',
    pickerViewShow:false,
    AnimationData :''
  },
  onLoad (options) {
    let that = this;
    that.setData({
      SystemInfo: App.globalData.SystemInfo
    })
  },
  formSubmit(e){
    let that = this,
        ElevatorTypes = that.data.ElevatorTypes, 
        form = e.detail.value,
        errorMsg = '',
        Phreg = /^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/,
        ElevatorTypeIndex = that.data.ElevatorTypeIndex;
    if(!form.Name){
      errorMsg = '请输入您的姓名！'
    }else if(!form.Phone){
      errorMsg = '请输入您联系方式！'
    } else if (!ElevatorTypeIndex) {
      errorMsg = '请选择电梯类型！'
    }else if (!form.SedanSize){
      errorMsg = '请输入轿厢尺寸！'
    } else if (!form.OpenSize){
      errorMsg = '请输入开门尺寸！'
    } else if (!form.Num) {
      errorMsg = '请输入出图数量！'
    } else if (form.phone && !Phreg.test(e.detail.value)){
      errorMsg = '请输入正确的号码！'
    } 
    if (errorMsg){
      publicFun._showToast(errorMsg);
      return false
    }
    that.setData({
      Loading:true
    })
    setTimeout(()=>{
      that.setData({
        Loading: false
      })
      publicFun._showToast('哎呀走丢了！');
    },2000)
  },
  bindElevatorTypeChange(){
    let that = this;
    that.Picker(that,'open')
  },
  bindChange(e){
    this.setData({
      ElevatorTypeIndex: e.detail.value[0]
    })
  },
  Picker(that, currentStatu) {/*动画*/
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    });
    this.animation = animation;
    animation.opacity(0).rotateX(-100).step();
    that.setData({
      AnimationData: animation.export()
    })
    setTimeout(function () {
      animation.opacity(1).rotateX(0).step();
      that.setData({
        AnimationData: animation
      })
      if (currentStatu == "close") {//关闭 
        that.setData({
          pickerViewShow: false
        });
      }
    }.bind(this), 200)
    if (currentStatu == "open") {//打开
      that.setData({
        pickerViewShow: true
      });
    }
  },
  bindCancel(){
    let that = this;
    that.Picker(that, 'close')
  },
  bindConfim(){
    let that = this,
        ElevatorTypeIndex = that.data.ElevatorTypeIndex;
    that.setData({
      ElevatorTypeIndex: ElevatorTypeIndex || '0'
    })
    that.Picker(that, 'close')
  },
  move(){}
})