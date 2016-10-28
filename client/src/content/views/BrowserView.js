var VersionsView = require("./VersionsView");

module.exports = Backbone.View.extend({
  template: _.template("<div><% _.each(browsers, function(browser) { %> <span class='browser'><%= browser%></span><% }); %> </div>"),
  initialize: function () {
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
    var value = $(evt.target).text();
    this.versionsView = new VersionsView({
      el: $(".versions"),
      browser: value
    });

    this.versionsView.render();
  }
});