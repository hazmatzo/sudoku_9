var RowValuesGenerator = function(){
  this.initialize();
};

_.extend(RowValuesGenerator.prototype, {
  initialize: function(){
    this.randomizedValues = this.randomizeValues();
  },

  validRowValues: function(){
    return _.map(_.range(1,10), function(num){
      return num;
    });
  },

  randomizeValues: function(){
    return _.shuffle(this.validRowValues());
  },

  at: function(i) {
    return this.randomizedValues[i];
  }
});

