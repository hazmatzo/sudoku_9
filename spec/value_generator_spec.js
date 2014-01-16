describe("Sudoku.View.ValueGenerator, unit", function(){
  var collection, view;

  beforeEach(function(){
    collection = new Sudoku.Collection.Cells(fakeCellHashes);
    view = new Sudoku.View.ValueGenerator({collection: collection});
  });

  describe("render", function(){
    it("renders an HTML div tag for .button", function(){
      expect(view.$el.hasClass("button")).toBeTruthy();
    });
  });
});


