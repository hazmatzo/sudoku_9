var CollectionManager = function(collection) {
  this.collection = collection;
};

_.extend(CollectionManager.prototype, {
  clearValues: function() {
    this.collection.each(function(cell){
      cell.set({value: null});
    });
  },

  fillValues: function(){
    var rowValuesGenerator = new RowValuesGenerator(); //TODO change name to valuesGenerator
    this.collection.each(function(cell, i){
      var poppedValue = rowValuesGenerator.at(i);
      console.log(poppedValue);
      cell.set({value: poppedValue});
    });
  },

  isValid: function() {
    var valuesCollection = this.collection.map(function(cell){
      return cell.get("value");
    });
    var compactCollection = _.compact(valuesCollection);
    return (compactCollection.length === (_.uniq(compactCollection)).length);
  }
});