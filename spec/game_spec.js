describe("Game, functional", function(){
  var $el;

  describe("when going to a new game page", function(){
    beforeEach(function(){
//      var method = "data";
//      var gameData = Game[method]();
//      var gameData = Game["data"]();
      var gameData = Game.data();
      $el = $('<div class="board"></div>');
      gameData.el = $el;
      Game.start(gameData);

      //inject something into start w/ right el
    });

    it("should display a board with 81 empty cells", function(){
      // break these tests up
      expect($el.find('.row').length).toEqual(9);
      expect($el.find('.cell').length).toEqual(81);
      expect($el.text()).not.toMatch(/\d+/);
    });

    it("should display a button 'Generate'", function(){
      expect($el.find(':submit').val()).toEqual('Generate');
    });
  });
});

