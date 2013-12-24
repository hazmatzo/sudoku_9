// Sudoku.View.Cells = Backbone.View.extend({

// });

// Sudoku.cellsView = new Sudoku.View.Cells({
//   collection: Sudoku.cellsCollection
// });

Sudoku.View.Board = Backbone.View.extend({
  render: function(){
    Sudoku.cellsView.render();
    this.$el.append("Sudoku.cellsView.el");
  },
});
/* What to append: I believe we append the view of the collection. */
/* Do we need to have BoardView render an instances of cellsView or should
cellsView just be the same as boardView? */

$(document).ready(function(){
  var collection_to_be_made = new Backbone.Collection(); // 81 empty hashes
  new Sudoku.View.Board({el: $('.board'), collection: collection_to_be_made}).render();
});
/* This works and without it the above statement doesn't display. */

/* To do: need to add something that responds to "value". */
/* To do: Would like to add the addOne function somewhere with accompanying
forEach code, like so:
  render: function(){
    this.collection.forEach(addOne);
  }; */
/* To investigate: do we automatically have all the views per models that
we need, or do we need to create them with a forEach loop, like in
this.collection.forEach(function(todoItem)){
  var todoView = new TodoView({model: todoItem});
  this.$el.append(todoView.render().el);
  )};
} */
/* To do: Where does the addOne code belong? */
/* To do: Mustache error shows up in console:
Refused to execute script from
'http://github.com/janl/mustache.js/raw/master/mustache.js'
because its MIME type ('text/plain') is not executable, and
strict MIME type checking is enabled. */
/* Add 81 instances of models in the collection. */