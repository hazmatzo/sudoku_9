describe("BoardGenerator, functional", function(){
  var collection, boardGenerator;

  //TODO make these functional and unit tests
  //make sure testing for when and when not to fillEmptyRow
  //make sure testing for when and when not valid
  beforeEach(function(){
    collection = new Sudoku.Collection.Cells(fakeCellHashes);
    boardGenerator = new BoardGenerator({collection: collection});
  });

  xdescribe("autoFillRow", function(){
    describe("generating the first row", function(){
      it("generates values for the first row", function(){
        boardGenerator.autoFillRow();
        var rowOneValues = (collection.row(1)).map(function(cell){
          return cell.attributes.value;
        });

        _.each(rowOneValues, function(num){
          expect(num).toMatch(/\d+/);
        });
      });
    });

    xdescribe("generating other rows", function(){
      describe("at the top of each turn", function(){ //turn here is defined as each row the generator fills, row-by-row
        it("generates values for an empty row", function(){
          // console.log(boardGenerator.collection.row(1).at(0).set({value:7}));
          // console.log(boardGenerator.collection.row(1).at(0).get("value"));
          boardGenerator.autoFillRow();
          var rowTwoValues = (collection.row(2)).map(function(cell){
            return cell.attributes.value;
          });

          _.each(rowTwoValues, function(num){
            expect(num).toMatch(/\d+/);
          });
        });
      });

      xdescribe("the board values are valid", function(){
        it("doesn't clear the last-entered row values", function(){
          // 1 come up with a set of values that will make the board valid
          var rowOneValues = boardGenerator.collection.row(1).map(function(cell) {
            return cell.get("value");
          });

          var validRowValues = function(){
            var values = [];
            values.push(rowOneValues.pop());
            values = values.concat(rowOneValues);
            return values;
          };

          // 2 stub for fillEmptyRow in order to manually populate with valid values
          boardGenerator = {
            fillEmptyRow: function(){
              var i = 0;
              _.each(validRowValues(), function(num){
                boardGenerator.collection.row(2).at(i).set({value:num});
                i++;
              });
            }
          };

          spyOn(boardGenerator, "fillEmptyRow"); // manually set the cells with valid values
          // 3 call autoFillRow, which used the fillEmptyRow stub instead of normal one


          boardGenerator.autoFillRow(); //should fill third row
          var rowTwoValues = (collection.row(2)).map(function(cell){
            return cell.attributes.value;
          });

          _.each(rowTwoValues, function(num){
            expect(num).toMatch(/\d+/);
          });
        });
      });

      xdescribe("the board values are invalid", function(){
        it("clears the last-entered row values", function(){
          var rowTwoValues = (collection.row(2)).map(function(cell){
            return cell.attributes.value;
          });

          _.each(rowTwoValues, function(num){
            expect(num).not.toMatch(/\d+/);
          });
        });
      });
    });

    //TODO: do we need a case for last row filled in and messages sent as a result?
  });

  describe("isValid", function(){
    describe("when rows, columns, and groups are all valid", function(){
      it("isValid", function() {
        var board = validBoard();
        boardGenerator.collection.each(function(cell){
          cell.set({value: board.pop()});
        });
        expect(boardGenerator.isValid()).toBe(true);
      });
    });

    describe("when one cell is invalid", function(){});
    describe("when two cells are nil, but board is valid", function(){});
    describe("when a cell has an illegal value", function(){});
    describe("when boards cell values are all nil", function(){});
  });

  xdescribe("all turns taken", function(){
    it("board is valid", function(){});
    it("board should be full", function(){});
    it("rerenders the board with all values showing", function(){});
  });
});

