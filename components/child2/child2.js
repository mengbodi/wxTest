Component({
  properties: {
    id: { // 属性名
      type: String, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: 'child2'
    }
  },

  data: {}, // 私有数据，可用于模版渲染

  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  attached: function () { },

  detached: function () { },

  methods: {
    onTTT: function () {
      console.log('child2 --- tttt')
    }
  }
});