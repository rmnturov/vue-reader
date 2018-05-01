import Vue from "vue";
var moment = require("moment");

Vue.filter("capitalize", val => val.toUpperCase());

Vue.filter("humanDate", function(val) {
  if (val) {
    var tempDate = new Date(val);
    moment.locale("ru");
    return moment(val).format("D MMMM, h:mm");
  }
});
