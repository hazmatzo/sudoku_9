var fakeCellHashes = _.map(_.range(81), function(num){
  var cellData = new CellData(num);
  return cellData.attributes();
});

var fakeRowHashes = _.map(_.range(9), function(num){
  var cellData = new CellData(num);
  return cellData.attributes();
});

var fakeCellHash = function(num){
  var cellData = new CellData(num);
  return cellData.attributes();
};