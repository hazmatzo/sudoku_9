var BoardGenerator = function(opts) {
  this.collection = opts.collection;

};

_.extend(BoardGenerator.prototype, {
  generate: function(){
    // while board.isNotFilled()
    // board.generateRow
    // handleInvalidBoard()
    //      return if isValid()

  }
});

// CIWK If we comment the BoardGenerator out, the generateButton spec
// tests don't work.
// Is that the way it should be?