// As a puzzle addict, I want a game that will generate a valid 9 x 9 board

// Scenario: Going to an empty game page
//    When I go to the url of the generator
//    Then I should see an empty board
//    And I should see a button 'Generate'

describe("Sudoku.View.Board, functional", function(){
  var board, collection, gameData;
  //CIWK should these tests now be in a functional test suite for initialize?
  // seems weird that they're here

  beforeEach(function(){
    collection = new Backbone.Collection(fakeModelHashes); // 81 empty hashes
    board = new Sudoku.View.Board({collection: collection});
    gameData = function(){
      return {collection: collection, el: $('.board')};
    };
  });

  describe("when going to a new game page", function(){
    beforeEach(function(){
      board.render();
    });

    it("should display an empty board", function(){
      expect(board.$('.cell').length).toEqual(81); // 81 cells!
      expect(board.$el.text()).not.toMatch(/\d+/);
    });

    it("should display a button 'Generate'", function(){
      expect(board.$(':submit').val()).toEqual('Generate');
    });
  });
});