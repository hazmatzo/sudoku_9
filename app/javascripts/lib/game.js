var Game = {
  start: function(gameData){
    gameData = gameData || this.data();
    var board = new Sudoku.View.Board(gameData);
    board.render();
  },

  data: function(){
    var modelHashes = _.map(_.range(81), function(num){
      var cellData = new CellData(num);
      return cellData.attributes();
    });

    var collection = new Sudoku.Collection.Cells(modelHashes);

    return {collection: collection, el: $('.board')};
  },

  generate: function(){
    alert("Hello");
  }
};

