module.exports = Backbone.View.extend({
  template: _.template("<div><% _.each(versions, function(version) { %> <span class='version'><%= version%></span><% }); %></div>"),
  initialize: function (options) {
    this.browser = options.browser;
    this.getVersions();
  },
  render: function () {
    this.$el.html(this.template({versions: this.versions}));
  },
  getVersions: function () {
    $.ajax({
      url: "service/browsers/" + this.browser
    }).done(_.bind(this.renderVersions, this));
  },
  renderVersions: function (versions) {
    this.versions = versions;
    this.render();
  }
});