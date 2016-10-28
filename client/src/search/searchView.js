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
  },
  onClear: function () {
    console.log("CLEAR clicked");
  }
});