Sudoku.View.ValueGenerator = Backbone.View.extend({
  events: {
    "click #generateButton"   : "generateRowValues"
  },

  template: function(){
    return $('#generate-button').text();
  },

  className: 'button', //CIWK, why isn't this placing a button div on page

  render: function(){
    this.$el.append(Mustache.render(this.template()));
    return this;
  },

});