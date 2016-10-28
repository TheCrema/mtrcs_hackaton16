module.exports = Backbone.View.extend({
  el: ".content",
  template: _.template("<div class=''>Going to be our BrowserView</div>"),
  initialize: function () {
    this.render();
  },
  render: function () {
    this.$el.html(this.template());
    this.subRender();
  },
  subRender: function () {
    $.ajax({
      url: "service/browsers"
    }).done(function () {
      console.log("done");
    });
  }
});