Sudoku.Collection.Cells = Backbone.Collection.extend({

  row: function(num) {
    var cellRow = this.where({row: num});
    return (new Backbone.Collection(cellRow));
  },

  rows: function(){
    var cellRows = _.map(_.range(9), function(num){
      return this.row((num+1));
    }, this);
    return cellRows;
  }
});