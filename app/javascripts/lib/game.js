var board;
var Game = {
  start: function(gameData){
    gameData = gameData || this.data(); //CIWK is this the dependency injector?
    // injector (sometimes referred to as a provider or container) that creates
    // instances of classes that implement a given dependency interface on request.
    board = new Sudoku.View.Board(gameData);
    board.render();
    generateButton = new Sudoku.View.GenerateButton(gameData);
    generateButton.render();
  },

//CIWK
  // rerender: function(){
  //   var gameEl = this.data().parent;
  //   console.log(gameEl);
  //   gameEl.empty();
  //   board.render();
  //   generateButton.render();
  // },

  data: function(){
    var modelHashes = _.map(_.range(81), function(num){
      var cellData = new CellData(num);
      return cellData.attributes();
    });

    var collection = new Sudoku.Collection.Cells(modelHashes);

    return {collection: collection, parent: $('.game')};
  },

  boardSize: 9,
  turnCount: 0,
};

