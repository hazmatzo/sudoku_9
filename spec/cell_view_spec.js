describe("Sudoku.View.Cell, unit", function(){
  var view, model;

  describe("render", function(){
    it("renders an HTML div tag for .cell", function(){
      model = new Backbone.Model({value: null});
      view = new Sudoku.View.Cell({model: model});
      // This not an instance of view. See John Resig's article on class inheritance.
      view.render();
      expect(view.$el.hasClass("cell")).toBeTruthy(); //CIWK, is this a reasonable test?
    });

    describe("value is null", function(){
      beforeEach(function(){
        model = new Backbone.Model({value: null});
        view = new Sudoku.View.Cell({model: model});
        view.render();
      });

      it("displays an empty cell", function(){
        expect(view.$el.text()).not.toMatch(/\d+/);
      });
    });

    describe("value is not null", function(){
      beforeEach(function(){
        model = new Backbone.Model({value: 6});
        view = new Sudoku.View.Cell({model: model});
        view.render();
      });

      it("displays a number in the cell", function(){
        expect(view.$el.text()).toContain('6');
      });
    });
  });
});