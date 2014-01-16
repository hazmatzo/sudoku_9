describe("Sudoku.Collection.Cells, unit", function(){
  var collection;

  describe("rows", function(){
    beforeEach(function(){
      collection = new Sudoku.Collection.Cells(fakeCellHashes);
    });

    it("should return 9 rows", function(){
      expect(collection.rows().length).toBe(9);
    });

    it("each of the rows should contain collections", function(){
      expect(collection.rows()[5] instanceof Backbone.Collection).toBe(true);
    });

    it("row 8 has only cells of the row 8", function(){
      var rowEightRowNums = (collection.row(8)).map(function(cell){
        return cell.attributes.row;
      });

      _.each(rowEightRowNums, function(num){
        expect(num).toMatch(8);
      });
    });
  });
});

