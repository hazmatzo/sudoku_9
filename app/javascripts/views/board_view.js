Sudoku.View.Board = Backbone.View.extend({
  render: function(){
    this.collection.each( function(item){
      var cell = new Sudoku.View.Cell({model: item}); //how do we get the model in here?!
      $('.board').append(cell.render().el);
    });
  }
});

$(document).ready(function(){

  var modelHashes = _.map(_.range(81), function(num){
    return {value: null};
  }); // CIWK is this where we insert the models?

  var collection = new Backbone.Collection(modelHashes);

  window.board = new Sudoku.View.Board({
    collection: collection,
    el: $('.board')
  });

  window.board.render();
});

/* To do: create a view for each item in the collection
this.collection.forEach(function(todoItem)){
  var todoView = new TodoView({model: todoItem});
  this.$el.append(todoView.render().el);
  )};
} */

/* To do: Where does the addOne code belong? */
/* To do: Add 81 instances of models in the collection. */
/* Kane's To do:
  * Don't create a new empty anything -- no models without logic.
  * Don't specify the model when defining the collection. CIWK: don't create a model at all?
  * Views should get passed into the model - CIWK: models and collections should not reference or know about views?
  * End result: An array with 81 empty hashes
  */
// collection.pluck('')
