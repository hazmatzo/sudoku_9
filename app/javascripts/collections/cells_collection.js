Sudoku.Collection.Cells = Backbone.Collection.extend({

  row: function(num) {
    console.log("LOOK HERE: " + this);
  },

  rows: function(){
    _.map(_.range(9), function(num){
      this.row(num);
      // this function's product: [row1, row2, row3, row4, row5, row6, row7, row8, row9];
      //TODO helper method for iterating through rows
    }, this);
  }
});