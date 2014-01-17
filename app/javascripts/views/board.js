Sudoku.View.Board = Backbone.View.extend({

  className: 'board',

  initialize: function(options){
    this.collection = options.collection; //CIWK the pass in of options seems to throw off BB's
    //regular handling for collections. We had to specify the collection here for it to render.
    this.parent = options.parent;
  },

  render: function(){
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