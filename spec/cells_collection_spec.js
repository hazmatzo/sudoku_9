describe("Sudoku.Collection.Cells, unit", function(){
  describe("rows", function(){
    var collection;

    it("should return 9 rows", function(){
      collection = new Sudoku.Collection.Cells(fakeCellHashes);
      expect(collection.rows().length).toBe(9);
    });

    it("each of the rows should contain collections", function(){
      collection = new Sudoku.Collection.Cells(fakeCellHashes);
      expect(collection.rows()[5] instanceof Backbone.Collection).toBe(true);
    });

    it("each of the rows has cells with all the same row", function(){
      collection = new Sudoku.Collection.Cells(fakeCellHashes);

    });


    //TODO Write a test to double check that all the row values are the same,
    // i.e. row 9 only contains row 9 cells
  });
});
