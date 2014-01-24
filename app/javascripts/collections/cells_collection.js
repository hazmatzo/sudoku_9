Sudoku.Collection.Cells = Backbone.Collection.extend({
  row: function(num) {
    var cellRow = this.where({row: num});
    return (new Backbone.Collection(cellRow));
  },

  rows: function(){
    var cellRows = _.map(_.range(9), function(num){ //TODO do we want to standardize the ranges to refer to boardSize?
      return this.row((num+1));
    }, this);
    return cellRows;
  },

  column: function(num) {
    var cellColumn = this.where({column: num});
    return (new Backbone.Collection(cellColumn));
  },

  columns: function(){
    var cellColumns = _.map(_.range(9), function(num){ //TODO do we want to standardize the ranges to refer to boardSize?
      return this.column((num+1));
    }, this);
    return cellColumns;
  },

  group: function(num) {
    var cellGroup = this.where({group: num});
    return (new Backbone.Collection(cellGroup));
  },

  groups: function(){
    var cellGroups = _.map(_.range(9), function(num){ //TODO do we want to standardize the ranges to refer to boardSize?
      return this.group((num+1));
    }, this);
    return cellGroups;
  },
});