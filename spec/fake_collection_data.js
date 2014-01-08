var fakeModelHashes = _.map(_.range(81), function(num){
  var cellData = new CellData(num);
  return cellData.attributes();
});