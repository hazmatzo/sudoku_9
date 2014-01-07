$(document).ready(function(){
  var board = new Sudoku.View.Board(gameData());
  board.render();
});