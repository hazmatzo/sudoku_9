describe("BoardGenerator, unit", function(){
  var collection, boardGenerator, collectionManagerPrototype;

  beforeEach(function(){
    collection = new Sudoku.Collection.Cells(fakeCellHashes);
    boardGenerator = new BoardGenerator({collection: collection});
    collectionManagerPrototype = CollectionManager.prototype;
  });

  describe("handleInvalidBoard", function(){
    describe("the board is valid", function(){
      it("doesn't send a message to CollectionManager to clear last row", function(){
        spyOn(boardGenerator, "isValid").andReturn(true);
        spyOn(collectionManagerPrototype, "clearRow");
        boardGenerator.handleInvalidBoard();
        expect(collectionManagerPrototype.clearRow).not.toHaveBeenCalled();
        //TODO change all toNotMatch to not.toMatch
      });
    });

    describe("the board is invalid", function(){
      it("sends a message to CollectionManager to clear last row", function(){
        spyOn(boardGenerator, "isValid").andReturn(false);
        spyOn(collectionManagerPrototype, "clearRow");
        boardGenerator.handleInvalidBoard();
        expect(collectionManagerPrototype.clearRow).toHaveBeenCalled();
      });
    });
  });

  describe("fillEmptyRow", function(){
    it("sends a message to CollectionManager to fill empty row", function(){ //TODO this is unit

    });
  });

  describe("isValid", function(){
    it("sends a message to CollectionManager to determine board validity", function(){

    });
  });

  describe("filledIn", function(){
    it("sends a message to CollectionManager to determine if any cells have a null value", function(){

    });
  });
});