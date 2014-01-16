window.boardSize = 9;
var board;
var Game = {
  start: function(gameData){
    gameData = gameData || this.data();
    board = new Sudoku.View.Board(gameData);
    board.render();
    valueGenerator = new Sudoku.View.ValueGenerator(gameData);
    valueGenerator.render();
  },
  // CIWK - should we be using the game data, doesn't work without it.

  data: function(){
    var modelHashes = _.map(_.range(81), function(num){
      var cellData = new CellData(num);
      return cellData.attributes();
    });

    var collection = new Sudoku.Collection.Cells(modelHashes);

    return {collection: collection, el: $('.game')};
  },
};

