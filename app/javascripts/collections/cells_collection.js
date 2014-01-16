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
  },

  generateRowValues: function(){
    var row = this.row(1); //go through each row
    //check if board is valid

    var validValues = _.map(_.range(1,10), function(num){
      return num;
    });
    var shuffledValues = _.shuffle(validValues);


    row.each(function(cell){
      var value = shuffledValues.pop();
      cell.set("value", value); // number generator in the place of the 3
    });
    console.log(row.map(function(cell){
        return cell.attributes.value;
      })
    );
  }
});