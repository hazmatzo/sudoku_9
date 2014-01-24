var CellData = function(n){
  this.id = n;
  this.initialize();
};

_.extend(CellData.prototype, {
  initialize: function(){
    this.value = null;
    this.row = this.calculateRow();
    this.column = this.calculateColumn();
    this.group = this.calculateGroup();
  },

  calculateRow: function(){
    return (Math.floor(this.id / (Game.boardSize)) + 1);
  },

  calculateColumn: function(){
    return (Math.floor(this.id % Game.boardSize) + 1);
  },

  calculateGroup: function(){
    var groupDimension = Math.floor(Math.sqrt(Game.boardSize));
    var groupRow = Math.floor((this.row - 1) / groupDimension);
    var groupColumn = Math.floor((this.column - 1) / groupDimension);
    return ((groupRow * groupDimension) + groupColumn) + 1;
  },

  attributes: function(){
    return {value: this.value, id: this.id, row: this.row, column: this.column, group: this.group};
  }
});