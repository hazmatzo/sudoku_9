Sudoku.View.Board = Backbone.View.extend({

  className: 'board',

  initialize: function(options){
    this.parent = options.parent;
  },

  render: function(){ //CIWK doesn't look like there
  //is enough functionality here to warrant extending from the
  //base view. thoughts?

    var cellCollection = this.collection;
    var rowsArray = cellCollection.rows();
    //rowsArray is an array of row collections

    _.each(rowsArray, function(cellRow){
      //cellRow is an instance of a collection
      var row = new Sudoku.View.Row({collection: cellRow});
      row.render();
      $(this.parent).append(this.$el);
      this.$el.append(row.el);
    }, this);
  },
});