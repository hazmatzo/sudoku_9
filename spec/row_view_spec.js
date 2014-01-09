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
      spyOn(cellPrototype, "render"); //spy on the prototype of render
      //spy on the protoype of the cellPrototype
      view.render();
      expect(cellPrototype.render).toHaveBeenCalled();
    });
  });
});

// it("The 'toBeDefined' matcher compares against `undefined`", function() {
//     var a = {
//       foo: 'foo'
//     };

//     expect(a.foo).toBeDefined();
//     expect(a.bar).not.toBeDefined();
//   });

// myStub = jasmine.createSpy('myStub');
// spyOn(window, 'flipCounter').andReturn(myStub);

// //expectation
// expect(window.flipCounter).toHaveBeenCalled();