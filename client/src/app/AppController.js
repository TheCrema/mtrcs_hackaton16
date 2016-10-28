var ContentView = require("../content/ContentView");
var SearchView = require("../search/SearchView");

module.exports = Backbone.View.extend({
  el: ".app",
  template: _.template("<div class='navigation'></div><div class='content'></div>"),
  initialize: function () {
    this.render();
  },
  render: function () {
    this.$el.html(this.template());
    this.subRender();
  },
  subRender: function () {
    this.searchView = new SearchView({
      el: $("navigation")
    });
    this.contentView = new ContentView({
      el: $(".content")
    });
    this.searchView.render();
    this.contentView.render();
  }
});