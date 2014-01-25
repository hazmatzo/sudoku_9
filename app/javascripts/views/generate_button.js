Sudoku.View.GenerateButton = Sudoku.View.Base.extend({
  events: {
    "click #generate-button"   : "generateValidBoard" //generateValidBoard is while loop, relies on isFilledIn
    //how to rerender when the boardGenerator completes its task (changing the values on all models)
  },

  initialize: function(opts){
    this.parent = opts.parent;
  },

  templateId: '#generate-button',

  className: 'button',

  generateValidBoard: function(){
    var boardGenerator = new BoardGenerator({collection: this.collection});
    boardGenerator.generate();
    console.log(this.collection.map(function(cell){
      return cell.get("value");
    }));
    //rerender board
    board.render();
  },

  render: function(){
    Sudoku.View.Base.prototype.render.call(this);
    $(this.parent).append(this.$el);
    return this;
  },
});
