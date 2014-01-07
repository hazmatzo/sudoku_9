  var modelHashes = _.map(_.range(81), function(num){
    return {value: 4};
  });

  var collection = new Backbone.Collection(modelHashes);

  var gameData = function(){
    return {collection: collection, el: $('.board')};
  };
