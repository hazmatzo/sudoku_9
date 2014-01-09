describe("Sudoku.View.Row, unit", function(){
  var row, collection;

  describe("render", function(){
    collection = new Backbone.Collection(fakeRowHashes);
    row = new Sudoku.View.Row({collection: collection});

    it("renders an HTML div tag for .row", function(){
      row.render();
      expect(row.$el.hasClass("row")).toBe(true);
    });

    it("has 9 cells in it", function(){
      row.render();
      expect(this.collection.length).toEqual(9);
      //TODO This test is wrong. Must fix.
    });
  });
});