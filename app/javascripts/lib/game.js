var Game = {
  start: function(gameData){
    gameData = gameData || this.data(); // JS ||=
    var board = new Sudoku.View.Board(gameData);
    board.render(); //CIWK before when we had window.board, we could grab
    // this by calling board in the console...
  },

  data: function(){
    var modelHashes = _.map(_.range(81), function(num){
      var cellData = new CellData(num);
      return cellData.attributes();
    });

    var collection = new Sudoku.Collection.Cells(modelHashes);

    return {collection: collection, el: $('.board')};
  }
};

// closures are the only way to get privacy
// more dynamic in dangerous ways
// don't try and make functions private


