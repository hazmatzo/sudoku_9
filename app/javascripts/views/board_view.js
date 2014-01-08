Sudoku.View.Board = Backbone.View.extend({
  render: function(){
    this.collection.each(this.renderCell, this);
    //this.collection.rows();
    this.$el.append($('#generateButton').text());
  },

  renderCell: function(item){
    var cell = new Sudoku.View.Cell({model: item});
    this.$el.append(cell.render().el);
  }
});

// this.collection.rows() // are we calling .rows() on the collection of cells?
//  array of 9 collections

// this.collection.row(3) -- helper method
//  would return a collection (of cells)
//  this.collection.each(this.renderCell, this);
//  helper method: 'where we're using where' filter