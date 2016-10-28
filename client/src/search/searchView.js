var BrowserView = require("../content/views/BrowserView");

module.exports = Backbone.View.extend({
  el: ".content",
  template: _.template("<div>SEARCH: <input type='text'></input><span class='clear'>X</span></div>"),
  events: {
    "change input": "onChange",
    "click .clear": "onClear"
  },
  initialize: function () {
    this.render();
  },
  render: function () {
    this.$el.html(this.template());
    this.subRender();
  },
  subRender: function () {
        
  },
  onChange: function (evt) {
    this.searchValue = evt.target.value;
    if (this.searchValue) {
      $.ajax({
        url: "service/search?properties=" + this.searchValue
      }).done(_.bind(this.renderBrowserView, this));
    }
  },
  onClear: function () {
    this.$("input").val("");
    this.renderBrowserView();
  },
  getResult: function () {
    console.log(this.searchValue);
  },
  renderBrowserView: function (data) {
    if (data && data.content && data.content.length === 0) {
      this.browserView = new BrowserView({
        el: $(".browsers")
      })
      return;
    }

    this.browserView = new BrowserView({
      el: $(".browsers"),
      data: data && data.content
    });
  }
});