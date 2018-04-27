import Vue from 'vue';

Vue.filter('capitalize', val => val.toUpperCase());

Vue.filter('humanDate', function (val) {
  var tempDate = new Date(val);
 
  var options = {
    // day: 'numeric',
    // month: 'short'
    // timeZone: 'Asia/Novosibirsk'
  }

  return tempDate.toLocaleString('ru-RU', options);
});