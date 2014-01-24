var BoardGenerator = function(opts) {
  this.collection = opts.collection;
};

_.extend(BoardGenerator.prototype, {

  collectionCall: function(unit){
    return new CollectionManager(unit);
  },

  isValid: function(){
    var collectionRange = (Game.boardSize + 1);
    return _.every(_.range(collectionRange), function(num){
      var rowCall = this.collectionCall(this.collection.row(num));
      var columnCall = this.collectionCall(this.collection.column(num));
      var groupCall = this.collectionCall(this.collection.group(num));
      return rowCall.isValid() && columnCall.isValid() && groupCall.isValid();
    }, this);
  },

  isFilledIn: function(){
    return this.collection.every(function(cell){
      return (cell.get("value") !== null);
    });
  },

  lastFilledRow: function(){
    var firstEmptyRowNum = this.firstEmptyRow().at(0).get("row");
    return this.collection.row(firstEmptyRowNum - 1);
    // TODO: guard clause for if it's row 1 (maybe)
  },

  handleInvalidBoard: function(){
    if(this.isValid()){return;}
    var collectionManager = this.collectionCall(this.lastFilledRow());
    collectionManager.clearValues();
  },

  firstEmptyRow: function(){
    return _.find(this.collection.rows(), function(row) {
      return (row.at(0).get("value") === null);
    });
  },

  fillEmptyRow: function(){
    var collectionManager = this.collectionCall(this.firstEmptyRow());
    collectionManager.fillValues();
  },

  autoFillRow: function(){
    this.fillEmptyRow();
    this.handleInvalidBoard();
  },

  generate: function(){
    while (!(this.isFilledIn())) {
      this.autoFillRow();
      // add to turn count
    }
    // do we call the render function here?
  }
});

