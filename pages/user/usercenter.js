let api = require("../../utils/api.js");

Page({
  /**
   * 页面的初始数据
   */
  data: {
    hidden: false,
    menu: [],
    userinfo:{
      avatarUrl: "../../images/avatar.png",
      nickName: ""
    } 
  },

  fetchUserInfo:function() {
    var app = getApp();
    var userInfo = app.globalData.userInfo;
    console.log(userInfo);
    return userInfo;
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var userinfo = that.fetchUserInfo();
    that.setData({
      hidden: true,
      userinfo: userinfo,
      menu:[
        {title: "发布记录"},
        {title: "评论记录"}
      ]
    })
  },
})