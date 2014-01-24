describe("Sudoku.Collection.Cells, unit", function(){
  var collection;

  describe("rows", function(){
    beforeEach(function(){
      collection = new Sudoku.Collection.Cells(fakeCellHashes);
    });

    it("should return 9 rows", function(){
      expect(collection.rows().length).toBe(9);
    });

    it("each of the rows should be a collection", function(){
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

  describe("columns", function(){
    beforeEach(function(){
      collection = new Sudoku.Collection.Cells(fakeCellHashes);
    });

    it("should return 9 columns", function(){
      expect(collection.columns().length).toBe(9);
    });

    it("each of the columns should be a collection", function(){
      expect(collection.columns()[5] instanceof Backbone.Collection).toBe(true);
    });

    it("column 8 has only cells of the column 8", function(){
      var columnEightColumnNums = (collection.column(8)).map(function(cell){
        return cell.attributes.column;
      });

      _.each(columnEightColumnNums, function(num){
        expect(num).toMatch(8);
      });
    });
  });

  describe("groups", function(){
    beforeEach(function(){
      collection = new Sudoku.Collection.Cells(fakeCellHashes);
    });

    it("should return 9 groups", function(){
      expect(collection.groups().length).toBe(9);
    });

    it("each of the groups should be a collection", function(){
      expect(collection.groups()[5] instanceof Backbone.Collection).toBe(true);
    });

    it("column 8 has only cells of the column 8", function(){
      var columnEightGroupNums = (collection.column(8)).map(function(cell){
        return cell.attributes.column;
      });

      _.each(columnEightGroupNums, function(num){
        expect(num).toMatch(8);
      });
    });
  });
});

