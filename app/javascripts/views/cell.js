Sudoku.View.Cell = Backbone.View.extend({
  template: function(){
    return $('#cell-template').text();
  },

  className: 'cell unit size1of9',

  render: function(){
    this.$el.html(Mustache.render(this.template(), this.model.toJSON()));
    return this;
  }
});