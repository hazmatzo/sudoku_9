describe("RowValuesGenerator, unit", function(){
  var rowValuesGenerator, firstValue, secondValue;

  beforeEach(function(){
    rowValuesGenerator = new RowValuesGenerator();
  });

  describe("popValue", function(){
    it("provides a number", function(){
      firstValue = rowValuesGenerator.popValue();
      expect(firstValue).toMatch(/\d+/);
    });

    it("provides a unique (for the row) randomized value", function(){
      firstValue = rowValuesGenerator.popValue();
      secondValue = rowValuesGenerator.popValue();

      expect(firstValue).not.toMatch(secondValue);
    });

    it("deletes one value from the randomized values", function(){
      var beforeLength = rowValuesGenerator.randomizedValues.length;
      rowValuesGenerator.popValue();
      var afterLength = rowValuesGenerator.randomizedValues.length;
      expect(beforeLength).toEqual(afterLength+1);
    });
  });
});