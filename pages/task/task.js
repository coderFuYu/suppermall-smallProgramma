// pages/task/task.js
import request from "../../service/network"
Page({

  data: {
    currentIndex: 0
  },
  requestBtnClick() {
    request({
      url: 'http://httpbin.org/get',
      method: 'get'
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    });
    // wx.request({
    //   url: 'http://httpbin.org/get',
    //   method:'get',
    //   data:{
    //     a:1
    //   },
    //   success: function (res) {
    //     console.log(res);
    //   },
    // })
  },
  showToast(){
    wx.showToast({
      title: '加载中……',
      duration: 3000,
      icon: 'loading',
      // image: 'image',
      // mask: true,
      // success: (res) => {},
      // fail: (res) => {},
      // complete: (res) => {},
    })
  },
  showModal(){
    wx.showModal({
      title:'是否支持*****',
      content:'hhhhh',
      cancelColor: 'pink',
    })
  },
  showLoading(){
    wx.showLoading({
      title: 'title',
    })
  },
  hiddenLoading(){
    wx.hideLoading();
  },
  showAction(){
    wx.showActionSheet({
      itemList: ['相册','拍照'],
      success:(res)=>{
        console.log(res)
      },
      fail:(err)=>{console.log(err)}
    })
  },
  onShareAppMessage:(option)=>{
    return{
      title:'你好啊',
      path:'pages/task/task'
    }
  }
})