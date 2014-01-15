describe("Game, functional", function(){
  var $el;

  beforeEach(function(){
    var gameData = Game.data();
    $el = $('<div class="board"></div>');
    gameData.el = $el;
    Game.start(gameData);
  });

  describe("when going to a new game page", function(){
    it("should display a board with 9 rows", function(){
      expect($el.find('.row').length).toEqual(9);
    });

    it("should display a board with 81 cells", function(){
      expect($el.find('.cell').length).toEqual(81);
    });

    it("should display a board with empty cells", function(){
      expect($el.text()).not.toMatch(/\d+/);
    });

    it("should display a button 'Generate'", function(){
      expect($el.find(':submit').val()).toEqual('Generate');
    });
  });

  describe("when clicking the generate button", function(){
    beforeEach(function() {
      var game = Game.generate();
    });

    describe("should display a valid filled in board", function(){
      it("should display a filled in board", function(){
        expect($el.text().match(/\d+/g).length).toEqual(81);// Are there 81 numbers?
      });

      it("should display exactly 9 instances of each number", function(){
        // RaeZoer is super proud of this test. Don't mess with it!
        // Or you will incur the wrath of the RaeZoer!
        // Also, || :
        _.each(_.range(1, 10), function(num){
          var regEx = new RegExp(num, "g");
          expect($el.text().match(regEx).length).toEqual(9);
        });
      });

      it("should display a valid board", function(){
        expect(game.valid()).toBe(true);
      });
    });

    it("should display stats for how long it took to generate", function(){
      expect($el.find('#stats')).toMatch(/\d+/);
    });

    it("should display stats for how many cycles it took to generate", function(){
      expect($el.find('#cycles')).toMatch(/\d+/);
    });
  });
});