describe("BoardGenerator, functional", function(){ //TODO make these functional and unit tests
  describe("the board is empty", function(){
    it("is valid", function(){

    });

    it("is not filled in", function(){

    });

    it("sends a message to CollectionManager to fill empty row", function(){ //TODO this is unit

    });
  });

  describe("the board is half filled in", function(){

    it("is not filled in", function(){

    });

    it("sends a message to CollectionManager to fill empty row", function(){

    });

    xdescribe("sends messages to CollectionManager to determine board validity", function(){
      describe("it is valid", function(){
        it("does not send a message to clear row", function(){
          expect(collectionManager.clearRow()).toNotHaveBeenCalled();
        });
      });

      describe("it is invalid", function(){
        it("sends a message to clear row", function(){
          expect(collectionManager.clearRow()).toHaveBeenCalled();
        });
      });
    });
  });

  xdescribe("the board is filled in and valid", function(){
    it("is filled in", function(){

    });

    it("is valid", function(){

    });

    it("renders the board again", function(){

    });
  });
});