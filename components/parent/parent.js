Component({
  properties: {
    id: {
      type: 'String',
      value: ''
    }
  },
  observers: {
  },
  data: {
  },
  attached: function () {
  },
  methods: {
    onTap() {
      this.triggerEvent('ttt')
    }
  }

})