var BoardGenerator = function(opts) {
  this.collection = opts.collection;

};

_.extend(BoardGenerator.prototype, {
  isValid: function(){
    return true;
  },

  handleInvalidBoard: function() {
    // return if board isValid
    if(this.isValid()){return;}
    var collectionManager = new CollectionManager(this.collection);
    collectionManager.clearRow(this.lastFilledRow());
    // send message to clearRow to collectionManager

  },

  autoFillRow: function(){
    // this.fillEmptyRow()//delegate to collection manager
    // handleInvalidBoard()
  },

  generate: function(){
    // while board.isNotFilled()
      // this.autoFillRow();
      // add to turn count
  }
});

// CIWK If we comment the BoardGenerator out, the generateButton spec
// tests don't work.
// Is that the way it should be?

// Private method:
//  lastFilledRow
//  Need this to determine what the next row is and what the
//  previous row was.
