var Game = {
  start: function(gameData){
    gameData = gameData || Sudoku.gameData(); // JS ||=
    window.board = new Sudoku.View.Board(gameData);
    window.board.render();
  },
};

Sudoku.gameData = function(){
  var modelHashes = _.map(_.range(81), function(num){
    var cellData = new CellData(num);
    return cellData.attributes();
  });

  var collection = new Sudoku.Collection.Cells(modelHashes);

  return {collection: collection, el: $('.board')};
};

