describe("Sudoku.View.Row, unit", function(){
  var collection, view, model, cell;

  describe("render", function(){
    beforeEach(function(){
      collection = new Backbone.Collection(fakeRowHashes);
      view = new Sudoku.View.Row({collection: collection});
    });

    it("renders an HTML div tag for .row", function(){
      view.render();
      expect(view.$el.hasClass("row")).toBe(true);
    });

    it("sends a render message to cell", function(){
      var cellPrototype = Sudoku.View.Cell.prototype;
      spyOn(cellPrototype, "render");
      view.render();
      expect(cellPrototype.render.callCount).toEqual(9);
      // Refactor test success! Now with more .callCount!
    });
  });
});