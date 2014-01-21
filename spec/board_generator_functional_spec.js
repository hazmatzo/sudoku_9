describe("BoardGenerator, functional", function(){ //TODO make these functional and unit tests
  //make sure testing for when and when not to fillEmptyRow
  //make sure testing for when and when not valid
  var collection, boardGenerator;

  beforeEach(function(){
    collection = new Sudoku.Collection.Cells(fakeCellHashes);
    boardGenerator = new BoardGenerator({collection: collection});
  });

  describe("autoGenerateRow", function(){
    describe("generating the first row", function(){
      it("values are generated for the first row", function(){
        var rowOneValues = (collection.row(1)).map(function(cell){
          return cell.attributes.value;
        });

        _.each(rowOneValues, function(num){
          expect(num).toMatch(/\d+/);
        });
      });
    });

    describe("generating other rows", function(){

    });
  });

  xdescribe("the board is half filled in", function(){
    it("is not filled in", function(){

    });

    it("sends a message to CollectionManager to fill empty row", function(){

    });
  });


  describe("generate", function(){

    beforeEach(function(){
      boardGenerator.generate();
    });

    it("is filled in", function(){
      expect(isFilledIn).toBe(true);
    });

    it("is valid", function(){
      expect(isValid).toBe(true);
    });
  });
});






// ______________________________
  // describe("the board is empty", function(){
  //   beforeEach(function(){
  //     collection = new Sudoku.Collection.Cells(fakeCellHashes);
  //     view = new Sudoku.View.Board({collection: collection});
  //   });

  //   it("is valid", function(){
  //     expect(isValid()).toBe(true);
  //   });

  //   it("is not filled in", function(){

  //   });
  // });