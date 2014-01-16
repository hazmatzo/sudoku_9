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

  //CIWK should we be testing the model (e.g., cell model values) here?
  // or should we be testing that we're sending the set message to cell

  describe("generateRowValues", function(){
    it("generates values for the first row", function(){
      collection.generateRowValues();
      var rowOneValues = (collection.row(1)).map(function(cell){
        return cell.attributes.value;
      });
      console.log(rowOneValues);
      expect(rowOneValues).toNotMatch(null);
      expect(rowOneValues).toMatch(/\d+/);
    });

    xdescribe("it generates values for all other rows", function(){
      describe("is a valid row", function(){

      });

      describe("is not a valid row", function(){

      });
    });
  });
});

