describe("Sudoku.View.GenerateButton, unit", function(){
  var collection, view;

  beforeEach(function(){
    collection = new Sudoku.Collection.Cells(fakeCellHashes);
    view = new Sudoku.View.GenerateButton({collection: collection});
  });

  describe("render", function(){
    it("renders an HTML div tag for .button", function(){
      expect(view.$el.hasClass("button")).toBeTruthy();
    });
  });

  describe("generateValidBoard", function(){
    it("sends a message to the Board Generator", function(){
      var boardGeneratorPrototype = BoardGenerator.prototype;
      spyOn(boardGeneratorPrototype, "generate");
      view.generateValidBoard();
      expect(boardGeneratorPrototype.generate).toHaveBeenCalled();
    });

    xit("re-renders the board", function(){

    });
  });
});