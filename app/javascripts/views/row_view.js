Sudoku.View.Row = Backbone.View.extend({
  render: function(){
    this.collection.each(this.renderCell, this);
    return this;
  },

  className: 'row',

  renderCell: function(item){
    var cell = new Sudoku.View.Cell({model: item});
    cell.render();
    this.$el.append(cell.el);
  }
});