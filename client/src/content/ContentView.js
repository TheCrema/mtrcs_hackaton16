var BrowserView = require("./views/BrowserView");

module.exports = Backbone.View.extend({
  el: ".content",
  template: _.template("<div class='browsers'></div>"),
  initialize: function () {
    this.render();
  },
  render: function () {
    this.$el.html(this.template());
    this.subRender();
  },
  subRender: function () {
    this.browserView = new BrowserView({
      el: $(".browsers")
    });
    this.browserView.render();
  }
});