// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data:{
          name:"孙元清"
        
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("监听页面加载")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("初次渲染完成") 
    console.log(this.name)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("监听页面显示")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("监听页面卸载")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onUnload: function () {
    console.log("监听页面卸载")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
console.log("下拉")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("上拉触底事件")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("右上角分享")
  },
  methods:{
    onclick(){
      console.log("onclick")
    }
  }
})