// src/components/paper/paper.js
Component({
  externalClasses: ['my-class'],
  /**
   * 组件的属性列表
   */
  properties: {
    circle: Boolean,
    rounded: {
      type: Boolean,
      value: true
    },
    zDepth: {
      type: Number,
      value: 0,
      observer(newVal, oldVal, changedPath){
        // console.log(newVal, oldVal, changedPath, "zDepth");
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached() {},
    moved() {},
    detached() {}
  }
})
