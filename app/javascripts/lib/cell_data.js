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
    return (Math.floor(this.id / window.boardSize) + 1);
  },

  calculateColumn: function(){
    return (Math.floor(this.id % window.boardSize) + 1);
  },

  calculateGroup: function(){
    var groupDimension = Math.floor(Math.sqrt(window.boardSize));
    var groupRow = (this.row - 1) / groupDimension;
    var groupColumn = (this.column - 1) / groupDimension;
    return ((groupRow * groupDimension) + groupColumn) + 1;
  },

  attributes: function(){
    return {value: this.value, id: this.id, row: this.row, column: this.column, group: this.group};
  }

});

  //   var preGroupDimension = Math.sqrt(window.boardSize);
  //   console.log("Cell ID", this.id);
  //   var groupDimension = Math.floor(preGroupDimension);
  //   console.log("groupDimension", groupDimension);
  //   var groupRow = (this.row - 1) / groupDimension;
  //   console.log("Group Row", groupRow);
  //   var groupColumn = (this.column - 1) / groupDimension;
  //   console.log("Group Column", groupColumn);
  //   console.log("Group", (((groupRow * groupDimension) + groupColumn) + 1));
  //   return (((groupRow * groupDimension) + groupColumn) + 1);
  // },