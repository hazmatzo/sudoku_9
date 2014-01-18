Sudoku.View.Row = Sudoku.View.Master.extend({
  className: 'row',

  templateId: function(){
    return '#row-template';
  },

  render: function(){
    Sudoku.View.Master.prototype.render.call(this);
    this.collection.each(this.renderCell, this);
    return this;
  },

  renderCell: function(item){
    var cell = new Sudoku.View.Cell({model: item});
    cell.render();
    this.$('.last-unit').append(cell.el);
  }
});