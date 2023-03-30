// pages/swipertab/swipertab.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    styles:[
    {class: 'now', text: '商品详情'},
    {class: '', text: '规格参数'},
    {class: '', text: '售后保障'}
    ],
    index: 0
  },

  fn(index){
    let styles = this.data.styles;
    styles.map((item,key)=>{
      if(key==index){
        return item['class']='now'
      }else{
        return item['class']=''
      }
    })
    this.setData({
      index,
      styles
    })
  },

  tab(evt){
    let index = evt.target.dataset.index;
    // let styles = evt.data.styles
    // let ret= obj.fn()
    this.fn(index)

  },
  changetab(evt){
    let index = evt.detail.current
    // let styles = evt this.data.styles
    this.fn(index);
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