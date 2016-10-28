module.exports = Backbone.View.extend({
  template: _.template("<div><% _.each(browsers, function(browser) { %> <div><%= browser%></div><% }); %> </div>"),
  initialize: function () {
    this.getBrowsers();
  },
  render: function () {
    this.$el.html(this.template({browsers: this.browsers}));
  },
  getBrowsers: function () {
    $.ajax({
      url: "service/browsers"
    }).done(_.bind(this.renderBrowsers, this));
  },
  renderBrowsers: function (browsers) {
    this.browsers = browsers;
    this.render();
  } 
});