Sudoku.View.Board = Backbone.View.extend({
  events: {
    "click #generateButton"   : "generateBoard"
  },

  generateBoard: function(){
    alert("ROAARRR");
  },

  render: function(){
    var cellCollection = this.collection;
    var rowsArray = cellCollection.rows();
    //rowsArray is an array of row collections
    _.each(rowsArray, function(cellRow){
      //cellRow is an instance of a collection

      var row = new Sudoku.View.Row({collection: cellRow});
      row.render();
      this.$el.append(row.el);
    }, this);

    this.$el.append($('#generateButton').text()); //TODO move generate button to diff view?
  },
});
