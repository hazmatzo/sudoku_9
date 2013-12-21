Sudoku.View.Cell = Backbone.View.extend({
  render: function(){
    this.$el.append('<div class="cell">' + '#' + this.model.get('value') + '</div>');
  }
});

var cellView = new Sudoku.View.Cell({model: cellModel})