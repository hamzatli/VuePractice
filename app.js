new Vue ({
  el: '#vue-app',
  data: {
    number: '25',
    x:0,
    y:0
  },
  methods: {
    Add:function() {
      this.number++;
    },

    UpdateXY:function(event){

      this.x = event.offsetX;
      this.y = event.offsetY;

    }
  }
});
