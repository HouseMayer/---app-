// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "张三",
    age: 22,
    user: {id: 1, name: "李四", age: 20},
    lists:[
      {id: 1, name: "李四", age: 20},
      {id: 2, name: "王五", age: 99}
    ],
    array: ['1','2','3','4','5']

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

    console.log("onload:"+this.data.name);

  
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
    console.log("")
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