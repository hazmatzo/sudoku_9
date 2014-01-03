Sudoku.View.Board = Backbone.View.extend({
  render: function(){
    _.each(this.collection, function(){
      var cell = new Sudoku.View.Cell();
      $('.board').append(cell.render().el);
      /* this.$el.append(cell.render().el); */
    });
  }
});

$(document).ready(function(){
  var valueHashes = _.map(_.range(81), function(num){
    return {value: null};
  });
  var collection = new Backbone.Collection(valueHashes);

  new Sudoku.View.Board({
    collection: collection,
    el: $('.board')
  }).render();
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
