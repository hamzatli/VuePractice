
new Vue ({

  el:'#vue-app',
  data: {
    A: '',
    B: ''

  },

  computed: {
    Sum:function(){

      return this.A + this.B

    }
  }


});
