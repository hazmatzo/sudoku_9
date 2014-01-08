describe("Game, unit", function(){

  it("starts a game with a board of 81 cells", function(){
    Game.start();
    expect(window.board.collection.length).toBe(81);
  });
});