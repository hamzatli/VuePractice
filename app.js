new Vue({
  el: '#vue-app',
  data:{
    name: 'İsmayıl',
    website: 'https://www.google.com',
    websiteTag: '  <a href="https://www.google.com">Google</a>'
  },
  methods: {
    salute: function(time){

      return 'Good ' + time + ' ' + this.name;
    }
  }


});
