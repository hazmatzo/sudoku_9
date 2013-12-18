// As a puzzle addict, I want a game that will generate a valid 9 x 9 board

// Scenario: Going to an empty game page
//    When I go to the url of the generator
//    Then I should see an empty board
//    And I should see a button 'Generate'

describe("Board, functional", function(){
  var newBoard;

  beforeEach(function(){
    newBoard = new Board();
  });

  describe("when going to a new game page", function(){
    it("should display an empty board", function(){
      newBoard.render();
      // expect(newBoard).toContain(Cells); //what does HTML for a cell look like?
      expect(newBoard).not.toMatch(/\d+/);
    });

    xit("should display a button 'Generate'")
  });
});