var ValueGenerator = function(){ //RowValuesGenerator?

};

_.extend(ValueGenerator.prototype, {

  validRowValues: function(){
    _.map(_.range(1,10), function(num){
      return num;
    });
  },

  randomValues: function(){ //randomizedValues
    _.shuffle(this.validRowValues());
  },

  popValue: function(){
    this.randomValues().pop();
  }
});

