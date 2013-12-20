describe("Cell, unit", function(){
  var cell;
  var model;

  describe("render", function(){
    it("renders an HTML tag for cell class attribute", function(){
      model = new Backbone.Model({value: null});
      cell = new Cell({model:model});
      cell.render();
      expect(cell.$el.html()).toContain('<div class="cell">');
    });

    describe("value is null", function(){
      beforeEach(function(){
        model = new Backbone.Model({value: null});
        cell = new Cell({model:model});
        cell.render();
      });

      it("displays an empty cell", function(){
        expect(cell.$el.text()).not.toMatch(/\d+/);
      });
    });

    describe("value is not null", function(){
      beforeEach(function(){
        model = new Backbone.Model({value: 6});
        cell = new Cell({model:model});
        cell.render();
      });

      it("displays a number in the cell", function(){
        expect(cell.$el.text()).toContain('6');
      });
    });
  });
});