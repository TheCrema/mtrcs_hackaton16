global._ = require("Underscore");
global.$ = require("jQuery");
global.Backbone = require("Backbone");

var AppView = require("./app/AppController");

$(function () {
  new AppView();
});