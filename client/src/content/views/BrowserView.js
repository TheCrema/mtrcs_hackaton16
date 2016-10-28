var VersionsView = require("./VersionsView");

module.exports = Backbone.View.extend({
  template: _.template("<div><% _.each(browsers, function(browser) { %> <span id='<%= browser%>' class='browser <%= browser && browser.browser || browser%>'></span><% }); %> </div><div class='versions'></div>"),
  initialize: function (options) {
    this.data = options.data;
    if (this.data) {
      this.browsers = this.data;
      this.render();
      return this;
    }
    this.getBrowsers();
  },
  events: {
    'click .browser': "onBrowserClick"
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
  },
  onBrowserClick: function (evt) {
    var value = evt.target.id
    this.versionsView = new VersionsView({
      el: $(".versions"),
      browser: value
    });

    this.versionsView.render();
  }
});