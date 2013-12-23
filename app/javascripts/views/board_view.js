Sudoku.View.Board = Backbone.View.extend({
  render: function(){
    this.$el.append(this.collection.render().el ); //TODO determine what to append
    // cells? collection of cells?
  },
});

Sudoku.View.Cells = Backbone.View.extend({});

Sudoku.cellsView = new Sudoku.View.Cells({
  collection: Sudoku.Collection.Cells
});

$(document).ready(function(){
  new Sudoku.View.Board({el: $('.board')[0]}).render();
});