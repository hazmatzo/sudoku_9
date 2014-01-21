Sudoku.View.Row = Sudoku.View.Base.extend({
  className: 'row',

  templateId: '#row-template',

  render: function(){
    Sudoku.View.Base.prototype.render.call(this);
    this.collection.each(this.renderCell, this);
    return this;
  },

  renderCell: function(item){ //how is model getting passed through w/item?
    var cell = new Sudoku.View.Cell({model: item});
    cell.render();
    this.$('.last-unit').append(cell.el);
  }
});