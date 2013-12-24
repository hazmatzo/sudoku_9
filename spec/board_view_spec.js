// As a puzzle addict, I want a game that will generate a valid 9 x 9 board

// Scenario: Going to an empty game page
//    When I go to the url of the generator
//    Then I should see an empty board
//    And I should see a button 'Generate'

describe("Sudoku.View.Board, functional", function(){
  var board, collection;

  beforeEach(function(){
    collection = new Backbone.Collection(); // 81 empty hashes
    board = new Sudoku.View.Board({collection: collection});
  });

  describe("when going to a new game page", function(){
    beforeEach(function(){
      board.render();
    });

    it("should display an empty board", function(){
      expect(board.$('.cell').length).toBe(81); // 81 cells!
      expect(board.$el.text()).not.toMatch(/\d+/);
    });

    it("should display a button 'Generate'", function(){
      expect(board.$('input[type=submit]').value()).toContain('Generate');
    });
  });
});