describe("BoardGenerator, functional", function(){
  var collection, boardGenerator;

  //TODO make these functional and unit tests
  //make sure testing for when and when not to fillEmptyRow
  //make sure testing for when and when not valid
  beforeEach(function(){
    collection = new Sudoku.Collection.Cells(fakeCellHashes);
    boardGenerator = new BoardGenerator({collection: collection});
  });

  describe("fillEmptyRow", function(){
    it("generates a valid row with 9 values", function(){
      boardGenerator.fillEmptyRow();
      var rowOneValues = (collection.row(1)).map(function(cell){
        return cell.attributes.value;
      });

      _.each(rowOneValues, function(num){
        expect(num).toMatch(/\d+/);
      });
    });
  });

  describe("all turns taken", function(){
    beforeEach(function(){
      boardGenerator.generate();
    });
    //TODO
    // it("board is valid", function(){
    //   expect(boardGenerator.isValid()).toBeTruthy();
    // });

    // it("board should be full", function(){
    //   expect(boardGenerator.isFilledIn()).toBeTruthy();
    // });

    it("rerenders the board with all values showing", function(){
      console.log(boardGenerator.collection.map(function(cell){
        return cell.get("value");
      }));

      expect($(".board").text().match(/\d+/).length).toEqual(81);
    });
  });
});

