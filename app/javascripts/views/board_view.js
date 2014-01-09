Sudoku.View.Board = Backbone.View.extend({
  render: function(){
    var rowsArray = this.collection.rows();
    //rowsArray is an array of row collections
    _.each(rowsArray, function(cellRow){
      //cellRow is an instance of a collection

      var row = new Sudoku.View.Row({collection: cellRow});
      this.$el.append(row.render().el);
    }, this);

    this.$el.append($('#generateButton').text());
  },
});
