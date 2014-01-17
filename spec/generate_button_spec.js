describe("Sudoku.View.GenerateButton, unit", function(){
  var collection, view;
  // CIWK is there too much responsibility in this view?

  beforeEach(function(){
    collection = new Sudoku.Collection.Cells(fakeCellHashes);
    view = new Sudoku.View.GenerateButton({collection: collection});
  });

  describe("render", function(){
    it("renders an HTML div tag for .button", function(){
      expect(view.$el.hasClass("button")).toBeTruthy();
    });
  });


});