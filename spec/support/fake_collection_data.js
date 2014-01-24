//provides 81 cells
var fakeCellHashes = _.map(_.range(81), function(num){
  var cellData = new CellData(num);
  return cellData.attributes();
});

//provides 9 rows of cells
var fakeRowHashes = _.map(_.range(9), function(num){
  var cellData = new CellData(num);
  return cellData.attributes();
});

//provides one cell
var fakeCellHash = function(num){
  var cellData = new CellData(num);
  return cellData.attributes();
};

var fakeCellHashesFilledIn = function(){
  var cellHashes = _.map(fakeCellHashes, function(cell){
    return _.clone(cell);
  });
  _.each(cellHashes, function(cell){
    cell.value = 8;
  });
  return cellHashes;
};

var fakeCellHashesNotFilledIn = function(){
  var cellHashes = _.map(fakeCellHashes, function(cell){
    return _.clone(cell);
  });
  _.each(cellHashes, function(cell){
    cell.value = 8;
  });
  cellHashes[70].value = null;
  return cellHashes;
};

var fakeFilledRowHashes = function(){
  var cellHashes = _.map(fakeRowHashes, function(cell){
    return _.clone(cell);
  });

  _.each(cellHashes, function(cell){
    cell.value = 8;
  });
  return cellHashes;
};

var fakeFilledValidRowHashes = function(){
  var cellHashes = _.map(fakeRowHashes, function(cell){
    return _.clone(cell);
  });

  var anArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  _.each(cellHashes, function(cell){
    cell.value = anArray.pop();
  });
  return cellHashes;
};