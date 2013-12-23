Sudoku.View.Cells = Backbone.View.extend({});

Sudoku.cellsView = new Sudoku.View.Cells({
  collection: Sudoku.Collection.Cells
});

Sudoku.View.Board = Backbone.View.extend({
  render: function(){
    this.$el.append("Sudoku.cellsView.render().el");
  },
});
/* What to append: I believe we append the view of the collection. */
/* Do we need to have BoardView render an instances of cellsView or should
cellsView just be the same as boardView? */

$(document).ready(function(){
  new Sudoku.View.Board({el: $('.board')}).render();
});
/* This works and without it the above statement doesn't display. */

/* To do: need to add something that responds to "value". */
/* To do: Would like to add the addOne function somewhere with accompanying
forEach code, like so:
  render: function(){
    this.collection.forEach(addOne);
  };
*/
/* To do: Where does the addOne code belong? */