Sudoku.View.Board = Backbone.View.extend({
  render: function(){
    this.$el.append(this.collection.render().el); //TODO determine what to append
    // cells? collection of cells?
  },
});

$(document).ready(function(){
  new Sudoku.View.Board({el: $('.board')[0]}).render();
});