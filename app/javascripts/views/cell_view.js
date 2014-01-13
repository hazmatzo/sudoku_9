Sudoku.View.Cell = Backbone.View.extend({
  template: function(){
    return $('#template').text();
  },

  className: 'cell unit size1of9 bordered',

  render: function(){
    this.$el.html(Mustache.render(this.template(), this.model.toJSON()));
    return this;
  }
});