var BoardGenerator = function(opts) {
  this.collection = opts.collection;
};

_.extend(BoardGenerator.prototype, {
  isValid: function(){
    var collectionManager = new CollectionManager(this.collection);
    return collectionManager.isValid();
    // See note below.
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
    var collectionManager = new CollectionManager(this.collection);
    collectionManager.clearValues(this.lastFilledRow());
  },

  firstEmptyRow: function(){
    return _.find(this.collection.rows(), function(row) {
      return (row.at(0).get("value") === null);
    });
  },

  fillEmptyRow: function(){
    var collectionManager = new CollectionManager(this.collection);
    collectionManager.fillValues(this.firstEmptyRow());
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

// Note:
    // def valid?
    //   (1..SIZE).all? do |num|
    //     [:row, :column, :group].all? do |collection_type|
    //       collection_call(get_collection(collection_type, num)).valid?
    //     end
    //   end
    // end
