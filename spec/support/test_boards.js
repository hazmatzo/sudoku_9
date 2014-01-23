var validBoard = function(){
  return [
    4,3,5, 2,6,9, 7,8,1,
    6,8,2, 5,7,1, 4,9,3,
    1,9,7, 8,3,4, 5,6,2,

    8,2,6, 1,9,5, 3,4,7,
    3,7,4, 6,8,2, 9,1,5,
    9,5,1, 7,4,3, 6,2,8,

    5,1,9, 3,2,6, 8,7,4,
    2,4,8, 9,5,7, 1,3,6,
    7,6,3, 4,1,8, 2,5,9
  ];
};

var oneInvalidBoard = function(){
  return [
    4,3,5, 2,6,9, 7,8,1,
    6,8,2, 5,7,1, 4,9,3,
    1,9,7, 8,3,4, 5,6,2,

    8,2,6, 1,9,5, 3,4,7,
    3,7,4, 6,8,2, 9,1,5,
    9,5,1, 7,4,3, 6,2,8,

    5,1,9, 3,2,6, 8,7,4,
    2,4,8, 9,5,7, 1,3,6,
    7,6,3, 4,1,8, 2,5,5
  ];
};

  var almostFilledValidBoard = function(){
  return [
    4,3,5, 2,6,9, 7,8,1,
    6,8,2, 5,7,1, 4,9,3,
    1,9,7, 8,3,4, 5,6,2,

    8,2,6, 1,9,5, 3,4,7,
    3,7,4, 6,8,2, 9,1,5,
    9,5,1, 7,4,3, 6,2,8,

    5,1,9, 3,2,6, 8,7,4,
    2,4,8, 9,5,7, 1,3,6,
    null, null, 3, 4,1,8, 2,5,9
  ];
};

  var illegalValueBoard = function(){
  return [
    4,3,5, 2,6,9, 7,8,1,
    6,8,2, 5,7,1, 4,9,3,
    1,9,7, 8,3,4, 5,6,2,

    8,2,6, "X",9,5, 3,4,7,
    3,7,4, 6,8,2, 9,1,5,
    9,5,1, 7,4,3, 6,2,8,

    5,1,9, 3,2,6, 8,7,4,
    2,4,8, 9,5,7, 1,3,6,
    7,6,3, 4,1,8, 2,5,9
  ];
};

    describe("when one cell is invalid", function(){});
    describe("when two cells are nil, but board is valid", function(){});
    describe("when a cell has an illegal value", function(){});
    describe("when boards cell values are all nil", function(){});