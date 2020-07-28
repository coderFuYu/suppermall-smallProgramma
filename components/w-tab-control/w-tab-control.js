// my-cpn/cpn1/tab-contral.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles: {
      type: Array,
      value: ['a','b']
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemClick(event) {
      let index=event.currentTarget.dataset.index;
      this.setData({
        currentIndex:index
			})
			
			const data ={index:this.data.currentIndex};
			this.triggerEvent("tabclick",data,{})      
    }
  }
})