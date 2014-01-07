Sudoku.View.Board = Backbone.View.extend({
  render: function(){
    this.collection.each(this.renderCell, this);
    this.$el.append($('#generateButton').text());
  },

  renderCell: function(item){
    var cell = new Sudoku.View.Cell({model: item});
    this.$el.append(cell.render().el);
  }
});

/* To do: create a view for each item in the collection
this.collection.forEach(function(todoItem)){
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
