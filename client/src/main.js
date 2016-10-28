global._ = require("underscore");
global.$ = require("jquery");
global.Backbone = require("backbone");

var AppView = require("./app/AppController");

$(function () {
  new AppView();
});