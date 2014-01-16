describe("Sudoku.View.Board, unit", function(){
  var collection, view;

  beforeEach(function(){
    collection = new Sudoku.Collection.Cells(fakeCellHashes);
    view = new Sudoku.View.Board({collection: collection});
  });

  describe("render",function(){
    it("sends a rows message to cells collection", function(){
      var cellsPrototype = Sudoku.Collection.Cells.prototype;
      spyOn(cellsPrototype, "rows");
      view.render();
      expect(cellsPrototype.rows).toHaveBeenCalled();
    });

    it("sends a render message to each row", function(){
      var rowsPrototype = Sudoku.View.Row.prototype;
      spyOn(rowsPrototype, "render");
      view.render();
      expect(rowsPrototype.render).toHaveBeenCalled();
    });
  });

  describe("generateValues", function(){
    describe("fills the board with valid numbers", function(){
      it("first row should contain values", function(){
        var cellsPrototype = Sudoku.Collection.Cells.prototype;
        spyOn(cellsPrototype, "generateValues");
        view.generateValues();
        expect(cellsPrototype.generateValues).toHaveBeenCalled();
      });
    });
  });
});