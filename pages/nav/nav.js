// pages/nav/nav.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    style:["now","",""],
    hidden:[false,true,true]

  },
tab(evt){
  let index = evt.target.dataset.index;
  let style = this.data.style;
  let hidden = this.data.hidden;
  // style.forEach((item,key)=>{
  //   if(index == key){
  //     style[key] = "now"
  //     hidden[key] = false
  //   }else{
  //     style[key] = ""
  //     hidden[key] = true
  //   }
  // })
  style.map((item,key)=>{
    if(key==index){
      style[key] = "now";
      hidden[key] = false;
    }else{
      style[key] = "";
      hidden[key] = true;
   }
  })
  this.setData({
    style: style,
    hidden: hidden
  })
},


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})