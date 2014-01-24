describe("CollectionManager, unit", function(){
  var collection, collectionManager;

  beforeEach(function(){
    collection = new Sudoku.Collection.Cells(fakeRowHashes);
    collectionManager = new CollectionManager(collection);
  });

  describe("clearValues", function(){
    it("sets all values in the collection to null", function(){
      collection = new Sudoku.Collection.Cells(fakeFilledRowHashes());
      collectionManager = new CollectionManager(collection);
      collectionManager.clearValues();
      collection.each(function(cell){
        expect(cell.get("value")).toBe(null);
      });
    });
  });

  describe("fillValues", function(){
    it("sets all values in the collection to unique numbers", function(){
      collectionManager.fillValues();
      var collectionValues = collection.map(function(cell){
        return cell.get("value");
      });
      console.log(collectionValues);
      expect((_.uniq(collectionValues).length)).toEqual(9);
    });
  });

  describe("isValid", function(){
    describe("the collection is empty", function(){
      it("isValid", function(){
        collection = new Sudoku.Collection.Cells(fakeRowHashes);
        collectionManager = new CollectionManager(collection);
        expect(collectionManager.isValid()).toBe(true);
      });
    });

    describe("the collection is filled and has duplicates", function(){
      it("isValid is false", function(){
        collection = new Sudoku.Collection.Cells(fakeFilledRowHashes());
        collectionManager = new CollectionManager(collection);
        expect(collectionManager.isValid()).toBe(false);
      });
    });

    describe("the collection is filled and valid", function(){
      it("isValid", function(){
        collection = new Sudoku.Collection.Cells(fakeFilledValidRowHashes());
        collectionManager = new CollectionManager(collection);
        expect(collectionManager.isValid()).toBe(true);
      });
    });
  });
});