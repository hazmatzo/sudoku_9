describe("Sudoku.Collection.Cells, unit", function(){
  describe("rows", function(){

    it("should return 9 rows", function(){
      var collection = new Sudoku.Collection.Cells(fakeModelHashes);
      expect(collection.rows().length).toBe(9);
    });
  });
});