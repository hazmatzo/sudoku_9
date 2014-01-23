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
        spyOn(collectionManagerPrototype, "clearValues");
        boardGenerator.handleInvalidBoard();
        expect(collectionManagerPrototype.clearValues).not.toHaveBeenCalled();
      });
    });

    describe("the board is invalid", function(){
      it("sends a message to CollectionManager to clear last row", function(){
        spyOn(boardGenerator, "isValid").andReturn(false);
        spyOn(collectionManagerPrototype, "clearValues");
        boardGenerator.handleInvalidBoard();
        expect(collectionManagerPrototype.clearValues).toHaveBeenCalled();
      });
    });
  });

  describe("fillEmptyRow", function(){
    it("sends a message to CollectionManager to fill values", function(){
      spyOn(collectionManagerPrototype, "fillValues");
      boardGenerator.fillEmptyRow();
      expect(collectionManagerPrototype.fillValues).toHaveBeenCalled();
    });
  });

  describe("isValid", function(){
    it("sends messages to CollectionManager to determine board validity", function(){
      spyOn(collectionManagerPrototype, "isValid");
      boardGenerator.isValid();
      expect(collectionManagerPrototype.isValid).toHaveBeenCalled();
    });

    it("returns the Boolean from collectionManager", function(){
      spyOn(collectionManagerPrototype, "isValid").andReturn(true);
      expect(boardGenerator.isValid()).toBe(true);
    });
  });

  describe("isFilledIn", function(){
    it("returns true if all of the values are full", function(){
      collection = new Sudoku.Collection.Cells(fakeCellHashesFilledIn());
      boardGenerator = new BoardGenerator({collection: collection});
      expect(boardGenerator.isFilledIn()).toBeTruthy();
    });

    it("returns false if any of the values are empty", function(){
      collection = new Sudoku.Collection.Cells(fakeCellHashesNotFilledIn());
      boardGenerator = new BoardGenerator({collection: collection});
      expect(boardGenerator.isFilledIn()).toBeFalsy();
    });
  });
});