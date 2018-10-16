//const API_URL = "http://192.168.1.111:3001/";
const API_URL = "http://localhost:3001/"
function Get(url, params) {
  let promise = new Promise(function (resolve, reject) {
    wx.request({
      url:  API_URL+url,
      data: params,
      method: 'GET',
      header: { 'Content-Type': 'application/json'},
      success: res => {
          resolve(res);  
      },
      fail: res => {
        reject(res) 
      }
    })
  });
  return promise
}
function Post(url, params){
  let promise = new Promise(function (resolve, reject) {
    wx.request({
      url: API_URL +url,
      data: params,
      method: 'POST',
      header: { 'content-Type':'application/x-www-form-urlencoded' },
      success: res => {
          resolve(res.data);
      },
      fail: res => {
        reject(res.data)
      }
    })
  });
  return promise
}
function JsonPost(url, params){
  let promise = new Promise(function (resolve, reject) {
    wx.request({
      url: API_URL +url,
      data: JSON.stringify(params),
      method: 'POST',
      header: { 'Content-Type': 'application/json'},
      success: res => {
          resolve(res.data);
      },
      fail: res => {
        reject(res.data);
      }
    })
  });
  return promise
}
function _getLocation() {
  let promise = new Promise(function (resolve, reject) {
    wx.getLocation({
      success: res => {
        resolve(res)
      },
      fail: res => {
        reject(res)
      }
    })
  });
  return promise
}
module.exports = {
  Get,
  Post,
 JsonPost,
  _getLocation
}