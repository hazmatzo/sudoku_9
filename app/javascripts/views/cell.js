Sudoku.View.Cell = Sudoku.View.Master({
  // template: function(){
  //   return $('#cell-template').text();
  // },

  className: 'cell unit size1of9',

  render: function(){
    this.$el.html(Mustache.render(this.template(), this.model.toJSON()));
    return this;
  }
});

// Mustache.render(this.template())