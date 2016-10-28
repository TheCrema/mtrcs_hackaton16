module.exports = Backbone.View.extend({
  template: _.template("<ul><% _.each(properties, function(property) { %> <li class='property'><%= property.propertyName%></li><% }); %></ul>"),
  initialize: function (options) {
    this.browser = options.browser;
    this.version = options.version;
    this.getVersions();
  },
  render: function () {
    this.$el.html(this.template({properties: this.properties}));
  },
  getVersions: function () {
    $.ajax({
      url: "service/search?browser=" + this.browser + "&version=" + this.version
    }).done(_.bind(this.renderVersions, this));
  },
  renderVersions: function (properties) {
    this.properties = properties.content;
    this.render();
  }
});