describe("Sudoku.Collection.Cells, unit", function(){
  describe("rows", function(){
    var collection;

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

      var nonEightNums = _.find(rowEightRowNums, function(num) {
        return num != 8;
      });
      expect(nonEightNums).toBeUndefined();
    });
  });
});

