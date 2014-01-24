describe("RowValuesGenerator, unit", function(){
  var rowValuesGenerator, firstValue, secondValue;

  beforeEach(function(){
    rowValuesGenerator = new RowValuesGenerator();
  });

  describe("at", function(){
    it("provides a number", function(){
      firstValue = rowValuesGenerator.at(0);
      expect(firstValue).toMatch(/\d+/);
    });

    it("provides a unique (for the row) randomized value", function(){
      firstValue = rowValuesGenerator.at(0);
      secondValue = rowValuesGenerator.at(1);
      expect(firstValue).not.toMatch(secondValue);
    });
  });
});