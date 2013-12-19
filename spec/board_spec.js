// As a puzzle addict, I want a game that will generate a valid 9 x 9 board

// Scenario: Going to an empty game page
//    When I go to the url of the generator
//    Then I should see an empty board
//    And I should see a button 'Generate'

describe("Board, functional", function(){
  var newBoard;
  var boardEl;

  beforeEach(function(){
    newBoard = new Board();
    boardEl = newBoard.$('.board').text();
  });

  describe("when going to a new game page", function(){
    it("should display an empty board", function(){
      newBoard.render();
      // expect(newBoard).toContain(); //81 cells!
      expect(boardEl).toContain('there are no numbers');
    });

    xit("should display a button 'Generate'")
  });
});