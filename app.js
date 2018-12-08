new Vue({
  el: '#vue-app',
  data:{
    name: 'İsmayıl'
  },
  methods: {
    salute: function(time){

      return 'Good ' + time + ' ' + this.name;
    }
  }


});
